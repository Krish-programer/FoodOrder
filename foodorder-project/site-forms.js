(function () {
  const cartKey = "foodorder-cart";
  const previewHistoryKey = "foodorder-preview-history";

  function getPreviewHistory() {
    try { const data = JSON.parse(localStorage.getItem(previewHistoryKey) || "[]"); return Array.isArray(data) ? data : []; }
    catch { return []; }
  }

  function renderPreviewHistory() {
    const section = document.querySelector("[data-checkout-history]");
    const list = section?.querySelector("[data-checkout-history-list]");
    if (!section || !list) return;
    const history = getPreviewHistory();
    section.hidden = history.length === 0;
    list.replaceChildren();
    history.forEach(entry => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.dataset.previewReference = entry.reference;
      button.textContent = `${entry.reference} · ${entry.date} · ${entry.total}`;
      item.append(button);
      list.append(item);
    });
  }

  function readCart() {
    try {
      return JSON.parse(localStorage.getItem(cartKey) || "[]");
    } catch {
      return [];
    }
  }

  function errorMessage(control) {
    control.setCustomValidity("");
    if (control.validity.valueMissing) {
      return control.type === "radio" ? "Choose a payment method." : "This field is required.";
    }
    if (control.validity.typeMismatch && control.type === "email") return "Enter a valid email address.";
    if (control.validity.patternMismatch && control.name === "postalCode") return "Enter a six-digit PIN code.";
    return "";
  }

  function setFieldError(control, message) {
    const error = control.dataset.errorId ? document.getElementById(control.dataset.errorId) : null;
    control.setCustomValidity(message);
    if (message) control.setAttribute("aria-invalid", "true");
    else control.removeAttribute("aria-invalid");
    if (error) {
      error.textContent = message;
      error.hidden = !message;
    }
  }

  function validateControl(control) {
    if (control.type === "radio") {
      const radios = [...control.form.querySelectorAll(`input[type="radio"][name="${CSS.escape(control.name)}"]`)];
      const message = radios.some(radio => radio.checked) ? "" : "Choose a payment method.";
      radios.forEach(radio => setFieldError(radio, message));
      return !message;
    }
    const message = errorMessage(control);
    setFieldError(control, message);
    return !message;
  }

  function prepareFormValidation(form) {
    form.querySelectorAll("[required]").forEach(control => {
      const update = () => {
        if (form.dataset.validationAttempted === "true" || control.getAttribute("aria-invalid") === "true") {
          validateControl(control);
          if (form.dataset.validationAttempted === "true" && form.checkValidity()) {
            const feedback = form.querySelector("#checkout-feedback, #contact-feedback");
            if (feedback) feedback.textContent = "";
          }
        }
      };
      control.addEventListener("input", update);
      control.addEventListener("change", update);
    });
  }

  function validateRequiredFields(form) {
    form.dataset.validationAttempted = "true";
    let valid = true;
    const handledRadioGroups = new Set();
    form.querySelectorAll("[required]").forEach(control => {
      if (control.type === "radio") {
        if (handledRadioGroups.has(control.name)) return;
        handledRadioGroups.add(control.name);
      }
      if (!validateControl(control)) valid = false;
    });
    if (!valid) form.reportValidity();
    return valid;
  }

  function setupCheckout() {
    const form = document.querySelector("#checkout-form");
    if (!form) return;
    const feedback = document.querySelector("#checkout-feedback");
    const preview = document.querySelector("#checkout-preview");
    const previewDetails = preview?.querySelector("[data-preview-details]");
    const submit = form.querySelector("[data-place-order]");
    const paymentStatus = document.querySelector("[data-payment-status]");
    const paymentCards = [...form.querySelectorAll(".pay-card")];
    prepareFormValidation(form);
    renderPreviewHistory();

    document.addEventListener("click", event => {
      const button = event.target.closest("[data-preview-reference]");
      if (!button) return;
      const saved = getPreviewHistory().find(entry => entry.reference === button.dataset.previewReference);
      if (!saved || !preview || !previewDetails) return;
      preview.hidden = false;
      previewDetails.textContent = saved.details;
      preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    paymentCards.forEach(card => {
      const radio = card.querySelector('input[type="radio"]');
      radio.addEventListener("change", () => {
        paymentCards.forEach(option => option.classList.toggle("selected", option === card && radio.checked));
        if (radio.checked && paymentStatus) {
          paymentStatus.innerHTML = `Demo total: <b data-checkout-pay>${document.querySelector("[data-checkout-pay]")?.textContent || "₹0"}</b>. Selected ${radio.value}. No payment service is connected; this selection will not process a payment.`;
        }
      });
    });

    form.addEventListener("submit", event => {
      event.preventDefault();
      if (form.dataset.submitted === "true") return;
      feedback.textContent = "";
      if (!validateRequiredFields(form)) {
        feedback.textContent = "Please complete the required fields with valid details.";
        return;
      }
      const cart = readCart();
      const quantity = cart.reduce((sum, item) => sum + Number(item.qty || 0), 0);
      if (!quantity) {
        feedback.textContent = "Your cart is empty. Add a dish before placing a demo order.";
        return;
      }

      const method = new FormData(form).get("paymentMethod");
      const total = document.querySelector("[data-checkout-pay]")?.textContent || "₹0";
      const reference = `LOCAL-PREVIEW-${Date.now().toString().slice(-6)}`;
      const promoCode = localStorage.getItem("foodorder-promo-preview") || "none";
      const catalog = window.FoodMenuCatalog || [];
      const dishes = cart.map(row => `${catalog.find(item => item.id === Number(row.id))?.name || "Dish"} × ${Number(row.qty) || 0}`).join(", ");
      form.dataset.submitted = "true";
      form.querySelectorAll("input, textarea, button").forEach(control => { control.disabled = true; });
      submit.setAttribute("aria-disabled", "true");
      feedback.setAttribute("role", "status");
      feedback.setAttribute("aria-live", "polite");
      feedback.textContent = "Local checkout preview completed. This is not a placed order; no payment was processed. Use Back to Menu to continue browsing.";
      if (preview && previewDetails) {
        preview.hidden = false;
        const details = `Reference: ${reference}\nItems: ${dishes}\nPromo preview: ${promoCode}\nDemo total: ${total}\nSelected payment method: ${method}\nStatus: Not submitted to a restaurant. Payment not processed.`;
        previewDetails.textContent = details;
        const history = getPreviewHistory();
        history.unshift({ reference, date: new Date().toLocaleString(), total, details });
        localStorage.setItem(previewHistoryKey, JSON.stringify(history.slice(0, 10)));
        renderPreviewHistory();
      }

      // Clear only after the successful local preview has been recorded.
      localStorage.removeItem(cartKey);
      localStorage.removeItem("foodorder-promo-preview");
      document.dispatchEvent(new Event("foodorder:cart-updated"));

      const steps = [...document.querySelectorAll(".stepper .step")];
      steps.forEach((step, index) => {
        step.classList.toggle("done", index < 2);
        step.classList.toggle("active", index === 2);
      });
      const number = steps[2]?.querySelector(".step-num");
      if (number) number.textContent = "✓";
    });
  }

  function setupContact() {
    const form = document.querySelector("#contact-form");
    if (!form) return;
    const feedback = document.querySelector("#contact-feedback");
    prepareFormValidation(form);
    form.addEventListener("submit", event => {
      event.preventDefault();
      feedback.textContent = "";
      if (!validateRequiredFields(form)) {
        feedback.setAttribute("role", "alert");
        feedback.setAttribute("aria-live", "assertive");
        feedback.textContent = "Please enter your name, a valid email address, and a message.";
        return;
      }
      feedback.setAttribute("role", "status");
      feedback.setAttribute("aria-live", "polite");
      feedback.textContent = "Your message details are valid locally, but delivery is unavailable in this demo. Nothing was sent.";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupCheckout();
    setupContact();
  });
})();
