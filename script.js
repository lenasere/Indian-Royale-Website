const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const reveals = document.querySelectorAll('.reveal');
const yearNode = document.querySelector('#year');

const startTakeawayButton = document.querySelector('#start-takeaway');
const locationStep = document.querySelector('#location-step');
const menuStep = document.querySelector('#menu-step');
const pickupLocations = document.querySelector('#pickup-locations');
const selectedLocationText = document.querySelector('#selected-location-text');
const categoryTabs = document.querySelector('#category-tabs');
const takeawayItems = document.querySelector('#takeaway-items');
const orderList = document.querySelector('#order-list');
const orderTotal = document.querySelector('#order-total');
const checkoutLink = document.querySelector('#checkout-link');
const checkoutStatus = document.querySelector('#checkout-status');
const orderComment = document.querySelector('#order-comment');
const orderCommentCount = document.querySelector('#order-comment-count');
const orderNotePreview = document.querySelector('#order-note-preview');
const bookingLocations = document.querySelector('#booking-locations');
const selectedBookingLocation = document.querySelector('#selected-booking-location');
const bookingContinueLink = document.querySelector('#booking-continue-link');
const bookingStatus = document.querySelector('#booking-status');

const locationConfig = {
  lyngby: {
    name: 'Lyngby',
    checkoutUrl: '#',
    isComingSoon: true,
  },
  city: {
    name: 'Copenhagen City',
    checkoutUrl: 'https://maobao.orderyoyo.com/',
  },
  esbjerg: {
    name: 'Esbjerg',
    checkoutUrl: 'https://maobao.orderyoyo.com/',
  },
  roskilde: {
    name: 'Roskilde',
    checkoutUrl: 'https://maobao.orderyoyo.com/',
  },
  kajen: {
    name: 'Kajen',
    checkoutUrl: 'https://maobao.orderyoyo.com/',
  },
  nordhavn: {
    name: 'Nordhavn',
    checkoutUrl: 'https://maobao.orderyoyo.com/',
  },
};

const bookingConfig = {
  lyngby: {
    name: 'Lyngby',
    bookingUrl: 'https://book.dinnerbooking.com/dk/da-DK/book/table/pax/759/2',
  },
  esbjerg: {
    name: 'Esbjerg',
    bookingUrl: 'https://book.dinnerbooking.com/dk/da-DK/book/index/3063/2',
  },
  roskilde: {
    name: 'Roskilde',
    bookingUrl: 'https://book.dinnerbooking.com/dk/da-DK/book/table/pax/2322/2',
  },
  fisketorvet: {
    name: 'Fisketorvet',
    bookingUrl: 'https://book.easytable.com/book/?id=a2371&lang=auto',
  },
  copenhagenk: {
    name: 'Copenhagen K',
    bookingUrl: 'https://book.easytable.com/book/?ref=mb&id=9b0f9&lang=da',
  },
  nordhavn: {
    name: 'Nordhavn',
    bookingUrl: 'https://shop.fresto.io/en/india-royale-nordhavn/booking',
  },
};

const takeawayMenu = {
  starters: [
    { id: 'samosa', name: 'Vegetable Samosa', description: 'Crispy pastry with spiced potato and peas.', price: 55 },
    { id: 'onion-bhaji', name: 'Onion Bhaji', description: 'Golden onion fritters with mint chutney.', price: 59 },
    { id: 'chicken-tikka-starter', name: 'Chicken Tikka Starter', description: 'Marinated chicken skewers from the tandoor.', price: 85 },
    { id: 'lamb-seekh', name: 'Lamb Seekh Kebab', description: 'Minced lamb kebabs with garlic and fresh herbs.', price: 89 },
    { id: 'prawn-pakora', name: 'Prawn Pakora', description: 'Lightly battered prawns with chili dip.', price: 92 },
    { id: 'paneer-tikka', name: 'Paneer Tikka', description: 'Charred cottage cheese with bell peppers.', price: 79 },
    { id: 'fish-amritsari', name: 'Fish Amritsari', description: 'Crispy spiced white fish with lemon masala.', price: 95 },
    { id: 'aloo-tikki', name: 'Aloo Tikki Chaat', description: 'Potato patties with yogurt and tamarind.', price: 69 },
    { id: 'chili-paneer', name: 'Chili Paneer', description: 'Indo-Chinese paneer with peppers and onions.', price: 84 },
    { id: 'chicken-65', name: 'Chicken 65', description: 'South Indian style fried chicken bites.', price: 89 },
    { id: 'papadum-basket', name: 'Papadum Basket', description: 'Crisp papadums served with mixed chutneys.', price: 35 },
  ],
  mains: [
    { id: 'butter-chicken', name: 'Butter Chicken Royale', description: 'Classic creamy tomato curry with tender chicken.', price: 165 },
    { id: 'chicken-korma', name: 'Chicken Korma', description: 'Mild cashew cream curry with saffron notes.', price: 159 },
    { id: 'chicken-vindaloo', name: 'Chicken Vindaloo', description: 'Hot and tangy Goan-style curry.', price: 162 },
    { id: 'lamb-rogan-josh', name: 'Lamb Rogan Josh', description: 'Slow-cooked lamb in aromatic Kashmiri spices.', price: 179 },
    { id: 'beef-madras', name: 'Beef Madras', description: 'South Indian curry with bold chili heat.', price: 175 },
    { id: 'palak-paneer', name: 'Palak Paneer', description: 'Spinach gravy with soft paneer cubes.', price: 149 },
    { id: 'paneer-lababdar', name: 'Paneer Lababdar', description: 'Rich tomato butter sauce with paneer.', price: 152 },
    { id: 'dal-makhani', name: 'Dal Makhani', description: 'Slow-cooked black lentils finished with cream.', price: 135 },
    { id: 'chana-masala', name: 'Chana Masala', description: 'Chickpeas with roasted cumin and ginger.', price: 132 },
    { id: 'chicken-jalfrezi', name: 'Chicken Jalfrezi', description: 'Stir-fried chicken curry with peppers and onions.', price: 164 },
    { id: 'lamb-korma', name: 'Lamb Korma', description: 'Lamb in creamy almond and cashew gravy.', price: 182 },
    { id: 'goan-fish-curry', name: 'Goan Fish Curry', description: 'Coastal fish curry with coconut and curry leaves.', price: 176 },
    { id: 'prawn-masala', name: 'Prawn Masala', description: 'Juicy prawns in rich tomato onion masala.', price: 185 },
    { id: 'malai-kofta', name: 'Malai Kofta', description: 'Vegetable dumplings in silky cashew sauce.', price: 148 },
    { id: 'baingan-bharta', name: 'Baingan Bharta', description: 'Smoky roasted aubergine mash with spices.', price: 139 },
    { id: 'kadai-paneer', name: 'Kadai Paneer', description: 'Paneer with bell peppers in kadai masala.', price: 154 },
  ],
  rice: [
    { id: 'steam-rice', name: 'Steamed Basmati Rice', description: 'Long-grain aromatic basmati.', price: 35 },
    { id: 'jeera-rice', name: 'Jeera Rice', description: 'Basmati tempered with cumin and ghee.', price: 45 },
    { id: 'vegetable-biryani', name: 'Vegetable Biryani', description: 'Saffron rice layered with seasonal vegetables.', price: 119 },
    { id: 'chicken-biryani', name: 'Chicken Biryani', description: 'Fragrant rice with chicken and whole spices.', price: 145 },
    { id: 'lamb-biryani', name: 'Lamb Biryani', description: 'Royal biryani with tender lamb and mint.', price: 159 },
    { id: 'peas-pulao', name: 'Matar Pulao', description: 'Basmati rice with green peas and whole spices.', price: 52 },
    { id: 'lemon-rice', name: 'Lemon Rice', description: 'Tangy tempered rice with mustard and curry leaves.', price: 55 },
    { id: 'coconut-rice', name: 'Coconut Rice', description: 'South Indian coconut flavored basmati.', price: 59 },
    { id: 'egg-fried-rice', name: 'Egg Fried Rice', description: 'Indian-style wok fried rice with egg.', price: 95 },
  ],
  naan: [
    { id: 'plain-naan', name: 'Plain Naan', description: 'Soft tandoori bread brushed with butter.', price: 25 },
    { id: 'garlic-naan', name: 'Garlic Naan', description: 'Naan topped with garlic and coriander.', price: 32 },
    { id: 'butter-naan', name: 'Butter Naan', description: 'Classic naan with extra butter glaze.', price: 30 },
    { id: 'cheese-naan', name: 'Cheese Naan', description: 'Stuffed naan with melting cheese.', price: 42 },
    { id: 'keema-naan', name: 'Keema Naan', description: 'Naan filled with spicy minced lamb.', price: 49 },
    { id: 'peshwari-naan', name: 'Peshwari Naan', description: 'Sweet naan with nuts and dried fruit.', price: 45 },
    { id: 'chili-cheese-naan', name: 'Chili Cheese Naan', description: 'Cheesy naan with fresh chili kick.', price: 46 },
    { id: 'onion-naan', name: 'Onion Naan', description: 'Naan topped with caramelized onions.', price: 38 },
    { id: 'kulcha', name: 'Amritsari Kulcha', description: 'Stuffed bread with spiced potato filling.', price: 44 },
    { id: 'roti', name: 'Tandoori Roti', description: 'Whole wheat flatbread from clay oven.', price: 22 },
    { id: 'laccha-paratha', name: 'Laccha Paratha', description: 'Layered flaky butter paratha.', price: 36 },
  ],
  sides: [
    { id: 'raita', name: 'Raita', description: 'Chilled yogurt with cucumber and cumin.', price: 32 },
    { id: 'green-salad', name: 'Fresh Green Salad', description: 'Mixed greens, tomato, onions, lemon dressing.', price: 45 },
    { id: 'mango-lassi', name: 'Mango Lassi', description: 'Creamy mango yogurt drink.', price: 45 },
    { id: 'sweet-lassi', name: 'Sweet Lassi', description: 'Classic chilled yogurt drink.', price: 39 },
    { id: 'mint-chutney', name: 'Mint Chutney', description: 'Fresh mint and coriander chutney.', price: 20 },
    { id: 'mixed-pickle', name: 'Indian Pickle', description: 'Spicy homemade mixed pickle.', price: 22 },
    { id: 'masala-papad', name: 'Masala Papad', description: 'Crispy papad topped with tomato onion masala.', price: 35 },
    { id: 'onion-salad', name: 'Onion & Lemon Salad', description: 'Classic ring onion salad with chaat masala.', price: 29 },
    { id: 'boondi-raita', name: 'Boondi Raita', description: 'Yogurt with crispy spiced gram pearls.', price: 35 },
    { id: 'salted-lassi', name: 'Salted Lassi', description: 'Savory churned yogurt drink.', price: 39 },
    { id: 'masala-chai', name: 'Masala Chai', description: 'Indian spiced milk tea.', price: 32 },
    { id: 'gulab-jamun', name: 'Gulab Jamun (2 pcs)', description: 'Warm milk dumplings in saffron syrup.', price: 42 },
    { id: 'kheer', name: 'Kheer', description: 'Creamy cardamom rice pudding.', price: 46 },
  ],
};

const categoryMeta = [
  { key: 'starters', label: 'Starters' },
  { key: 'mains', label: 'Main Course' },
  { key: 'rice', label: 'Rice' },
  { key: 'naan', label: 'Naan' },
  { key: 'sides', label: 'Sides & Drinks' },
];

const dishById = Object.values(takeawayMenu)
  .flat()
  .reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {});

let selectedLocation = null;
let selectedCategory = 'starters';
const order = {};
let takeawayComment = '';
let selectedBookingKey = null;

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (startTakeawayButton && locationStep) {
  startTakeawayButton.addEventListener('click', () => {
    locationStep.classList.remove('is-hidden');
    locationStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (pickupLocations && menuStep) {
  pickupLocations.addEventListener('click', (event) => {
    const locationButton = event.target.closest('button[data-location]');

    if (!locationButton) {
      return;
    }

    selectedLocation = locationButton.dataset.location;

    pickupLocations.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('is-active', button === locationButton);
    });

    menuStep.classList.remove('is-hidden');
    updateLocationText();
    updateCheckoutLink();
    renderCategoryTabs();
    renderMenuItems();
    renderOrder();
  });
}

if (categoryTabs) {
  categoryTabs.addEventListener('click', (event) => {
    const tab = event.target.closest('button[data-category]');

    if (!tab) {
      return;
    }

    selectedCategory = tab.dataset.category;
    renderCategoryTabs();
    renderMenuItems();
  });
}

if (takeawayItems) {
  takeawayItems.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');

    if (!button) {
      return;
    }

    const dishId = button.dataset.id;
    const action = button.dataset.action;

    if (!dishById[dishId]) {
      return;
    }

    if (action === 'add') {
      order[dishId] = (order[dishId] || 0) + 1;
    }

    if (action === 'remove' && order[dishId]) {
      order[dishId] -= 1;

      if (order[dishId] <= 0) {
        delete order[dishId];
      }
    }

    renderMenuItems();
    renderOrder();
  });
}

if (orderList) {
  orderList.addEventListener('click', (event) => {
    const control = event.target.closest('button[data-order-control]');

    if (!control) {
      return;
    }

    const dishId = control.dataset.id;
    const controlType = control.dataset.orderControl;

    if (!order[dishId]) {
      return;
    }

    if (controlType === 'increase') {
      order[dishId] += 1;
    }

    if (controlType === 'decrease') {
      order[dishId] -= 1;

      if (order[dishId] <= 0) {
        delete order[dishId];
      }
    }

    renderMenuItems();
    renderOrder();
  });
}

if (orderComment) {
  orderComment.addEventListener('input', () => {
    takeawayComment = orderComment.value.trim();
    renderCommentMeta();
  });
}

if (checkoutLink) {
  checkoutLink.addEventListener('click', (event) => {
    const comingSoon = checkoutLink.dataset.comingSoon === 'true';

    if (!comingSoon) {
      return;
    }

    event.preventDefault();

    if (checkoutStatus && selectedLocation) {
      const locationName = locationConfig[selectedLocation]?.name || 'This location';
      checkoutStatus.textContent = `${locationName} takeaway checkout is coming soon.`;
    }
  });
}

if (bookingLocations) {
  bookingLocations.addEventListener('click', (event) => {
    const locationButton = event.target.closest('button[data-booking-location]');

    if (!locationButton) {
      return;
    }

    selectedBookingKey = locationButton.dataset.bookingLocation;

    bookingLocations.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('is-active', button === locationButton);
    });

    updateBookingSelection();
  });
}

function updateLocationText() {
  if (!selectedLocationText || !selectedLocation) {
    return;
  }

  const locationName = locationConfig[selectedLocation]?.name || 'Not selected';
  selectedLocationText.textContent = `Pickup location: ${locationName}`;
}

function updateBookingSelection() {
  if (!selectedBookingLocation || !bookingContinueLink || !selectedBookingKey) {
    return;
  }

  const bookingInfo = bookingConfig[selectedBookingKey];

  selectedBookingLocation.textContent = `Selected restaurant: ${bookingInfo.name}`;
  bookingContinueLink.href = bookingInfo.bookingUrl;
  bookingContinueLink.textContent = `Continue to ${bookingInfo.name} booking`;
  bookingContinueLink.classList.remove('is-disabled');
  bookingContinueLink.setAttribute('aria-disabled', 'false');

  if (bookingStatus) {
    bookingStatus.textContent = '';
  }
}

function updateCheckoutLink() {
  if (!checkoutLink || !selectedLocation) {
    return;
  }

  const locationInfo = locationConfig[selectedLocation];
  const isComingSoon = Boolean(locationInfo.isComingSoon);

  checkoutLink.href = locationInfo.checkoutUrl;
  checkoutLink.textContent = `Continue to ${locationInfo.name} checkout`;
  checkoutLink.classList.remove('is-disabled');
  checkoutLink.setAttribute('aria-disabled', 'false');
  checkoutLink.dataset.comingSoon = String(isComingSoon);

  if (checkoutStatus) {
    checkoutStatus.textContent = isComingSoon
      ? `${locationInfo.name} takeaway checkout is coming soon.`
      : '';
  }
}

function renderCommentMeta() {
  if (orderCommentCount && orderComment) {
    orderCommentCount.textContent = String(orderComment.value.length);
  }

  if (!orderNotePreview) {
    return;
  }

  orderNotePreview.textContent = takeawayComment
    ? `Comment: ${takeawayComment}`
    : 'No comment added yet.';
}

function renderCategoryTabs() {
  if (!categoryTabs) {
    return;
  }

  categoryTabs.innerHTML = categoryMeta
    .map(({ key, label }) => {
      const activeClass = key === selectedCategory ? 'is-active' : '';
      return `<button type="button" class="${activeClass}" data-category="${key}">${label}</button>`;
    })
    .join('');
}

function renderMenuItems() {
  if (!takeawayItems) {
    return;
  }

  const categoryDishes = takeawayMenu[selectedCategory] || [];

  takeawayItems.innerHTML = categoryDishes
    .map((dish) => {
      const quantity = order[dish.id] || 0;

      return `
        <article class="menu-item">
          <div class="menu-item-head">
            <h4>${dish.name}</h4>
            <span class="price">DKK ${dish.price}</span>
          </div>
          <p>${dish.description}</p>
          <div class="item-actions">
            <button type="button" data-action="remove" data-id="${dish.id}">-</button>
            <button type="button" disabled>Qty ${quantity}</button>
            <button type="button" data-action="add" data-id="${dish.id}">Add +</button>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderOrder() {
  if (!orderList || !orderTotal) {
    return;
  }

  const orderItems = Object.entries(order);

  if (orderItems.length === 0) {
    orderList.innerHTML = '<li>No dishes selected yet.</li>';
    orderTotal.textContent = 'DKK 0';
    return;
  }

  let total = 0;

  orderList.innerHTML = orderItems
    .map(([dishId, qty]) => {
      const dish = dishById[dishId];
      const linePrice = dish.price * qty;
      total += linePrice;

      return `
        <li class="order-row">
          <div>
            <strong>${dish.name}</strong>
            <div>DKK ${dish.price} x ${qty} = DKK ${linePrice}</div>
          </div>
          <div>
            <button type="button" data-order-control="decrease" data-id="${dishId}">-</button>
            <button type="button" data-order-control="increase" data-id="${dishId}">+</button>
          </div>
        </li>
      `;
    })
    .join('');

  orderTotal.textContent = `DKK ${total}`;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${index * 0.08}s`;
  observer.observe(element);
});

renderCommentMeta();
