(function () {
  const cartKey = "foodorder-cart";
  const promoKey = "foodorder-promo-preview";
  const catalog = window.FoodMenuCatalog || [];
  const money = window.foodMenuMoney || (value => "₹" + Number(value).toLocaleString("en-IN"));
  const promoConfig = { WELCOME20: { rate: 0.20, minimum: 500, maximum: 300 } };

  function getCart() {
    try {
      const value = JSON.parse(localStorage.getItem(cartKey) || "[]");
      return Array.isArray(value) ? value : [];
    } catch { return []; }
  }
  function saveCart(cart) { localStorage.setItem(cartKey, JSON.stringify(cart)); }
  function getPromo() { return localStorage.getItem(promoKey) || ""; }
  function setPromo(code) { if (code) localStorage.setItem(promoKey, code); else localStorage.removeItem(promoKey); }
  function add(id) {
    const item = catalog.find(row => row.id === Number(id));
    if (!item) return;
    const cart = getCart();
    const existing = cart.find(row => row.id === item.id);
    if (existing) existing.qty++;
    else cart.push({ id: item.id, qty: 1 });
    saveCart(cart);
  }
  function rows() {
    return getCart().map(row => ({ ...catalog.find(item => item.id === Number(row.id)), qty: Number(row.qty) || 0 }))
      .filter(item => item.id !== undefined && item.qty > 0);
  }
  function totals(data) {
    const subtotal = data.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);
    const code = getPromo();
    const offer = promoConfig[code];
    const discount = offer && subtotal >= offer.minimum ? Math.min(Math.round(subtotal * offer.rate), offer.maximum) : 0;
    const taxableSubtotal = subtotal - discount;
    const tax = Math.round(taxableSubtotal * 0.05);
    const delivery = 0; // Displayed only as an explicitly unconfigured demo placeholder.
    return { subtotal, discount, taxableSubtotal, tax, delivery, total: taxableSubtotal + tax + delivery, code };
  }
  function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
    document.querySelectorAll(".cart-count").forEach(el => { el.textContent = count; el.hidden = count === 0; });
  }
  function showPromoFeedback(message, kind = "info") {
    const feedback = document.querySelector("#promo-feedback");
    if (!feedback) return;
    feedback.textContent = message;
    feedback.dataset.kind = kind;
  }
  function promoPreviewMessage(data) {
    const code = getPromo();
    if (!code) return "No demo promo preview is applied.";
    const offer = promoConfig[code];
    const subtotal = data.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);
    if (!offer || subtotal < offer.minimum) return `${code} is saved, but the ₹${offer?.minimum || 0} minimum is not met. No discount preview is included.`;
    const discount = Math.min(Math.round(subtotal * offer.rate), offer.maximum);
    return `${code} demo preview: ${money(discount)} shown. Offer dates and first-order eligibility cannot be verified; this is not an active offer confirmation.`;
  }
  function drawCart() {
    const host = document.querySelector(".cart-items");
    const data = rows();
    if (host) host.innerHTML = data.length ? data.map(item => `<div class="cart-row card"><div class="cart-thumb"><img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='images/menu/Pannertika.png'"></div><div><h3>${item.name}</h3><p class="subtitle" style="margin:0;font-size:11px">${item.category}</p><span class="rating">★ ${item.rating}</span></div><div class="qty"><button type="button" data-qty="-1" data-id="${item.id}" aria-label="Remove one ${item.name}; removes the dish if this is its last unit" title="Decreases quantity; removes the dish at one">−</button> <b aria-live="polite">${item.qty}</b> <button type="button" data-qty="1" data-id="${item.id}" aria-label="Add one ${item.name}">+</button></div><div class="price"><b>${money(item.price * item.qty)}</b><br><small style="color:#899">${money(item.price)} EACH</small></div><button class="remove" type="button" data-remove="${item.id}" aria-label="Remove ${item.name} from cart">×</button></div>`).join("") : '<p class="subtitle">Your cart is empty. Choose a dish from the menu to get started.</p>';

    const sum = totals(data);
    document.querySelectorAll("[data-cart-subtotal]").forEach(el => el.textContent = money(sum.subtotal));
    document.querySelectorAll("[data-cart-discount]").forEach(el => el.textContent = money(sum.discount));
    document.querySelectorAll("[data-cart-tax]").forEach(el => el.textContent = money(sum.tax));
    document.querySelectorAll("[data-cart-delivery]").forEach(el => el.textContent = money(sum.delivery));
    document.querySelectorAll("[data-cart-total]").forEach(el => el.textContent = money(sum.total));
    document.querySelectorAll("[data-cart-items]").forEach(el => el.textContent = data.reduce((count, item) => count + item.qty, 0));
    const promoInput = document.querySelector("#promo-code");
    if (promoInput && !promoInput.matches(":focus")) promoInput.value = getPromo();
    if (document.querySelector("#promo-feedback")) showPromoFeedback(promoPreviewMessage(data), getPromo() ? "demo" : "info");
  }
  function drawCheckout() {
    const aside = document.querySelector("aside.summary.card.dark");
    if (!aside) return;
    const data = rows();
    const sum = totals(data);
    const items = aside.querySelector(".checkout-summary-items");
    if (items) items.innerHTML = (data.length ? data.map(item => `<div class="summary-row"><span>${item.name}<br><small>QTY: ${item.qty}</small></span><b>${money(item.price * item.qty)}</b></div>`).join("") : '<p>Your cart is empty.</p>') + `<div class="total"><div class="summary-row"><span>SUBTOTAL</span><b>${money(sum.subtotal)}</b></div><div class="summary-row"><span>DELIVERY FEE (DEMO)</span><b>${money(sum.delivery)}</b></div><div class="summary-row"><span>DISCOUNT</span><b>${money(sum.discount)}</b></div><div class="summary-row"><span>GST (5% AFTER DISCOUNT)</span><b>${money(sum.tax)}</b></div><div class="summary-row" style="color:var(--orange)"><b>TOTAL AMOUNT</b><b style="font-size:25px">${money(sum.total)}</b></div></div>`;
    document.querySelectorAll("[data-checkout-pay]").forEach(el => el.textContent = money(sum.total));
    const promoNote = document.querySelector("[data-checkout-promo-note]");
    if (promoNote) promoNote.textContent = sum.code ? promoPreviewMessage(data) : "No demo promo preview is applied.";
  }
  function refresh() { drawCart(); drawCheckout(); updateCartCount(); }

  document.addEventListener("foodorder:cart-updated", refresh);

  const params = new URLSearchParams(location.search);
  if (params.has("add")) { add(params.get("add")); history.replaceState({}, "", location.pathname); }

  document.addEventListener("click", event => {
    const addLink = event.target.closest('a[href*="cart.html?add="]');
    if (addLink && (document.querySelector("[data-menu-pagination]") || document.querySelector("[data-home-menu]"))) {
      event.preventDefault(); add(new URL(addLink.href, location.href).searchParams.get("add")); updateCartCount();
      const feedback = addLink.closest(".food-card")?.querySelector("[data-add-feedback]");
      if (feedback) {
        const item = catalog.find(row => row.id === Number(new URL(addLink.href, location.href).searchParams.get("add")));
        feedback.textContent = `${item?.name || "Dish"} added to your cart. Continue browsing the menu.`;
      }
      return;
    }
    if (event.target.closest("[data-apply-promo]")) {
      const input = document.querySelector("#promo-code");
      const code = (input?.value || "").trim().toUpperCase();
      const data = rows();
      const subtotal = data.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);
      const offer = promoConfig[code];
      if (!code) {
        setPromo(""); refresh(); showPromoFeedback("Enter a promo code to preview it.", "error"); return;
      }
      if (!offer) {
        setPromo(""); refresh(); showPromoFeedback("This code is not configured in the local demo. Expiry and active status cannot be verified.", "error"); return;
      }
      if (subtotal < offer.minimum) {
        setPromo(""); refresh(); showPromoFeedback(`WELCOME20 preview requires an item subtotal of at least ${money(offer.minimum)}. No preview discount was applied.`, "error"); return;
      }
      setPromo(code); refresh();
      showPromoFeedback(`${code} demo preview applied. First-order eligibility and expiration cannot be checked; no real offer is confirmed.`, "demo");
      return;
    }
    if (event.target.closest("[data-clear-promo]")) {
      setPromo(""); refresh(); showPromoFeedback("Demo promo preview cleared.", "info"); return;
    }
    const qty = event.target.closest("[data-qty]");
    const remove = event.target.closest("[data-remove]");
    const clear = event.target.closest("[data-clear-cart]");
    if (qty) {
      const cart = getCart();
      const item = cart.find(row => row.id === Number(qty.dataset.id));
      if (!item) return;
      if (Number(qty.dataset.qty) < 0 && item.qty === 1 && !window.confirm(`Remove ${catalog.find(row => row.id === item.id)?.name || "this dish"} from your cart?`)) return;
      item.qty += Number(qty.dataset.qty);
      if (item.qty < 1) cart.splice(cart.indexOf(item), 1);
      saveCart(cart); refresh(); return;
    }
    if (remove) {
      const item = catalog.find(row => row.id === Number(remove.dataset.remove));
      if (!window.confirm(`Remove ${item?.name || "this dish"} from your cart?`)) return;
      saveCart(getCart().filter(row => row.id !== Number(remove.dataset.remove))); refresh(); return;
    }
    if (clear) {
      if (!getCart().length || !window.confirm("Clear all items from your cart?")) return;
      saveCart([]); refresh();
    }
  });

  document.addEventListener("DOMContentLoaded", refresh);
  window.addEventListener("storage", event => { if (event.key === cartKey || event.key === promoKey) refresh(); });
})();
