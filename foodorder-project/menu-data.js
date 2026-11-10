(function () {
  const catalog = [
    {"id":0,"page":1,"name":"Paneer Tikka","description":"Charred paneer marinated with yogurt, ginger, garlic and warming spices.","image":"images/menu/Pannertika.png","price":"300","rating":"4.8","tag":"VEG","badge":"BEST SELLER","category":"Tandoor & Kebabs"},
    {"id":1,"page":1,"name":"Butter Chicken","description":"Tandoor roasted chicken simmered in a creamy tomato and butter gravy.","image":"images/menu/Butterchicken.png","price":"330","rating":"4.7","tag":"NON-VEG","badge":"CHEF’S PICK","category":"Non-Vegetarian"},
    {"id":2,"page":1,"name":"Masala Dosa","description":"Crisp rice and lentil crepe filled with spiced potato masala.","image":"images/menu/MasalaDosa.png","price":"190","rating":"4.6","tag":"VEG","badge":"","category":"South Indian"},
    {"id":3,"page":1,"name":"Chicken Biryani","description":"Fragrant basmati rice layered with marinated chicken, caramelized onions, saffron and whole spices.","image":"images/menu/ChickenBiryani.png","price":"360","rating":"4.9","tag":"NON-VEG","badge":"POPULAR","category":"Rice & Biryani"},
    {"id":4,"page":1,"name":"Palak Paneer","description":"Soft paneer cubes simmered in a mildly spiced spinach gravy with garlic and cream.","image":"images/menu/PalakPanner.png","price":"250","rating":"4.8","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":5,"page":1,"name":"Samosa Chaat","description":"Crisp potato samosas topped with chickpeas, yogurt, tamarind chutney and fresh coriander.","image":"images/menu/Samosachaat.jpeg","price":"150","rating":"4.5","tag":"VEG","badge":"HOT","category":"Street Food"},
    {"id":6,"page":1,"name":"Tandoori Chicken","description":"Yogurt marinated chicken roasted with tandoori spices.","image":"images/menu/TandoriChicken.png","price":"320","rating":"4.7","tag":"NON-VEG","badge":"","category":"Tandoor & Kebabs"},
    {"id":7,"page":1,"name":"Gulab Jamun","description":"Warm milk dumplings soaked in cardamom and rose syrup.","image":"images/menu/GulabJamun.png","price":"130","rating":"4.9","tag":"VEG","badge":"SWEET","category":"Desserts & Drinks"},
    {"id":8,"page":2,"name":"Chole Bhature","description":"Punjabi spiced chickpeas served with fluffy, deep-fried bhature bread.","image":"images/menu/CholeBhature.png","price":"300","rating":"4.8","tag":"VEG","badge":"BEST SELLER","category":"Vegetarian"},
    {"id":9,"page":2,"name":"Chicken Tikka","description":"Boneless chicken marinated in yogurt and spices, then roasted until smoky and tender.","image":"images/menu/ChikenTikka.png","price":"330","rating":"4.7","tag":"NON-VEG","badge":"","category":"Tandoor & Kebabs"},
    {"id":10,"page":2,"name":"Aloo Gobi","description":"Potatoes and cauliflower cooked with turmeric, cumin and coriander.","image":"images/menu/AlooGobi.png","price":"190","rating":"4.6","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":11,"page":2,"name":"Lamb Rogan Josh","description":"Tender lamb slow cooked in a fragrant Kashmiri curry with browned onions and warming spices.","image":"images/menu/LambRoganJosh.png","price":"360","rating":"4.9","tag":"NON-VEG","badge":"CHEF’S PICK","category":"Non-Vegetarian"},
    {"id":12,"page":2,"name":"Pav Bhaji","description":"Mumbai style mashed vegetable curry served with buttery toasted pav rolls.","image":"images/menu/PavBhaji.png","price":"250","rating":"4.8","tag":"VEG","badge":"POPULAR","category":"Street Food"},
    {"id":13,"page":2,"name":"Fish Curry","description":"Tender fish simmered in a tangy Indian curry with tomato, ginger and spices.","image":"images/menu/FishCurry.png","price":"150","rating":"4.5","tag":"NON-VEG","badge":"","category":"Non-Vegetarian"},
    {"id":14,"page":2,"name":"Malai Kofta","description":"Soft vegetable and paneer dumplings served in a smooth, mildly spiced tomato and cream sauce.","image":"images/menu/MalaiKofta.png","price":"320","rating":"4.7","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":15,"page":2,"name":"Jalebi","description":"Crisp golden spirals soaked in fragrant sugar syrup.","image":"images/menu/Jalebi.png","price":"130","rating":"4.9","tag":"VEG","badge":"SWEET","category":"Desserts & Drinks"},
    {"id":16,"page":3,"name":"Dal Makhani","description":"Black lentils and kidney beans slow-cooked with tomato, butter, cream and warming spices.","image":"images/menu/DalMakhani.png","price":"300","rating":"4.8","tag":"VEG","badge":"BEST SELLER","category":"Vegetarian"},
    {"id":17,"page":3,"name":"Chicken Korma","description":"Tender chicken in a mild, creamy cashew and yogurt sauce.","image":"images/menu/18-chicken-korma.svg","price":"330","rating":"4.7","tag":"NON-VEG","badge":"","category":"Non-Vegetarian"},
    {"id":18,"page":3,"name":"Vegetable Biryani","description":"Basmati rice layered with seasonal vegetables, saffron and spices.","image":"images/menu/Vegetable Biryani.png","price":"190","rating":"4.6","tag":"VEG","badge":"POPULAR","category":"Rice & Biryani"},
    {"id":19,"page":3,"name":"Seekh Kebab","description":"Minced lamb seasoned with herbs and spices, shaped on skewers and grilled until smoky.","image":"images/menu/SheekKabab.png","price":"360","rating":"4.9","tag":"NON-VEG","badge":"","category":"Tandoor & Kebabs"},
    {"id":20,"page":3,"name":"Paneer Butter Masala","description":"Paneer cubes simmered in a buttery tomato gravy with cream and aromatic spices.","image":"images/menu/PannerButterMasala.png","price":"250","rating":"4.8","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":21,"page":3,"name":"Pani Puri","description":"Crisp puris filled with potato and chickpeas, served with tangy spiced water and chutneys.","image":"images/menu/PaniPuri.png","price":"150","rating":"4.5","tag":"VEG","badge":"HOT","category":"Street Food"},
    {"id":22,"page":3,"name":"Tandoori Fish Tikka","description":"Fish pieces marinated with yogurt, lemon and spices, then roasted in the tandoor.","image":"images/menu/FishTikka.png","price":"320","rating":"4.7","tag":"NON-VEG","badge":"","category":"Tandoor & Kebabs"},
    {"id":23,"page":3,"name":"Rasmalai","description":"Soft cheese dumplings served in chilled saffron cardamom milk.","image":"images/menu/Rasmalai.png","price":"130","rating":"4.9","tag":"VEG","badge":"SWEET","category":"Desserts & Drinks"},
    {"id":24,"page":4,"name":"Rajma Chawal","description":"Kidney bean curry simmered with tomato and spices, served with steamed basmati rice.","image":"images/menu/RajamaChawal.png","price":"300","rating":"4.8","tag":"VEG","badge":"POPULAR","category":"Rice & Biryani"},
    {"id":25,"page":4,"name":"Chicken 65","description":"Crispy fried chicken tossed with curry leaves and red chilli.","image":"images/menu/Chicken65.png","price":"330","rating":"4.7","tag":"NON-VEG","badge":"HOT","category":"Non-Vegetarian"},
    {"id":26,"page":4,"name":"Matar Paneer","description":"Paneer and green peas simmered in a spiced tomato and onion gravy.","image":"images/menu/MatarPanner.png","price":"190","rating":"4.6","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":27,"page":4,"name":"Mutton Biryani","description":"Aromatic basmati rice cooked with tender mutton and whole spices.","image":"images/menu/MuttonBiryani.png","price":"360","rating":"4.9","tag":"NON-VEG","badge":"CHEF’S PICK","category":"Rice & Biryani"},
    {"id":28,"page":4,"name":"Aloo Paratha","description":"Whole wheat flatbread stuffed with seasoned potato, griddled until golden and served with curd.","image":"images/menu/AlooParatha.png","price":"250","rating":"4.8","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":29,"page":4,"name":"Dahi Puri","description":"Crisp puris filled with potato, chutneys and cool yogurt.","image":"images/menu/DahiPuri.png","price":"150","rating":"4.5","tag":"VEG","badge":"","category":"Street Food"},
    {"id":30,"page":4,"name":"Chicken Seekh Kebab","description":"Spiced minced chicken grilled until smoky and tender.","image":"images/menu/ChickenSeekhKebab.png","price":"320","rating":"4.7","tag":"NON-VEG","badge":"","category":"Tandoor & Kebabs"},
    {"id":31,"page":4,"name":"Kheer","description":"Traditional rice pudding simmered with milk, cardamom and nuts.","image":"images/menu/Kheer.png","price":"130","rating":"4.9","tag":"VEG","badge":"SWEET","category":"Desserts & Drinks"},
    {"id":32,"page":5,"name":"Idli Sambar","description":"Steamed rice cakes served with lentil sambar and coconut chutney.","image":"images/menu/IddliSambhar.png","price":"300","rating":"4.8","tag":"VEG","badge":"POPULAR","category":"South Indian"},
    {"id":33,"page":5,"name":"Chicken Chettinad","description":"Chicken cooked with roasted pepper, coconut and South Indian spices.","image":"images/menu/ChickenChettinad.png","price":"330","rating":"4.7","tag":"NON-VEG","badge":"HOT","category":"Non-Vegetarian"},
    {"id":34,"page":5,"name":"Baingan Bharta","description":"Smoky roasted eggplant mashed with tomato, onion and spices.","image":"images/menu/BainganBharta.png","price":"190","rating":"4.6","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":35,"page":5,"name":"Prawn Masala","description":"Juicy prawns cooked in a coastal onion tomato masala.","image":"images/menu/PrawnMasala.png","price":"360","rating":"4.9","tag":"NON-VEG","badge":"","category":"Non-Vegetarian"},
    {"id":36,"page":5,"name":"Kadai Paneer","description":"Paneer and peppers tossed in a freshly ground kadai masala.","image":"images/menu/KadhaiPanner.png","price":"250","rating":"4.8","tag":"VEG","badge":"BEST SELLER","category":"Vegetarian"},
    {"id":37,"page":5,"name":"Onion Bhaji","description":"Crispy spiced onion fritters served with mint chutney.","image":"images/menu/OnionBhajia.png","price":"150","rating":"4.5","tag":"VEG","badge":"","category":"Street Food"},
    {"id":38,"page":5,"name":"Chicken Malai Tikka","description":"Creamy yogurt marinated chicken grilled in the tandoor.","image":"images/menu/ChickenMalaiTikka.png","price":"320","rating":"4.7","tag":"NON-VEG","badge":"","category":"Tandoor & Kebabs"},
    {"id":39,"page":5,"name":"Kulfi","description":"Creamy traditional Indian frozen dessert with pistachio.","image":"images/menu/Kulfi.png","price":"130","rating":"4.9","tag":"VEG","badge":"SWEET","category":"Desserts & Drinks"},
    {"id":40,"page":6,"name":"Veg Hakka Noodles","description":"Wok tossed noodles with vegetables, soy and Indo Chinese spices.","image":"images/menu/VegHakkaNoodles.png","price":"300","rating":"4.8","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":41,"page":6,"name":"Chicken 65 Biryani","description":"Fragrant rice topped with spicy fried chicken 65.","image":"images/menu/Chicken65Biryani.png","price":"330","rating":"4.7","tag":"NON-VEG","badge":"POPULAR","category":"Rice & Biryani"},
    {"id":42,"page":6,"name":"Bhindi Masala","description":"Tender okra stir fried with onion, tomato and Indian spices.","image":"images/menu/BhindiMasala.png","price":"190","rating":"4.6","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":43,"page":6,"name":"Lamb Seekh Kebab","description":"Juicy minced lamb kebabs seasoned and roasted over flame.","image":"images/menu/44-lamb-seekh-kebab.svg","price":"360","rating":"4.9","tag":"NON-VEG","badge":"CHEF’S PICK","category":"Tandoor & Kebabs"},
    {"id":44,"page":6,"name":"Mushroom Masala","description":"Mushrooms cooked in a robust onion tomato curry.","image":"images/menu/MushroomMasala.png","price":"250","rating":"4.8","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":45,"page":6,"name":"Aloo Tikki Chaat","description":"Crisp potato patties topped with yogurt and chutneys.","image":"images/menu/AlooTikkiChaat.png","price":"150","rating":"4.5","tag":"VEG","badge":"HOT","category":"Street Food"},
    {"id":46,"page":6,"name":"Hariyali Chicken Tikka","description":"Chicken marinated with fresh coriander, mint and green chilli.","image":"images/menu/HariyaliChickenTikka.png","price":"320","rating":"4.7","tag":"NON-VEG","badge":"","category":"Tandoor & Kebabs"},
    {"id":47,"page":6,"name":"Rasmalai Cake","description":"Soft sponge layered with saffron cream and rasmalai flavor.","image":"images/menu/Rasmalai Cake.png","price":"130","rating":"4.9","tag":"VEG","badge":"SWEET","category":"Desserts & Drinks"},
    {"id":48,"page":7,"name":"Mysore Masala Dosa","description":"Crisp dosa with spicy Mysore chutney and potato filling.","image":"images/menu/Mysore Masala Dosa.png","price":"300","rating":"4.8","tag":"VEG","badge":"BEST SELLER","category":"South Indian"},
    {"id":49,"page":7,"name":"Amritsari Kulcha","description":"Stuffed leavened bread served with chickpea curry.","image":"images/menu/Amritsari Kulcha.png","price":"330","rating":"4.7","tag":"VEG","badge":"","category":"Vegetarian"},
    {"id":50,"page":7,"name":"Chicken Handi","description":"Slow cooked chicken in a traditional spiced handi gravy.","image":"images/menu/Chicken Handi.png","price":"190","rating":"4.6","tag":"NON-VEG","badge":"POPULAR","category":"Non-Vegetarian"},
    {"id":51,"page":7,"name":"Goan Fish Curry","description":"Coastal fish curry with coconut, tamarind and warming spices.","image":"images/menu/Goan Fish Curry.png","price":"360","rating":"4.9","tag":"NON-VEG","badge":"","category":"Non-Vegetarian"},
    {"id":52,"page":7,"name":"Veg Thali","description":"A balanced selection of seasonal curries, dal, rice and bread.","image":"images/menu/Veg Thali.png","price":"250","rating":"4.8","tag":"VEG","badge":"POPULAR","category":"Vegetarian"},
    {"id":53,"page":7,"name":"Paneer Pakora","description":"Golden paneer fritters dipped in seasoned gram flour.","image":"images/menu/Paneer Pakora.png","price":"150","rating":"4.5","tag":"VEG","badge":"","category":"Street Food"},
    {"id":54,"page":7,"name":"Tandoori Prawns","description":"Prawns marinated in spices and char grilled in the tandoor.","image":"images/menu/Tandoori Prawns.png","price":"320","rating":"4.7","tag":"NON-VEG","badge":"","category":"Tandoor & Kebabs"},
    {"id":55,"page":7,"name":"Gajar Halwa","description":"Warm carrot pudding slow cooked with milk, ghee and nuts.","image":"images/menu/Gajar Halwa.png","price":"130","rating":"4.9","tag":"VEG","badge":"SWEET","category":"Desserts & Drinks"},
    {"id":56,"page":8,"name":"Butter Naan","description":"Soft leavened naan brushed with melted butter.","image":"images/menu/Butter Naan.png","price":"70","rating":"4.7","tag":"VEG","badge":"POPULAR","category":"Breads"},
    {"id":57,"page":8,"name":"Tandoori Roti","description":"Whole wheat roti baked in the clay tandoor.","image":"images/menu/Tandoori Roti.png","price":"60","rating":"4.7","tag":"VEG","badge":"","category":"Breads"},
    {"id":58,"page":8,"name":"Plain Roti","description":"Fresh whole wheat flatbread cooked on the griddle.","image":"images/menu/Plain Roti.png","price":"50","rating":"4.7","tag":"VEG","badge":"","category":"Breads"},
    {"id":59,"page":8,"name":"Garlic Naan","description":"Tandoor baked naan topped with garlic and herbs.","image":"images/menu/Garlic Naan.png","price":"80","rating":"4.7","tag":"VEG","badge":"","category":"Breads"},
    {"id":60,"page":8,"name":"Lachha Paratha","description":"Flaky layered whole wheat paratha cooked with ghee.","image":"images/menu/LachaPartha.png","price":"90","rating":"4.7","tag":"VEG","badge":"","category":"Breads"},
    {"id":61,"page":8,"name":"Missi Roti","description":"Traditional gram flour and wheat roti with herbs and spices.","image":"images/menu/Missi Roti.png","price":"70","rating":"4.7","tag":"VEG","badge":"","category":"Breads"},
    {"id":62,"page":8,"name":"Roomali Roti","description":"Thin, soft handkerchief bread cooked over a hot dome.","image":"images/menu/Roomali Roti.png","price":"60","rating":"4.7","tag":"VEG","badge":"","category":"Breads"},
    {"id":63,"page":8,"name":"Butter Kulcha","description":"Soft leavened bread finished with butter.","image":"images/menu/Butter Kulcha.png","price":"70","rating":"4.7","tag":"VEG","badge":"","category":"Breads"}
  ];
  const categories = ["All Items", "Vegetarian", "Non-Vegetarian", "South Indian", "Rice & Biryani", "Tandoor & Kebabs", "Street Food", "Desserts & Drinks", "Breads"];
  const money = (price) => "₹" + Number(price).toLocaleString("en-IN");
  const favoritesKey = "foodorder-favorites";
  function getFavorites() {
    try { const saved = JSON.parse(localStorage.getItem(favoritesKey) || "[]"); return Array.isArray(saved) ? saved.map(Number) : []; }
    catch { return []; }
  }

  function card(item) {
    return `<article class="food-card">
      <div class="food-img">${item.badge ? `<span class="badge">${item.badge}</span>` : ""}<span class="price-pill">${money(item.price)}</span><a href="product.html?item=${item.id}"><img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='images/menu/Pannertika.png'"></a></div>
      <div class="food-info"><a href="product.html?item=${item.id}"><h3>${item.name} <span class="rating">★ ${item.rating}</span></h3></a><p>${item.description}</p>
        <div class="food-bottom"><span class="tag">${item.tag}</span><button type="button" class="favorite-toggle" data-favorite="${item.id}" aria-pressed="${getFavorites().includes(item.id)}" aria-label="${getFavorites().includes(item.id) ? "Remove" : "Save"} ${item.name} ${getFavorites().includes(item.id) ? "from" : "to"} favorites">${getFavorites().includes(item.id) ? "♥" : "♡"}</button><a href="cart.html?add=${item.id}" class="add-small">🛒 Add to Cart</a></div><p class="card-add-feedback" data-add-feedback="${item.id}" role="status" aria-live="polite"></p>
      </div></article>`;
  }

  function initMenu() {
    const grid = document.querySelector(".food-grid");
    if (!grid) return;
    const status = document.querySelector("[data-menu-status]");
    const categoryLabels = [...document.querySelectorAll(".filter-card:first-child label")];
    const categoryNames = categoryLabels.map(label => label.textContent.trim());
    const search = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    const price = document.querySelector('input[type="range"]');
    const applyButton = document.querySelector(".filter-apply-btn") || document.querySelector(".filter-card .btn");
    const sort = document.querySelector("[data-menu-sort]");
    const pagination = document.querySelector("[data-menu-pagination]");
    const clearFilters = document.querySelector("[data-clear-menu-filters]");
    const priceValue = document.querySelector("[data-price-value]");
    const dietStatus = document.querySelector("[data-diet-status]");
    const activeFilters = document.querySelector("[data-active-filters]");
    const pageSize = 8;
    let page = 1;
    let category = "All Items";
    function filteredItems() {
      const term = (search?.value || "").trim().toLowerCase();
      const preferenceMode = document.querySelector('input[name="diet-preference"]:checked')?.value || "all";
      return catalog.filter(item => (category === "All Items" || item.category === category)
        && (!term || `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(term))
        && (preferenceMode === "all" || (preferenceMode === "veg" ? item.tag === "VEG" : item.tag === "NON-VEG"))
        && Number(item.price) <= Number(price?.value ?? price?.max ?? 2000));
    }

    function render() {
      const items = filteredItems();
      const selectedDiet = document.querySelector('input[name="diet-preference"]:checked')?.value || "all";
      const dietLabel = selectedDiet === "veg" ? "Vegetarian" : selectedDiet === "nonveg" ? "Non-Vegetarian" : "All diets";
      const maxPrice = Number(price?.value ?? 2000);
      if (priceValue) priceValue.textContent = money(maxPrice);
      if (dietStatus) dietStatus.textContent = `Diet: ${dietLabel}`;
      const sortMode = sort?.value || "popularity";
      const sorted = [...items].sort((a, b) => {
        if (sortMode === "name") return a.name.localeCompare(b.name);
        if (sortMode === "price-low") return Number(a.price) - Number(b.price);
        if (sortMode === "price-high") return Number(b.price) - Number(a.price);
        if (sortMode === "rating") return Number(b.rating) - Number(a.rating);
        const popularity = badge => ({"BEST SELLER": 4, "CHEF’S PICK": 3, "POPULAR": 2, "HOT": 1}[badge] || 0);
        return popularity(b.badge) - popularity(a.badge) || Number(b.rating) - Number(a.rating) || a.id - b.id;
      });
      const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
      page = Math.min(Math.max(page, 1), pageCount);
      const start = (page - 1) * pageSize;
      const pageItems = sorted.slice(start, start + pageSize);
      grid.innerHTML = pageItems.length ? pageItems.map(card).join("") : '<p class="subtitle">No dishes match these filters.</p>';
      if (status) status.textContent = `Showing ${pageItems.length ? start + 1 : 0}–${Math.min(start + pageSize, sorted.length)} of ${sorted.length} items for ${category}`;
      categoryLabels.forEach((label, index) => {
        const radio = label.querySelector("input[type=radio]");
        const categoryName = categoryNames[index] || categories[index] || "All Items";
        if (radio) radio.checked = categoryName === category;
        label.classList.toggle("is-active", categoryName === category);
      });
      document.querySelectorAll('input[name="diet-preference"]').forEach(radio => radio.closest("label")?.classList.toggle("is-active", radio.checked));
      const active = [];
      if (category !== "All Items") active.push(`Category: ${category}`);
      if ((search?.value || "").trim()) active.push(`Search: ${(search.value || "").trim()}`);
      if (selectedDiet !== "all") active.push(`Diet: ${dietLabel}`);
      if (maxPrice < Number(price?.max || 2000)) active.push(`Max price: ${money(maxPrice)}`);
      if (activeFilters) activeFilters.textContent = active.length ? `Active filters: ${active.join(" · ")}` : "Active filters: none";
      if (!pagination) return;
      pagination.innerHTML = `<button type="button" class="chip pagination-control" data-page="${Math.max(1, page - 1)}" aria-label="Previous page"${page === 1 ? " disabled" : ""}>‹</button>` +
        Array.from({length: pageCount}, (_, i) => `<button type="button" class="chip pagination-control" data-page="${i + 1}" aria-label="Page ${i + 1}"${page === i + 1 ? ' aria-current="page"' : ""}>${i + 1}</button>`).join("") +
        `<button type="button" class="chip pagination-control" data-page="${Math.min(pageCount, page + 1)}" aria-label="Next page"${page === pageCount ? " disabled" : ""}>›</button>`;
    }

    categoryLabels.forEach((label, i) => {
      label.style.cursor = "pointer";
      const radio = label.querySelector("input[type=radio]");
      if (!radio) return;
      radio.addEventListener("change", () => { if (!radio.checked) return; category = categoryNames[i] || categories[i] || "All Items"; page = 1; render(); });
    });
    pagination?.addEventListener("click", event => {
      const control = event.target.closest("[data-page]");
      if (!control || control.disabled) return;
      event.preventDefault();
      page = Number(control.dataset.page);
      render();
      const stickyHeader = document.querySelector(".topbar");
      const offset = (stickyHeader?.getBoundingClientRect().height || 0) + 16;
      const top = grid.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    });
    searchButton?.addEventListener("click", () => { page = 1; render(); });
    search?.addEventListener("input", () => { page = 1; render(); });
    search?.addEventListener("keydown", event => { if (event.key === "Enter") { page = 1; render(); } });
    applyButton?.addEventListener("click", () => { page = 1; render(); });
    document.querySelectorAll('input[name="diet-preference"]').forEach(input => input.addEventListener("change", () => { page = 1; render(); }));
    price?.addEventListener("input", () => { page = 1; render(); });
    sort?.addEventListener("change", () => { page = 1; render(); });
    clearFilters?.addEventListener("click", () => {
      if (search) search.value = "";
      if (price) price.value = price.max || "2000";
      const allDiet = document.querySelector('input[name="diet-preference"][value="all"]');
      if (allDiet) allDiet.checked = true;
      category = "All Items";
      if (sort) sort.value = "popularity";
      page = 1;
      render();
    });
    render();
  }

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-favorite]");
    if (!button) return;
    const id = Number(button.dataset.favorite);
    const favorites = getFavorites();
    const saved = favorites.includes(id);
    const next = saved ? favorites.filter(item => item !== id) : [...favorites, id];
    localStorage.setItem(favoritesKey, JSON.stringify(next));
    const item = catalog.find(row => row.id === id);
    button.setAttribute("aria-pressed", String(!saved));
    button.setAttribute("aria-label", `${saved ? "Save" : "Remove"} ${item?.name || "dish"} ${saved ? "to" : "from"} favorites`);
    button.textContent = saved ? "♡" : "♥";
  });

  document.addEventListener("click", event => {
    const addLink = event.target.closest('a[href*="cart.html?add="]');
    if (!addLink) return;
    const cardElement = addLink.closest(".food-card");
    if (!cardElement) return;
    const itemId = Number(new URL(addLink.href, location.href).searchParams.get("add"));
    const item = catalog.find(row => row.id === itemId);
    const feedback = cardElement.querySelector(`[data-add-feedback="${itemId}"]`);
    if (feedback && item) feedback.textContent = `${item.name} added to your cart. Continue browsing the menu.`;
  });

  function initProduct() {
    if (!document.querySelector(".product-image img")) return;
    const params = new URLSearchParams(window.location.search);
    const selected = catalog.find(item => String(item.id) === params.get("item")) || catalog[0];
    if (!selected) return;
    document.title = `FoodOrder | ${selected.name}`;
    const image = document.querySelector(".product-image img");
    image.src = selected.image;
    image.onerror = () => { image.onerror = null; image.src = "images/menu/Pannertika.png"; };
    image.alt = selected.name;
    const badge = document.querySelector("[data-product-badge]");
    if (badge) {
      badge.textContent = selected.badge || "";
      badge.hidden = !selected.badge;
    }
    const category = document.querySelector("[data-product-category]");
    if (category) category.textContent = selected.category;
    const detail = document.querySelector(".product-info");
    const cartKey = "foodorder-cart";
    const addSelectedToCart = (quantity) => {
      const qty = Math.max(1, Number(quantity) || 1);
      let cart = [];
      try {
        const saved = JSON.parse(localStorage.getItem(cartKey) || "[]");
        if (Array.isArray(saved)) cart = saved;
      } catch { /* Start with an empty cart if saved data is invalid. */ }
      const existing = cart.find(item => Number(item.id) === selected.id);
      if (existing) existing.qty = (Number(existing.qty) || 0) + qty;
      else cart.push({ id: selected.id, qty });
      localStorage.setItem(cartKey, JSON.stringify(cart));
      document.dispatchEvent(new Event("foodorder:cart-updated"));
    };
    const rating = detail.querySelector(".rating");
    rating.innerHTML = `★★★★★ ${selected.rating} &nbsp; <span style="color:#8a94a0">Customer favorite</span>`;
    detail.querySelector("h1").innerHTML = `${selected.name}<br><span class="accent">${selected.category}</span>`;
    detail.querySelector("p").textContent = selected.description;
    const demoInfo = document.createElement("p");
    demoInfo.className = "product-data-note";
    demoInfo.textContent = `Demo information only — not verified recipe or allergy guidance. Sample ingredients: ${selected.description} (description-based example; full recipe details are unavailable). Sample spice level: medium (illustrative). Potential allergens: recipe-specific details are unavailable; common allergens may be present.`;
    detail.querySelector("p").insertAdjacentElement("afterend", demoInfo);
    detail.querySelector(".option-row").innerHTML = `<div><span class="eyebrow">PRICE PER UNIT</span><div style="font-size:30px;font-weight:800">${money(selected.price)}</div></div><div class="qty" style="width:130px"><button type="button" data-product-qty="-1" aria-label="Decrease quantity">−</button> <b data-product-quantity aria-live="polite">1</b> <button type="button" data-product-qty="1" aria-label="Increase quantity">+</button></div>`;
    const quantityDisplay = detail.querySelector("[data-product-quantity]");
    let quantityFeedback = detail.querySelector("[data-product-quantity-feedback]");
    if (!quantityFeedback) {
      quantityFeedback = document.createElement("p");
      quantityFeedback.className = "product-data-note";
      quantityFeedback.dataset.productQuantityFeedback = "";
      quantityFeedback.setAttribute("role", "status");
      quantityFeedback.setAttribute("aria-live", "polite");
      detail.querySelector(".option-row").insertAdjacentElement("afterend", quantityFeedback);
    }
    let quantity = 1;
    detail.querySelectorAll("[data-product-qty]").forEach(button => button.addEventListener("click", () => {
      quantity = Math.max(1, quantity + Number(button.dataset.productQty));
      quantityDisplay.textContent = String(quantity);
    }));
    detail.querySelectorAll('a[href="cart.html"]').forEach(link => {
      link.href = "cart.html";
      link.addEventListener("click", event => {
        event.preventDefault();
        addSelectedToCart(quantity);
        quantityFeedback.textContent = `${quantity} ${quantity === 1 ? "item" : "items"} (${selected.name}) added to your cart.`;
        if (link.classList.contains("dark-btn")) window.location.href = "cart.html";
      });
    });
    const recommendationSet = catalog.filter(item => item.id !== selected.id && item.category !== selected.category).slice(0, 4);
    document.querySelector(".recommend-grid").innerHTML = recommendationSet.map(card).join("");
  }

  window.FoodMenuCatalog = catalog;
  window.foodMenuMoney = money;
  document.addEventListener("DOMContentLoaded", () => { initMenu(); initProduct(); });
})();

