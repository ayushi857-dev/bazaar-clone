const products = [
  { id: 'phone-1', category: 'phones', categoryLabel: 'Smartphones', name: 'Pixel 8a 5G, 128 GB', image: 'photo-1598327105666-5b89351aff97', fallback: 'photo-1511702977365-0b5c4d9d9f2d', price: 39999, original: 52999, rating: '4.4', reviews: '2,418', badge: '24% OFF' },
  { id: 'phone-2', category: 'phones', categoryLabel: 'Smartphones', name: 'Galaxy A55 5G, 256 GB', image: 'photo-1512499617640-c74ae3a79d37', fallback: 'photo-1598327105666-5b89351aff97', price: 36999, original: 42999, rating: '4.3', reviews: '1,826', badge: 'BESTSELLER' },
  { id: 'phone-3', category: 'phones', categoryLabel: 'Smartphones', name: 'Nothing Phone (2a), 128 GB', image: 'photo-1511702977365-0b5c4d9d9f2d', fallback: 'photo-1512499617640-c74ae3a79d37', price: 23999, original: 27999, rating: '4.2', reviews: '943', badge: '14% OFF' },
  { id: 'laptop-1', category: 'laptops', categoryLabel: 'Laptops', name: 'IdeaPad Slim 5, Intel Core i5', image: 'photo-1496181133206-80ce9b88a853', fallback: 'photo-1517336714731-489689fd1ca8', price: 64990, original: 79990, rating: '4.4', reviews: '684', badge: '19% OFF' },
  { id: 'laptop-2', category: 'laptops', categoryLabel: 'Laptops', name: 'MacBook Air 13-inch, M2', image: 'photo-1517336714731-489689fd1ca8', fallback: 'photo-1498050108023-c5249f4df085', price: 89990, original: 99900, rating: '4.7', reviews: '1,207', badge: 'POPULAR' },
  { id: 'laptop-3', category: 'laptops', categoryLabel: 'Laptops', name: 'ASUS Vivobook 15 OLED', image: 'photo-1498050108023-c5249f4df085', fallback: 'photo-1496181133206-80ce9b88a853', price: 57990, original: 69990, rating: '4.3', reviews: '531', badge: '17% OFF' },
  { id: 'audio-1', category: 'audio', categoryLabel: 'Headphones', name: 'Studio wireless over-ear headphones', image: 'photo-1505740420928-5e560c06d30e', fallback: 'photo-1484704849700-f032a568e944', price: 4999, original: 7999, rating: '4.5', reviews: '3,842', badge: '38% OFF' },
  { id: 'audio-2', category: 'audio', categoryLabel: 'Headphones', name: 'Soundcore Life Q30 noise cancelling', image: 'photo-1484704849700-f032a568e944', fallback: 'photo-1505740420928-5e560c06d30e', price: 6999, original: 9999, rating: '4.4', reviews: '2,094', badge: '30% OFF' },
  { id: 'audio-3', category: 'audio', categoryLabel: 'Headphones', name: 'True wireless earbuds with case', image: 'photo-1606220945770-b5b6c2c55bf1', fallback: 'photo-1590658268037-6bf12165a8df', price: 2499, original: 3999, rating: '4.1', reviews: '1,392', badge: '37% OFF' },
  { id: 'shoe-1', category: 'shoes', categoryLabel: 'Footwear', name: 'Everyday running shoes', image: 'photo-1542291026-7eec264c27ff', fallback: 'photo-1495555961986-6d4c1ecb7be3', price: 3299, original: 4999, rating: '4.2', reviews: '2,653', badge: '34% OFF' },
  { id: 'shoe-2', category: 'shoes', categoryLabel: 'Footwear', name: 'Classic leather low-top sneakers', image: 'photo-1495555961986-6d4c1ecb7be3', fallback: 'photo-1542291026-7eec264c27ff', price: 2799, original: 3999, rating: '4.1', reviews: '1,186', badge: '30% OFF' },
  { id: 'shoe-3', category: 'shoes', categoryLabel: 'Footwear', name: 'Lightweight trail sneakers', image: 'photo-1552346154-21d32810aba3', fallback: 'photo-1542291026-7eec264c27ff', price: 4199, original: 5999, rating: '4.3', reviews: '746', badge: '30% OFF' },
  { id: 'watch-1', category: 'watches', categoryLabel: 'Watches', name: 'Minimal dial stainless steel watch', image: 'photo-1523275335684-37898b6baf30', fallback: 'photo-1524592094714-0f0654e20314', price: 3499, original: 5999, rating: '4.3', reviews: '1,534', badge: '42% OFF' },
  { id: 'watch-2', category: 'watches', categoryLabel: 'Watches', name: 'Timeless black leather strap watch', image: 'photo-1524592094714-0f0654e20314', fallback: 'photo-1523275335684-37898b6baf30', price: 2899, original: 4499, rating: '4.2', reviews: '867', badge: '36% OFF' },
  { id: 'watch-3', category: 'watches', categoryLabel: 'Watches', name: 'Sport digital watch with silicone band', image: 'photo-1524805444758-089113d48a6d', fallback: 'photo-1524592094714-0f0654e20314', price: 1999, original: 2999, rating: '4.0', reviews: '624', badge: '33% OFF' },
  { id: 'clothes-1', category: 'clothing', categoryLabel: 'Clothing', name: 'Relaxed-fit everyday cotton tee', image: 'photo-1521572163474-6864f9cf17ab', fallback: 'photo-1503341504253-dff4815485f1', price: 699, original: 999, rating: '4.1', reviews: '2,718', badge: '30% OFF' },
  { id: 'clothes-2', category: 'clothing', categoryLabel: 'Clothing', name: 'Easy linen-blend summer shirt', image: 'photo-1529139574466-a303027c1d8b', fallback: 'photo-1521572163474-6864f9cf17ab', price: 1499, original: 2199, rating: '4.2', reviews: '1,091', badge: '32% OFF' },
  { id: 'clothes-3', category: 'clothing', categoryLabel: 'Clothing', name: 'Classic denim jacket, mid wash', image: 'photo-1543076447-215ad9ba6923', fallback: 'photo-1529139574466-a303027c1d8b', price: 2499, original: 3499, rating: '4.3', reviews: '582', badge: '29% OFF' },
  { id: 'book-1', category: 'books', categoryLabel: 'Books', name: 'The Art of Everyday Living', image: 'photo-1544947950-fa07a98d237f', fallback: 'photo-1512820790803-83ca734da794', price: 499, original: 799, rating: '4.6', reviews: '1,205', badge: '38% OFF' },
  { id: 'book-2', category: 'books', categoryLabel: 'Books', name: 'The Midnight Library, paperback', image: 'photo-1512820790803-83ca734da794', fallback: 'photo-1544947950-fa07a98d237f', price: 349, original: 599, rating: '4.5', reviews: '3,409', badge: '42% OFF' },
  { id: 'book-3', category: 'books', categoryLabel: 'Books', name: 'A beautiful collection of short stories', image: 'photo-1519682337058-a94d519337bc', fallback: 'photo-1512820790803-83ca734da794', price: 399, original: 650, rating: '4.3', reviews: '718', badge: '39% OFF' },
  { id: 'home-1', category: 'home', categoryLabel: 'Home & Kitchen', name: 'Soft woven cushion covers, set of 2', image: 'photo-1586023492125-27b2c045efd7', fallback: 'photo-1555041469-a586c61ea9bc', price: 899, original: 1499, rating: '4.2', reviews: '1,032', badge: '40% OFF' },
  { id: 'home-2', category: 'home', categoryLabel: 'Home & Kitchen', name: 'Hand-finished ceramic table lamp', image: 'photo-1507473885765-e6ed057f782c', fallback: 'photo-1586023492125-27b2c045efd7', price: 1799, original: 2499, rating: '4.4', reviews: '653', badge: '28% OFF' },
  { id: 'home-3', category: 'home', categoryLabel: 'Home & Kitchen', name: 'Modern lounge chair for your corner', image: 'photo-1567538096630-e0c55bd6374c', fallback: 'photo-1555041469-a586c61ea9bc', price: 8499, original: 11999, rating: '4.3', reviews: '428', badge: '29% OFF' }
];

const imageUrl = (photoId, width = 700) => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=82`;
const formatPrice = (amount) => `₹${amount.toLocaleString('en-IN')}`;
const productGrid = document.querySelector('#product-grid');
const cart = new Map();
let activeCategory = 'all';
let activeSort = 'default';
let searchTerm = '';
let toastTimer;

function renderProducts() {
  const visibleProducts = products.filter((product) => {
    const electronicsCategories = ['phones', 'laptops', 'audio', 'watches'];
    const matchesCategory = activeCategory === 'all'
      || (activeCategory === 'electronics' && electronicsCategories.includes(product.category))
      || product.category === activeCategory;
    const searchable = `${product.name} ${product.categoryLabel} ${product.category}`.toLowerCase();
    return matchesCategory && searchable.includes(searchTerm);
  });
  if (activeSort === 'rating') visibleProducts.sort((first, second) => Number(second.rating) - Number(first.rating));

  productGrid.innerHTML = visibleProducts.map((product, index) => {
    const percentOff = Math.round((1 - product.price / product.original) * 100);
    const inCart = cart.has(product.id);
    return `<article class="product-card" style="animation-delay:${Math.min(index * 25, 200)}ms"><div class="product-photo"><span class="product-badge">${product.badge}</span><img src="${imageUrl(product.image)}" data-fallback="${imageUrl(product.fallback)}" alt="${product.name}" loading="lazy"></div><div class="product-info"><p class="product-category">${product.categoryLabel}</p><h3 class="product-title">${product.name}</h3><div class="rating-line"><span class="stars" aria-label="${product.rating} out of 5 stars">★★★★★</span><span class="rating-number">${product.rating} (${product.reviews})</span></div><div class="price-line"><strong class="price">${formatPrice(product.price)}</strong><span class="original-price">${formatPrice(product.original)}</span><span class="discount">${percentOff}% off</span></div><p class="delivery-line">FREE delivery <strong>Tomorrow, 19 Oct</strong></p><button class="add-button${inCart ? ' added' : ''}" data-add="${product.id}" type="button">${inCart ? 'Added to cart ✓' : 'Add to cart'}</button></div></article>`;
  }).join('');

  document.querySelector('#result-count').textContent = `${visibleProducts.length} products`;
  document.querySelector('#empty-state').hidden = visibleProducts.length > 0;
  productGrid.hidden = visibleProducts.length === 0;
  updateFilterButtons();
  productGrid.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      image.src = image.dataset.fallback;
      image.removeAttribute('data-fallback');
    }, { once: true });
  });
}

function updateFilterButtons() {
  document.querySelectorAll('[data-filter]').forEach((button) => {
    const isFilterChip = button.classList.contains('filter-chip');
    const isMainCategory = button.classList.contains('nav-link') && button.dataset.filter !== 'all' && !button.dataset.sort;
    const isSortOption = button.classList.contains('nav-link') && Boolean(button.dataset.sort);
    const isAllButton = button.classList.contains('nav-menu');
    const isActive = (isFilterChip && button.dataset.filter === activeCategory)
      || (isMainCategory && button.dataset.filter === activeCategory)
      || (isSortOption && button.dataset.sort === activeSort)
      || (isAllButton && activeCategory === 'all' && activeSort === 'default');
    button.classList.toggle('active', isActive);
    if (isFilterChip) button.setAttribute('aria-pressed', String(isActive));
  });
  document.querySelector('#search-category').value = activeCategory;
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function renderCart() {
  const cartItems = document.querySelector('#cart-items');
  const entries = [...cart.entries()];
  const totalCount = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const totalPrice = entries.reduce((sum, [id, quantity]) => sum + products.find((product) => product.id === id).price * quantity, 0);

  document.querySelector('#cart-count').textContent = totalCount;
  document.querySelector('#drawer-count').textContent = `(${totalCount})`;
  document.querySelector('#cart-empty').classList.toggle('visible', entries.length === 0);
  document.querySelector('#cart-summary').hidden = entries.length === 0;
  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `<article class="cart-item"><img src="${imageUrl(product.image, 180)}" data-fallback="${imageUrl(product.fallback, 180)}" alt="${product.name}"><div><h3 class="cart-item-title">${product.name}</h3><div class="cart-item-price">${formatPrice(product.price)}</div><div class="quantity-control" aria-label="Quantity for ${product.name}"><button data-quantity="${id}" data-change="-1" type="button" aria-label="Decrease quantity">−</button><span>${quantity}</span><button data-quantity="${id}" data-change="1" type="button" aria-label="Increase quantity">+</button></div></div><button class="remove-item" data-remove="${id}" type="button">Remove</button></article>`;
  }).join('');
  document.querySelector('#cart-subtotal').textContent = formatPrice(totalPrice);
  cartItems.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      image.src = image.dataset.fallback;
      image.removeAttribute('data-fallback');
    }, { once: true });
  });
}

function setCategory(category, sort = 'default') {
  activeCategory = category;
  activeSort = sort;
  renderProducts();
  document.querySelector('#deals').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openHeaderPanel(panelName) {
  const panels = {
    account: { title: 'Account & Lists', message: 'Sign-in is a demo feature. Your cart and shopping filters work in this browser.', action: 'Browse products' },
    minitv: { title: 'Bazaar miniTV', message: 'Video entertainment is not connected in this learning project.' },
    sell: { title: 'Sell on Bazaar.in', message: 'Seller registration is not connected in this learning project.' },
    prime: { title: 'Bazaar Prime', message: 'Membership benefits are not connected in this learning project.' },
    language: { title: 'Language', message: 'Choose a display language. Product translations are not available in this demo.' }
  };
  const panel = panels[panelName];
  if (!panel) return;

  document.querySelector('#info-title').textContent = panel.title;
  document.querySelector('#info-message').textContent = panel.message;
  const actions = document.querySelector('#info-actions');
  actions.replaceChildren();

  if (panelName === 'language') {
    [['English', 'English'], ['हिन्दी', 'Hindi']].forEach(([label, value]) => {
      const button = document.createElement('button');
      button.className = 'dialog-action';
      button.type = 'button';
      button.dataset.language = value;
      button.textContent = label;
      actions.append(button);
    });
  } else if (panel.action) {
    const button = document.createElement('button');
    button.className = 'dialog-action';
    button.type = 'button';
    button.dataset.panelAction = 'shop';
    button.textContent = panel.action;
    actions.append(button);
  }

  document.querySelector('#info-dialog').showModal();
}

function handleHeaderNavigation(event) {
  const panelButton = event.target.closest('[data-panel]');
  if (panelButton) {
    openHeaderPanel(panelButton.dataset.panel);
    document.querySelector('#mobile-utility').classList.remove('open');
    document.querySelector('#mobile-menu').setAttribute('aria-expanded', 'false');
    return;
  }

  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) setCategory(filterButton.dataset.filter, filterButton.dataset.sort || 'default');
}

function openCart() {
  const drawer = document.querySelector('#cart-drawer');
  const backdrop = document.querySelector('#cart-backdrop');
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add('visible'));
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
  document.querySelector('#close-cart').focus();
}

function closeCart() {
  const drawer = document.querySelector('#cart-drawer');
  const backdrop = document.querySelector('#cart-backdrop');
  drawer.classList.remove('open');
  backdrop.classList.remove('visible');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
  setTimeout(() => { backdrop.hidden = true; }, 250);
  document.querySelector('#open-cart').focus();
}

document.querySelector('#filter-row').addEventListener('click', handleHeaderNavigation);
document.querySelector('#category-grid').addEventListener('click', (event) => {
  const tile = event.target.closest('[data-category]');
  if (tile) setCategory(tile.dataset.category);
});
document.querySelector('#nav-bar').addEventListener('click', handleHeaderNavigation);
document.querySelector('#fashion-nav').addEventListener('click', handleHeaderNavigation);
document.querySelector('#see-all-categories').addEventListener('click', () => setCategory('all'));
document.querySelector('#clear-filter').addEventListener('click', () => {
  activeCategory = 'all';
  activeSort = 'default';
  searchTerm = '';
  document.querySelector('#search-input').value = '';
  renderProducts();
});
document.querySelector('#empty-reset').addEventListener('click', () => {
  activeCategory = 'all';
  activeSort = 'default';
  searchTerm = '';
  document.querySelector('#search-input').value = '';
  renderProducts();
});
document.querySelector('#search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  activeCategory = document.querySelector('#search-category').value;
  activeSort = 'default';
  searchTerm = document.querySelector('#search-input').value.trim().toLowerCase();
  renderProducts();
  document.querySelector('#deals').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelector('#search-category').addEventListener('change', (event) => {
  activeCategory = event.target.value;
  activeSort = 'default';
  renderProducts();
});
productGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-add]');
  if (!button) return;
  const id = button.dataset.add;
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  renderProducts();
  showToast('Added to your cart');
});
document.querySelector('#cart-items').addEventListener('click', (event) => {
  const quantityButton = event.target.closest('[data-quantity]');
  const removeButton = event.target.closest('[data-remove]');
  if (quantityButton) {
    const id = quantityButton.dataset.quantity;
    const nextQuantity = (cart.get(id) || 0) + Number(quantityButton.dataset.change);
    if (nextQuantity <= 0) cart.delete(id);
    else cart.set(id, nextQuantity);
    renderCart();
    renderProducts();
  }
  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    renderCart();
    renderProducts();
    showToast('Removed from your cart');
  }
});
document.querySelector('#open-cart').addEventListener('click', openCart);
document.querySelector('#close-cart').addEventListener('click', closeCart);
document.querySelector('#cart-backdrop').addEventListener('click', closeCart);
document.querySelector('#continue-shopping').addEventListener('click', closeCart);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.querySelector('#cart-drawer').classList.contains('open')) closeCart();
});
document.querySelector('#mobile-menu').addEventListener('click', () => {
  const utility = document.querySelector('#mobile-utility');
  utility.classList.toggle('open');
  document.querySelector('#mobile-menu').setAttribute('aria-expanded', String(utility.classList.contains('open')));
});
document.querySelector('#mobile-utility').addEventListener('click', handleHeaderNavigation);
document.querySelectorAll('.header-main [data-panel]').forEach((button) => button.addEventListener('click', handleHeaderNavigation));
document.querySelector('#open-location').addEventListener('click', () => {
  document.querySelector('#pin-code').value = document.querySelector('#location-label').textContent.match(/[0-9]{6}/)?.[0] || '800020';
  document.querySelector('#location-dialog').showModal();
});
document.querySelector('#close-location').addEventListener('click', () => document.querySelector('#location-dialog').close());
document.querySelector('#location-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const pinCode = document.querySelector('#pin-code').value;
  const locationLabel = pinCode === '800020' ? 'Delivering to Patna 800020' : `Delivering to PIN ${pinCode}`;
  document.querySelector('#location-label').textContent = locationLabel;
  document.querySelector('#open-location').setAttribute('aria-label', locationLabel);
  document.querySelector('#location-dialog').close();
  showToast('Delivery PIN updated');
});
document.querySelector('#close-info').addEventListener('click', () => document.querySelector('#info-dialog').close());
document.querySelector('#info-actions').addEventListener('click', (event) => {
  const languageButton = event.target.closest('[data-language]');
  if (languageButton) {
    showToast(`${languageButton.dataset.language} selected; translations are a demo feature`);
    document.querySelector('#info-dialog').close();
  }
  const actionButton = event.target.closest('[data-panel-action="shop"]');
  if (actionButton) {
    document.querySelector('#info-dialog').close();
    setCategory('all');
  }
});
document.querySelector('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Subscription confirmed.');
  event.currentTarget.reset();
});
document.querySelector('#checkout-button').addEventListener('click', () => showToast('Checkout is a demo feature for this project'));

renderProducts();
renderCart();