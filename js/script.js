'use strict';

// МЕНЮ
(function () {
  var menu = document.querySelector('.menu');
  var menuToggler = menu.querySelector('.menu__toggler');
  var menyLinks = document.querySelectorAll('.menu__link');

  if (menu && menuToggler && menyLinks) {
    menu.classList.remove('menu--no-js');
    menu.classList.add('menu--menu-closed');

    // Close menu
    var closeMenu = function () {
      menu.classList.add('menu--menu-closed');
      menu.classList.remove('menu--menu-opened');
    };

    // Open menu
    var openMenu = function () {
      menu.classList.remove('menu--menu-closed');
      menu.classList.add('menu--menu-opened');
    };

    menuToggler.addEventListener('click', function () {
      if (menu.classList.contains('menu--menu-closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    });


    // Add eventListeners to all links
    for (var i = 0; i < menyLinks.length; i++) {
      menyLinks[i].addEventListener('click', closeMenu);
    }
  }
})();

// ЗАМЕНА ТЕКСТА
(function () {
  var changeDescriptionText = function () {
    var description = document.getElementById('description');
    if (description) {
      if (window.matchMedia('(max-width: 767px)').matches) {
        description.innerHTML = 'Работаем на российском рынке с&nbsp;<b>1992</b>&nbsp;года.';
      } else {
        description.innerHTML = 'Компания ЗАО&nbsp;«НCП «МонтCтрой» успешно работает на российском рынке с&nbsp;<b>1992</b>&nbsp;года, и&nbsp;за это время зарекомендовала себя как ведущий разработчик качественных систем установок для&nbsp;предприятий, выполняет полный комплекс строительно-монтажных и&nbsp;пуско-наладочных работ по&nbsp;электроснабжению зданий и&nbsp;сооружений.';
      }
    }
  };

  window.addEventListener('resize', changeDescriptionText);
  changeDescriptionText();
})();
