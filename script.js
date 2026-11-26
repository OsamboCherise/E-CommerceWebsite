/* =========================================================
   THE ATELIER — Bespoke Leather Goods
   Interactive Catalogue · Cart · Search · Bulk Quotes
   ========================================================= */

// ---------- PRODUCT DATA (ZAR) ----------
// These match the exact filenames in your folder.
const PRODUCTS = [
  {
    id: 'atl-001', name: 'The Signature Tote', category: 'tote', price: 3899, tag: 'Bestseller',
    desc: 'Our iconic structured tote in full-grain leather. Unisex design, fits a 15" laptop, and features solid brass hardware. Perfect for the daily commute or a corporate setting.',
    img: 'BAG1.jpeg' 
  },
  {
    id: 'atl-002', name: 'The Utility Crossbody', category: 'crossbody', price: 2299, tag: 'New',
    desc: 'A bold, vibrant red crossbody with dual silver zips and an adjustable webbing strap. Designed for hands-free movement, whether you are at a festival or on a site visit.',
    img: 'BAG 5.jpeg'
  },
  {
    id: 'atl-003', name: 'The Suede Zip Pouch', category: 'pouch', price: 899, tag: null,
    desc: 'A minimalist, unisex zip pouch in premium charcoal suede. Features a contrast leather wrist strap. Ideal for organizing tech accessories or as a premium corporate gift.',
    img: 'BAG 6.jpeg'
  },
  {
    id: 'atl-004', name: 'The Executive Backpack', category: 'backpack', price: 3499, tag: 'Bestseller',
    desc: 'Sleek, matte black leather backpack with multiple compartments and a padded laptop sleeve. The ultimate unisex commuter bag that transitions effortlessly from office to airport.',
    img: 'BAG 7.jpeg'
  },
  {
    id: 'atl-005', name: 'The Slouch Shoulder Bag', category: 'shoulder', price: 3199, tag: null,
    desc: 'A beautifully slouchy hobo-style shoulder bag in deep forest green leather. Soft, spacious, and effortlessly elegant for everyday wear.',
    img: 'BAG 8.jpeg'
  },
  {
    id: 'atl-006', name: 'The Twin Tote Set', category: 'tote', price: 4599, tag: 'New',
    desc: 'A matching set of two tan leather totes (large and medium). Crafted from soft, pebbled leather with contrast stitching. Perfect for the professional who needs options.',
    img: 'BAG 9.jpeg'
  },
  {
    id: 'atl-007', name: 'The Slate Zip Pouch', category: 'pouch', price: 899, tag: null,
    desc: 'A soft slate-blue leather zip pouch with a silver zipper. Unisex, versatile, and perfect for corporate gifting or personal organization.',
    img: 'BAG 10.jpeg'
  },
  {
    id: 'atl-008', name: 'The Noir Satchel', category: 'shoulder', price: 2899, tag: null,
    desc: 'A classic, structured satchel in smooth black leather. Features a silver turn-lock closure and a detachable strap. A timeless piece for any wardrobe.',
    img: 'BAG 11.jpeg'
  },
  {
    id: 'atl-009', name: 'The Mini Crossbody', category: 'crossbody', price: 1899, tag: 'Bestseller',
    desc: 'A compact, vibrant red crossbody with a long strap. Small enough to be elegant, large enough for your phone, wallet, and keys.',
    img: 'BAG 12.jpeg'
  },
  {
    id: 'atl-010', name: 'The Travel Duffel', category: 'backpack', price: 4999, tag: 'New',
    desc: 'A spacious, unisex leather duffel bag. Designed for weekend getaways and business travel. Features reinforced leather handles and a detachable shoulder strap.',
    img: 'BAG 13.jpeg'
  },
  {
    id: 'atl-011', name: 'The Wristlet Pouch', category: 'pouch', price: 799, tag: null,
    desc: 'A sleek, dark grey leather wristlet. Perfect for a night out or as a minimalist everyday carry. Features a secure zip closure.',
    img: 'BAG 14.jpeg'
  },
  {
    id: 'atl-012', name: 'The Bucket Bag', category: 'shoulder', price: 2799, tag: null,
    desc: 'A modern take on the classic bucket bag in rich tan leather. Features a drawstring closure and an adjustable shoulder strap.',
    img: 'BAG2.jpeg'
  }
];

// ---------- LOOKBOOK DATA (Using your specific files) ----------
const LOOKBOOK = [
  { type: 'image', src: 'BAG 5.jpeg', label: '01 · the utility crossbody' },
  { type: 'image', src: 'BAG 7.jpeg', label: '02 · the executive backpack' },
  { type: 'video', src: 'BAG 15.mp4', label: '03 · the making of' },
  { type: 'image', src: 'BAG1.jpeg', label: '04 · the signature tote' },
  { type: 'image', src: 'BAG 9.jpeg', label: '05 · the twin tote set' },
  { type: 'image', src: 'BAG 11.jpeg', label: '06 · the noir satchel' }
];

// ---------- STATE ----------
let cart = [];
let activeFilter = 'all';
let activeSort = 'featured';
let visibleCount = 8;
let quickviewProduct = null;
let quickviewQty = 1;

// ---------- DOM ELEMENTS ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const productGrid   = $('#productGrid');
const resultsCount  = $('#resultsCount');
const loadMoreBtn   = $('#loadMoreBtn');
const sortSelect    = $('#sortSelect');

const cartDrawer    = $('#cartDrawer');
const cartOverlay   = $('#cartOverlay');
const cartBody      = $('#cartBody');
const cartSubtotal  = $('#cartSubtotal');
const cartBadge     = $('#cartBadge');
const cartItemCount = $('#cartItemCount');
const cartToggle    = $('#cartToggle');
const cartClose     = $('#cartClose');
const checkoutBtn   = $('#checkoutBtn');
const bulkQuoteBtn  = $('#bulkQuoteBtn');
const toast         = $('#toast');

const modalOverlay  = $('#modalOverlay');
const quickview     = $('#quickview');
const modalClose    = $('#modalClose');
const qvImage       = $('#qvImage');
const qvName        = $('#qvName');
const qvPrice       = $('#qvPrice');
const qvDesc        = $('#qvDesc');
const qvCategory    = $('#qvCategory');
const qvQty         = $('#qvQty');
const qvMinus       = $('#qvMinus');
const qvPlus        = $('#qvPlus');
const qvAddToCart   = $('#qvAddToCart');

const lookbookGrid        = $('#lookbookGrid');
const lookbookModal       = $('#lookbookModal');
const lookbookModalOverlay= $('#lookbookModalOverlay');
const lookbookModalClose  = $('#lookbookModalClose');
const lookbookModalContent= $('#lookbookModalContent');

const searchToggle  = $('#searchToggle');
const searchOverlay = $('#searchOverlay');
const searchInput   = $('#searchInput');
const searchClose   = $('#searchClose');
const searchResults = $('#searchResults');

const navToggle     = $('#navToggle');
const mobileMenu    = $('#mobileMenu');
const mobileClose   = $('#mobileClose');

const contactForm   = $('#contactForm');
const contactName   = $('#contactName');
const contactEmail  = $('#contactEmail');
const contactMsg    = $('#contactMsg');
const contactNote   = $('#contactNote');

const calcProduct   = $('#calcProduct');
const calcQty       = $('#calcQty');
const calcTotal     = $('#calcTotal');

// ---------- HELPERS ----------
const money = (n) => 'R ' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const byId = (id) => PRODUCTS.find((p) => p.id === id);

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---------- SCROLL REVEAL ANIMATION ----------
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  reveals.forEach(el => observer.observe(el));
}

// ---------- LOOKBOOK RENDERING ----------
function renderLookbook() {
  if (!lookbookGrid) return;
  lookbookGrid.innerHTML = LOOKBOOK.map((item, index) => `
    <div class="lookbook-item reveal active" data-lookbook-index="${index}" style="background-image: url('${item.src}'); background-color: #1a1412;">
      ${item.type === 'video' ? '<div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); color:var(--cream); font-size:2rem;"><i class="fas fa-play-circle"></i></div>' : ''}
      <span>${item.label}</span>
    </div>
  `).join('');
}

// ---------- PRODUCT RENDERING ----------
function filteredProducts() {
  let list = activeFilter === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter((p) => p.category === activeFilter);

  if (activeSort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (activeSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (activeSort === 'newest')     list.sort((a, b) => (b.tag === 'New') - (a.tag === 'New'));

  return list;
}

function renderProducts() {
  const list = filteredProducts();
  const visible = list.slice(0, visibleCount);

  productGrid.innerHTML = visible.map((p) => `
    <article class="product-card reveal active" data-id="${p.id}">
      <div class="product-media">
        ${p.tag ? `<span class="product-tag ${p.tag === 'New' ? 'tag-new' : ''}">${p.tag}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <button class="quickview-btn" data-quickview="${p.id}">quick view</button>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">${money(p.price)}</p>
        <button class="product-add" data-add="${p.id}">add to selection</button>
      </div>
    </article>
  `).join('');

  resultsCount.textContent = `showing ${visible.length} of ${list.length} pieces`;
  loadMoreBtn.style.display = list.length > visibleCount ? 'inline-flex' : 'none';
}

// ---------- CART SYSTEM ----------
function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartQty()   { return cart.reduce((s, i) => s + i.qty, 0); }

function addToCart(id, qty = 1) {
  const product = byId(id);
  if (!product) return;
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty });
  renderCart();
  bumpBadge();
  showToast(`${product.name} added to selection`);
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  renderCart();
}

function renderCart() {
  const count = cartQty();
  cartBadge.textContent = count;
  cartItemCount.textContent = `(${count})`;

  if (cart.length === 0) {
    cartBody.innerHTML = `<p class="cart-empty">your selection is empty.<br />time to make a statement.</p>`;
    cartSubtotal.textContent = money(0);
    return;
  }

  cartBody.innerHTML = cart.map((i) => `
    <div class="cart-item" data-id="${i.id}">
      <div class="cart-item-img" style="background-image:url('${i.img}')"></div>
      <div class="cart-item-info">
        <h4>${i.name}</h4>
        <p class="ci-price">${money(i.price)}</p>
        <div class="ci-qty">
          <button data-qty="-1" data-id="${i.id}">−</button>
          <span>${i.qty}</span>
          <button data-qty="1" data-id="${i.id}">+</button>
        </div>
      </div>
      <button class="ci-remove" data-remove="${i.id}" aria-label="remove"><i class="fas fa-times"></i></button>
    </div>
  `).join('');

  cartSubtotal.textContent = money(cartTotal());
}

function bumpBadge() {
  cartBadge.style.transform = 'scale(1.4)';
  setTimeout(() => (cartBadge.style.transform = 'scale(1)'), 250);
}

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ---------- QUICKVIEW SYSTEM ----------
function openQuickview(id) {
  const p = byId(id);
  if (!p) return;
  quickviewProduct = p;
  quickviewQty = 1;
  qvImage.style.backgroundImage = `url('${p.img}')`;
  qvName.textContent = p.name;
  qvPrice.textContent = money(p.price);
  qvDesc.textContent = p.desc;
  qvCategory.textContent = p.category;
  qvQty.textContent = quickviewQty;
  quickview.classList.add('open');
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickview() {
  quickview.classList.remove('open');
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ---------- LOOKBOOK MODAL SYSTEM ----------
function openLookbookModal(index) {
  const item = LOOKBOOK[index];
  if (!item) return;

  if (item.type === 'image') {
    lookbookModalContent.innerHTML = `<img src="${item.src}" alt="${item.label}" />`;
  } else if (item.type === 'video') {
    lookbookModalContent.innerHTML = `
      <video controls autoplay playsinline>
        <source src="${item.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }

  lookbookModal.classList.add('open');
  lookbookModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLookbookModal() {
  lookbookModal.classList.remove('open');
  lookbookModalOverlay.classList.remove('open');
  lookbookModalContent.innerHTML = ''; // Stop video playing
  document.body.style.overflow = '';
}

// ---------- SEARCH SYSTEM ----------
function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) { searchResults.innerHTML = ''; return; }

  const matches = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    searchResults.innerHTML = `<p class="cart-empty">no pieces match "${query}".</p>`;
    return;
  }

  searchResults.innerHTML = matches
    .map((p) => `
      <div class="search-result-item" data-quickview="${p.id}">
        <div class="search-result-thumb" style="background-image:url('${p.img}')"></div>
        <div>
          <h4>${p.name}</h4>
          <span>${money(p.price)}</span>
        </div>
      </div>`)
    .join('');
}

// ---------- BULK CALCULATOR SYSTEM ----------
function initCalculator() {
  if (!calcProduct) return;
  
  // Populate select
  calcProduct.innerHTML = `<option value="" disabled selected>Select a piece...</option>` + 
    PRODUCTS.map(p => `<option value="${p.id}">${p.name} — ${money(p.price)}</option>`).join('');

  function updateCalc() {
    const id = calcProduct.value;
    const qty = parseInt(calcQty.value) || 0;
    
    if (!id || qty < 10) {
      calcTotal.textContent = "R 0.00";
      return;
    }

    const product = byId(id);
    if (!product) return;

    // Apply tiered discount
    let discount = 0;
    if (qty >= 50) discount = 0.15;      // 15% off 50+
    else if (qty >= 25) discount = 0.10; // 10% off 25+
    else if (qty >= 10) discount = 0.05; // 5% off 10+

    const baseTotal = product.price * qty;
    const finalTotal = baseTotal * (1 - discount);
    
    calcTotal.innerHTML = `${money(finalTotal)} <span style="font-size:0.7rem; color:var(--forest-bright); display:block;">(${(discount*100)}% bulk discount applied)</span>`;
  }

  calcProduct.addEventListener('change', updateCalc);
  calcQty.addEventListener('input', updateCalc);
}

// ---------- EVENT WIRING ----------
function init() {
  renderProducts();
  renderLookbook();
  renderCart();
  initCalculator();
  initScrollReveal();

  // Product Grid Events
  productGrid.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) { addToCart(addBtn.dataset.add); return; }
    const qvBtn = e.target.closest('[data-quickview]');
    if (qvBtn) openQuickview(qvBtn.dataset.quickview);
  });

  // Lookbook Grid Events
  lookbookGrid.addEventListener('click', (e) => {
    const item = e.target.closest('[data-lookbook-index]');
    if (item) openLookbookModal(item.dataset.lookbookIndex);
  });

  // Filters
  $$('.filter-btn').forEach((btn) =>
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      visibleCount = 8;
      renderProducts();
    })
  );

  // Sort
  sortSelect.addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderProducts();
  });

  // Load more
  loadMoreBtn.addEventListener('click', () => {
    visibleCount += 8;
    renderProducts();
  });

  // Cart Drawer
  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  cartBody.addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn) { changeQty(qtyBtn.dataset.id, Number(qtyBtn.dataset.qty)); return; }
    const rm = e.target.closest('[data-remove]');
    if (rm) removeFromCart(rm.dataset.remove);
  });

  // Standard Checkout
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) { showToast('your selection is empty'); return; }
    const total = money(cartTotal());
    const items = cartQty();
    showToast(`retail order placed · ${items} item(s) · ${total}`);
    cart = [];
    renderCart();
    setTimeout(closeCart, 1400);
  });

  // Bulk Quote from Cart
  bulkQuoteBtn.addEventListener('click', () => {
    if (cart.length === 0) { showToast('add pieces to request a bulk quote'); return; }
    showToast(`bulk quote requested for ${cartQty()} items. we will email you.`);
    closeCart();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  // Quickview Modal
  modalClose.addEventListener('click', closeQuickview);
  modalOverlay.addEventListener('click', closeQuickview);
  qvMinus.addEventListener('click', () => {
    quickviewQty = Math.max(1, quickviewQty - 1);
    qvQty.textContent = quickviewQty;
  });
  qvPlus.addEventListener('click', () => {
    quickviewQty += 1;
    qvQty.textContent = quickviewQty;
  });
  qvAddToCart.addEventListener('click', () => {
    if (quickviewProduct) { addToCart(quickviewProduct.id, quickviewQty); closeQuickview(); }
  });

  // Lookbook Modal
  lookbookModalClose.addEventListener('click', closeLookbookModal);
  lookbookModalOverlay.addEventListener('click', closeLookbookModal);

  // Search
  searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput.focus(), 200);
  });
  searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
  });
  searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));
  searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('[data-quickview]');
    if (item) {
      searchOverlay.classList.remove('open');
      searchInput.value = '';
      searchResults.innerHTML = '';
      openQuickview(item.dataset.quickview);
    }
  });

  // Mobile Menu
  navToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );

  // Contact Form Validation
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = contactName.value.trim();
    const emailVal = contactEmail.value.trim();
    const msgVal = contactMsg.value.trim();
    
    if (!nameVal || !emailVal.includes('@') || !msgVal) {
      contactNote.textContent = 'please ensure all fields are correctly filled.';
      contactNote.style.color = '#b56b6b';
      return;
    }
    contactNote.textContent = 'inquiry sent — our team will be in touch within 24 hours.';
    contactNote.style.color = 'var(--gold)';
    contactForm.reset();
  });

  // Esc closes all overlays
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart(); 
      closeQuickview();
      closeLookbookModal();
      searchOverlay.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);