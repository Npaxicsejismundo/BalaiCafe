(function () {
  'use strict';

  // ---------- Menu data ----------
  // item: [name, description, price, variants?]  — price '—' when only variants apply
  // line: [name, price]
  var MENU = [
    {
      id: 'breakfast', tab: 'Breakfast', title: 'Breakfast', note: 'Serving daily from 6am to 11am',
      photos: [
        ['ph-breakfast-1.webp', 'Balai Plate'], ['ph-breakfast-2.webp', 'Tapa Cheese Steak'],
        ['ph-breakfast-3.webp', 'Ube French Toast'], ['ph-breakfast-4.webp', 'Bangus Silog']
      ],
      credits: [
        ['Ralff Nestor Nacor', 'https://commons.wikimedia.org/wiki/File:Skinless_Longsilog_in_Taichung.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
        ['Gatorfan252525', 'https://commons.wikimedia.org/wiki/File:Steak_sandwich_with_provolone_cheese_and_garlic_aioli.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
        ['stu_spivack', 'https://commons.wikimedia.org/wiki/File:French_toast_with_bacon_ice_cream.jpg', 'CC BY-SA 2.0', 'https://creativecommons.org/licenses/by-sa/2.0/'],
        ['Maffeth.opiana', 'https://commons.wikimedia.org/wiki/File:Bangsilog.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/']
      ],
      cols: [
        { items: [
          ['Balai Plate', 'Hungarian sausage, spam, chorizo, bacon, garlic rice, sunny side-up eggs', '479'],
          ['Bangus', 'Garlic rice, sunny side-up eggs, atchara', '299'],
          ['Spam', 'Garlic rice, sunny side-up eggs', '439'],
          ['Tapa', 'Garlic rice, sunny side-up eggs, house-made pinakurat', '399']
        ] },
        { items: [
          ['Chorizo', 'Garlic rice, sunny side-up eggs, atchara', '299'],
          ['Tapa Cheese Steak', 'House-made pandesal, cheese, sunny side-up egg', '319'],
          ['Ube French Toast', 'Ube shokupan, ube cream cheese, ube ice cream', '299']
        ] }
      ]
    },
    {
      id: 'starters', tab: 'Appetizers', title: 'Appetizers',
      photos: [
        ['ph-starters-1.webp', 'Lechon Sisig'], ['ph-starters-2.webp', 'Eggplant Salad'],
        ['ph-starters-3.webp', 'Crispy Shrimp'], ['ph-starters-4.webp', 'Cheesy Beef Nachos']
      ],
      credits: [
        ['Ymirazudis', 'https://commons.wikimedia.org/wiki/File:Sizzling_Sisig_at_La_Herencia_Comida.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
        ['SpartacksCompatriot', 'https://commons.wikimedia.org/wiki/File:Crispy_deep-fried_prawn_of_Ulakan.JPG', 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/']
      ],
      cols: [
        { items: [
          ['Eggplant Salad', 'Grilled eggplant, green mango, tomato, onion, bagoong vinaigrette and jalapeño mayo dip', '279'],
          ['Lechon Sisig', 'Lechon belly, egg, onion, chillies', '349'],
          ['Spam and Pork Sisig', 'Grilled pork “maskara”, spam chunks, egg, soy, calamansi, chillies', '—', 'Solo 339 · To Share 589'],
          ['Chicken Skin', 'Served with house-made pinakurat', '259']
        ] },
        { items: [
          ['Ginabot', 'Served with house-made pinakurat', '299'],
          ['Lumpiang Shanghai', 'Ground pork, onion, garlic, jalapeño mayo', '299'],
          ['Crispy Shrimp', 'Baby shrimp, eggplant, chillies, onion', '335'],
          ['Cheesy Beef Nachos', 'Ground beef, cheese, tortilla chips, jalapeño, tomato, onion, garlic sauce', '495']
        ] }
      ]
    },
    {
      id: 'mains', tab: 'Mains', title: 'Mains',
      photos: [
        ['ph-mains-1.webp', 'Lechon Kawali'], ['ph-mains-2.webp', 'Classic Kare Kare'],
        ['ph-mains-3.webp', 'Grilled Scallops'], ['ph-mains-4.webp', 'Beef Tadyang']
      ],
      credits: [
        ['BrokenSphere', 'https://commons.wikimedia.org/wiki/File:Oxtail_kare-kare_1.JPG', 'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0/'],
        ['Ross', 'https://commons.wikimedia.org/wiki/File:Beef_short_ribs.jpg', 'CC BY-SA 2.0', 'https://creativecommons.org/licenses/by-sa/2.0/']
      ],
      cols: [
        { items: [
          ['Grilled Scallops', '10 pcs scallops, cheddar cheese', '439'],
          ['Grilled Liempo', 'Grilled pork belly, soy, garlic, calamansi, house-made pinakurat', '469'],
          ['Fried Chicken', 'Crispy fried chicken, house-made gravy', '539'],
          ['Pork Adobo', 'Soy, vinegar, garlic', '379'],
          ['Lechon Kawali', 'Crispy pork belly', '—', 'Solo 299 · To Share 569'],
          ['Balai Express', 'Pork, coconut milk, chillies', '379'],
          ['Classic Kare Kare', 'Beef shank, ox tripe, eggplant, native pechay, string beans, house-made bagoong', '679']
        ] },
        { items: [
          ['Lechon Belly', 'Served with house-made pinakurat', '—', '250 grams 349 · 500 grams 698'],
          ['Beef Tadyang', 'Beef ribs, house-made gravy, crispy garlic', '689'],
          ['Beef Pochero', 'Beef ribs, broth, saba banana, cabbage', '659'],
          ['Cansi', 'Beef shank, broth, batwan, lemongrass, green chillies', '629'],
          ['Ginataang Kalabasa', 'Kalabasa, mixed seafood, shrimp paste', '—', 'Solo 199 · To Share 349'],
          ['Monggos Lechon Kawali', 'Stewed mung beans, shrimp, coconut milk', '—', 'Solo 209 · To Share 379']
        ] }
      ],
      boxes: [
        { title: 'Rice', lines: [['Lechon Fried Rice', '399'], ['Bagoong Rice', '349'], ['Garlic Rice', '325'], ['Plain Rice', '65']] },
        { title: 'Dessert', lines: [['Balai Special Halo-Halo', '179'], ['Turon Ala Mode', '159'], ['Ube Leche Flan Cake, slice', '259']] }
      ]
    },
    {
      id: 'drinks', tab: 'Coffee & Drinks', title: 'Coffee & Drinks', by: 'By Cafeplus Coffee',
      photos: [
        ['ph-drinks-1.webp', 'Ube Latte'], ['ph-drinks-2.webp', 'Espresso Tonic'],
        ['ph-drinks-3.webp', 'Matcha Latte'], ['ph-drinks-4.webp', 'Mango Smoothie']
      ],
      credits: [
        ['Tail furry', 'https://commons.wikimedia.org/wiki/File:Espresso_and_tonic,_COFFEE_CITEN,_Akiha,_Niigata,_Niigata,_Japan,_May_2023.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
        ['Vivekpat30', 'https://commons.wikimedia.org/wiki/File:Fresh-mango-smoothie_01.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/']
      ],
      lineCols: [
        { title: 'Espresso', lines: [
          ['Americano', 'Hot 129 / Cold 169'], ['Cappuccino', 'Hot 139 / Cold 179'], ['Latte', 'Hot 139 / Cold 179'],
          ['Mocha', 'Hot 169 / Cold 189'], ['Caramel Machiatto', 'Hot 169 / Cold 189'], ['Espresso Tonic', '199'],
          ['Brewed Coffee', '139'], ['Flat White', '139']
        ] },
        { title: 'Specialty lattes', sub: 'Tall / Grande / Giant', lines: [
          ['Chocnut Latte', '199 / 219 / 229'], ['Ube Latte', '199 / 219 / 229'], ['Matcha Latte', '219 / 239 / 249'],
          ['Strawberry Matcha Latte', '219 / 239 / 249'], ['Vanilla Rose', '209 / 229 / 239'], ['Mocha Frappe', '219 / 239 / 249'],
          ['Triple Chocolate', '229 / 249 / 259'], ['Cookies N’ Cream', '139 / 149 / 169']
        ] },
        { title: 'Tea, juice & soda', lines: [
          ['English Breakfast · Earl Grey', '179'], ['Chamomile · Jasmine · Mint', '179'], ['Mango Juice', '169'],
          ['Calamansi Juice', '169'], ['Minty Cucumber', '189'], ['Sunrise Fresh', '179'],
          ['Hibiscus Soda · Oolong Lychee Soda', '190'], ['Milo Dinosaur', '209'], ['Mango · Strawberry · Banana Smoothie', '239']
        ] }
      ],
      sub: {
        title: 'Brunch & Pasta',
        cols: [
          { items: [
            ['Grilled Cheese', 'Brioche, four-cheese, fries', '319'],
            ['Crispy Chicken Sandwich', 'Chicken breast, truffle aioli, slaw, spicy mayo, pickled onion, jalapeno, fries', '349'],
            ['Pork Steak', 'Pork rib eye, hungarian sausage, house-made gravy, fries', '399']
          ] },
          { items: [
            ['Bolognese', 'Ground beef, basil, tomato', '369'],
            ['Mushroom Truffle', 'Crispy bacon, mushroom, butter', '399'],
            ['Aglio Olio', 'Chorizo picante, olive oil, garlic', '329']
          ] }
        ]
      }
    },
    {
      id: 'farooj', tab: 'Farooj', title: 'FAROOJ', kicker: 'Chicken · Kebab · Wraps', accent: '#C0392B', compact: true,
      photos: [
        ['ph-farooj-1.webp', 'Whole Chicken'], ['ph-farooj-2.webp', 'Kebab Platter'],
        ['ph-farooj-3.webp', 'Beef Shawarma Wrap'], ['ph-farooj-4.webp', 'Farooj Nachos']
      ],
      credits: [
        ['Herbertkikoy', 'https://commons.wikimedia.org/wiki/File:Savory_Lechon_Manok.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
        ['Benreis', 'https://commons.wikimedia.org/wiki/File:Chelo_Kabab_Soltani_Berlin_Kourosh.jpg', 'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0/'],
        ['Andy Li', 'https://commons.wikimedia.org/wiki/File:Handmade_Chicken_Shawarma_Wrap_-_Lavash.jpg', 'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/'],
        ['Sarah Stierch', 'https://commons.wikimedia.org/wiki/File:Nachos_at_Maya_Restaurant_-_2021-10-03_-_Sarah_Stierch.jpg', 'CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/']
      ],
      cols: [
        { groups: [
          { title: 'Charcoal Chicken', items: [
            ['Half Chicken 600g', 'Curry rice, pita wraps, mixed veggies, 2 sauces of your choice', '729'],
            ['Whole Chicken 1.2kg', 'Curry rice, pita wraps, mixed veggies, 4 sauces of your choice', '1349'],
            ['Full Plate', 'One (1) quarter chicken, one (1) beef kebab patty, curry rice, fries, 1 sauce of your choice', '589'],
            ['Single Plate', 'Farooj shredded chicken, curry rice, 1 sauce of your choice', '299'],
            ['Half Fried Chicken', 'Six (6) pieces, Farooj chicken spice mix', '539'],
            ['Kebab Platter', 'Five (5) pieces (750g) of beef kebab, curry rice, 2 sauces of your choice', '889']
          ] },
          { title: 'Sides', lines: [
            ['Beef kebab (1 piece)', '189'], ['Curry rice', '209'], ['Pita wrap (3 pieces)', '159'],
            ['Beef shawarma 150g', '299'], ['Shredded chicken 200g', '189'], ['Extra sauce (1)', '45'], ['All 4 sauces', '159']
          ] }
        ] },
        { groups: [
          { title: 'To share', items: [
            ['Farooj Nachos', 'Ground beef, melted cheese, mixed veggies, fried pita, fries', '599'],
            ['Spicy Baby Shrimp', 'Crispy shrimp, spice mix, garlic sauce', '399'],
            ['Crispy Potato Wedge', 'House blend seasoning, garlic sauce', '219'],
            ['Chicken Skin', 'Crispy chicken skin, pita bites, 2 sauces of your choice', '359'],
            ['Farooj Salad', 'Chopped greens, red onions, olives, capsicum, cucumber, tomatoes, feta cheese, lemon vinaigrette', '539']
          ] },
          { title: 'Wraps or rice', items: [
            ['Beef Kebab', '300g beef kebab, mixed veggies, 2 sauces of your choice', '429'],
            ['Beef Shawarma', '150g beef shawarma, mixed veggies, 2 sauces of your choice', '399'],
            ['Classic Chicken', '200g Farooj shredded chicken, 1 sauce of your choice', '269']
          ] },
          { title: 'Drinks', lines: [['Beer', '150'], ['Juice', '199'], ['Fruit shake', '239'], ['Soda in can', '79'], ['Bottled water', '49']] }
        ] }
      ]
    }
  ];

  // ---------- Rendering helpers ----------
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function itemHTML(it, compact) {
    return '<div class="item' + (compact ? ' compact' : '') + '"><div>' +
      '<div class="item-name">' + esc(it[0]) + '</div>' +
      '<div class="item-desc">' + esc(it[1]) + '</div>' +
      (it[3] ? '<div class="item-variants">' + esc(it[3]) + '</div>' : '') +
      '</div><div class="item-price">' + esc(it[2]) + '</div></div>';
  }

  function linesHTML(lines) {
    return lines.map(function (l) {
      return '<div class="line"><span class="line-name">' + esc(l[0]) + '</span><span class="line-price">' + esc(l[1]) + '</span></div>';
    }).join('');
  }

  function colsHTML(cols, compact) {
    return '<div class="cols">' + cols.map(function (c) {
      if (c.items) return '<div>' + c.items.map(function (it) { return itemHTML(it, compact); }).join('') + '</div>';
      return '<div>' + c.groups.map(function (g, i) {
        return '<h3 class="group-title' + (i ? ' spaced' : '') + '">' + esc(g.title) + '</h3>' +
          (g.items ? g.items.map(function (it) { return itemHTML(it, compact); }).join('') : linesHTML(g.lines));
      }).join('') + '</div>';
    }).join('') + '</div>';
  }

  function panelHTML(s) {
    var h = '';
    h += '<div class="panel-head"><h2' + (s.accent ? ' style="color:' + s.accent + '"' : '') + '>' + esc(s.title) + '</h2>' +
      (s.note ? '<span class="panel-note">' + esc(s.note) + '</span>' : '') + '</div>';
    if (s.by) h += '<p class="panel-by">' + esc(s.by) + '</p>';
    if (s.kicker) h += '<p class="panel-kicker">' + esc(s.kicker) + '</p>';
    h += '<div class="rule"></div>';
    h += '<div class="dish-grid">' + s.photos.map(function (p) {
      return '<figure><div class="ph r6 ar-4-3"><img src="images/' + p[0] + '" alt="' + esc(p[1]) + '" loading="lazy"></div>' +
        '<figcaption>' + esc(p[1]) + '</figcaption></figure>';
    }).join('') + '</div>';
    if (s.cols) h += colsHTML(s.cols, s.compact);
    if (s.lineCols) {
      h += '<div class="cols cols-3">' + s.lineCols.map(function (c) {
        return '<div><h3 class="group-title">' + esc(c.title) + '</h3>' +
          (c.sub ? '<p class="group-sub">' + esc(c.sub) + '</p>' : '') + linesHTML(c.lines) + '</div>';
      }).join('') + '</div>';
    }
    if (s.boxes) {
      h += '<div class="boxes">' + s.boxes.map(function (b) {
        return '<div class="box"><h3 class="group-title">' + esc(b.title) + '</h3>' + linesHTML(b.lines) + '</div>';
      }).join('') + '</div>';
    }
    if (s.sub) {
      h += '<div class="subsection"><h3>' + esc(s.sub.title) + '</h3><div class="rule"></div>' + colsHTML(s.sub.cols, true) + '</div>';
    }
    // Stand-in stock photos need attribution until replaced with Balai's own shots
    if (s.credits) {
      h += '<p class="credits">Photos: ' + s.credits.map(function (c) {
        return '<a href="' + c[1] + '" target="_blank" rel="noopener">' + esc(c[0]) + '</a> (<a href="' + c[3] + '" target="_blank" rel="noopener">' + esc(c[2]) + '</a>)';
      }).join(', ') + ', via Wikimedia Commons.</p>';
    }
    return h;
  }

  // ---------- Menu tabs ----------
  var tabsEl = document.getElementById('menu-tabs');
  var panelsEl = document.getElementById('menu-panels');

  tabsEl.innerHTML = MENU.map(function (s) {
    return '<button type="button" class="tab" role="tab" id="tab-' + s.id + '" aria-controls="panel-' + s.id +
      '" data-tab="' + s.id + '">' + esc(s.tab) + '</button>';
  }).join('');
  panelsEl.innerHTML = MENU.map(function (s) {
    return '<div class="menu-panel" role="tabpanel" id="panel-' + s.id + '" aria-labelledby="tab-' + s.id + '"' +
      (s.accent ? ' style="--accent:' + s.accent + '"' : '') + ' hidden>' + panelHTML(s) + '</div>';
  }).join('');

  var tabs = Array.prototype.slice.call(tabsEl.querySelectorAll('.tab'));

  var activeTab = MENU[0].id;

  function selectTab(id) {
    if (!MENU.some(function (s) { return s.id === id; })) id = MENU[0].id;
    activeTab = id;
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-tab') === id;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    MENU.forEach(function (s) {
      document.getElementById('panel-' + s.id).hidden = s.id !== id;
    });
  }

  tabsEl.addEventListener('click', function (e) {
    var t = e.target.closest('.tab');
    if (!t) return;
    history.replaceState(null, '', '#menu/' + t.getAttribute('data-tab'));
    selectTab(t.getAttribute('data-tab'));
  });

  tabsEl.addEventListener('keydown', function (e) {
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    next = (next + tabs.length) % tabs.length;
    tabs[next].focus();
    tabs[next].click();
  });

  // ---------- Routing ----------
  var views = document.querySelectorAll('[data-view]');
  var navLinks = document.querySelectorAll('[data-nav]');
  var TITLES = { home: 'Balai — Brunch by Cafeplus Coffee', menu: 'Menu — Balai', reserve: 'Reservations — Balai' };
  var current = null;

  function route() {
    var parts = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
    var page = TITLES[parts[0]] ? parts[0] : 'home';
    views.forEach(function (v) { v.hidden = v.getAttribute('data-view') !== page; });
    navLinks.forEach(function (a) {
      if (a.getAttribute('data-nav') === page) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    if (page === 'menu') selectTab(parts[1] || activeTab);
    document.title = TITLES[page];
    if (page !== current) window.scrollTo(0, 0);
    current = page;
  }

  window.addEventListener('hashchange', route);
  route();

  // ---------- Reservation ----------
  var form = document.getElementById('res-form');
  var thanks = document.getElementById('thanks');
  var errEl = document.getElementById('form-error');

  var today = new Date();
  form.date.min = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var missing = ['date', 'name', 'phone'].filter(function (k) {
      var bad = !form[k].value.trim();
      form[k].setAttribute('aria-invalid', bad ? 'true' : 'false');
      return bad;
    });
    if (missing.length) {
      errEl.textContent = 'Please add your ' + missing.join(', ').replace(/, ([^,]*)$/, ' and $1') + '.';
      errEl.hidden = false;
      form[missing[0]].focus();
      return;
    }
    errEl.hidden = true;

    var guests = form.guests.value;
    var g = guests === '12+' ? '12 or more guests' : guests === '1' ? '1 guest' : guests + ' guests';
    var when = new Date(form.date.value + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    var name = form.name.value.trim();
    var seat = form.seat.value;
    document.getElementById('confirm-text').textContent =
      name + ', we have you down for ' + g + ' on ' + when + ' at ' + form.time.value + ', ' + seat.toLowerCase() + '.';

    form.hidden = true;
    thanks.hidden = false;
    thanks.focus({ preventScroll: true });
    thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById('book-again').addEventListener('click', function () {
    form.reset();
    form.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
    thanks.hidden = true;
    form.hidden = false;
  });
})();
