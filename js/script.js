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

// // ЗАМЕНА ТЕКСТА
// (function () {
//   var changeDescriptionText = function () {
//     var description = document.getElementById('description');
//     if (description) {
//       if (window.matchMedia('(max-width: 767px)').matches) {
//         description.innerHTML = 'Работаем на российском рынке с&nbsp;<b>1992</b>&nbsp;года.';
//       } else {
//         description.innerHTML = 'Компания ЗАО&nbsp;«НCП «МонтCтрой» успешно работает на российском рынке с&nbsp;<b>1992</b>&nbsp;года, и&nbsp;за это время зарекомендовала себя как ведущий разработчик качественных систем установок для&nbsp;предприятий, выполняет полный комплекс строительно-монтажных и&nbsp;пуско-наладочных работ по&nbsp;электроснабжению зданий и&nbsp;сооружений.';
//       }
//     }
//   };

//   window.addEventListener('resize', changeDescriptionText);
//   changeDescriptionText();
// })();

// Слайдер преимуществ
(function () {
  var Enter = 13;
  var advantages = document.querySelector('.advantages');
  var buttons = advantages.querySelectorAll('.button');


  var selectItem = function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('button--selected') !== true) {
      // Меняются классы кнопок
      // удалить старый
      var prevButton = advantages.querySelector('.button--selected');
      prevButton.classList.remove('button--selected');
      // добавить новый
      evt.target.classList.add('button--selected');

      // Меняются классы слайдов
      // удалить старый
      var prevItem = advantages.querySelector('.advantages__item--selected');
      prevItem.classList.remove('advantages__item--selected');
      // добавить новый
      var currentButton = evt.target.id;
      var selector = '.advantages__item:nth-child(' + currentButton + ')';
      var currentItem = advantages.querySelector(selector);
      currentItem.classList.add('advantages__item--selected');
    }
  };
  if (advantages && buttons) {
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.addEventListener('click', function (evt) {
        selectItem(evt);
      });
      button.addEventListener('keydown', function (evt) {
        if (evt.keyCode === Enter) {
          selectItem(evt);
        }
      });
    }
  }
})();

// ПЕРЕМЕЩЕНИЕ БЛОКА ПРЕИМУЩЕСТВ
(function () {
  var moveAdvantages = function () {
    var advantagesElem = document.querySelector('.advantages');
    var buttonsElem = document.querySelector('.main-header__buttons-container');
    var servicesElem = document.querySelector('.services');
    var newParentDiv = servicesElem.parentNode;
    var oldParentDiv = buttonsElem.parentNode;

    if (advantagesElem && buttonsElem && servicesElem) {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        newParentDiv.insertBefore(advantagesElem, servicesElem);
        advantagesElem.classList.remove('main-header__advantages');
        advantagesElem.classList.add('wrapper');
      } else {
        oldParentDiv.insertBefore(advantagesElem, buttonsElem.nextSibling);
        advantagesElem.classList.remove('wrapper');
        advantagesElem.classList.add('main-header__advantages');
      }
    }
  };

  window.addEventListener('resize', moveAdvantages);
  moveAdvantages();
})();

// ПЕРЕМЕЩЕНИЕ БЛОКА ОПИСАНИЯ
(function () {
  var moveDescription = function () {
    var descriptionElem = document.querySelector('.description');
    var buttonsElem = document.querySelector('.main-header__buttons-container');
    var advantagesElem = document.querySelector('.advantages');
    var newParentDiv = advantagesElem.parentNode;
    var oldParentDiv = buttonsElem.parentNode;

    // Заменяющий параграф
    var substitute = '<p class="main-header__description-substitute">Работаем на российском рынке с&nbsp;<b>1992</b>&nbsp;года</p>';

    if (descriptionElem && buttonsElem && advantagesElem) {
      if (window.matchMedia('(max-width: 767px)').matches && oldParentDiv.contains(descriptionElem)) {
        // Перемещаем блок
        advantagesElem.before(descriptionElem);
        // Меняем классы
        descriptionElem.classList.remove('main-header__description');
        descriptionElem.classList.add('wrapper');
        // Добавляем замену
        buttonsElem.insertAdjacentHTML('beforebegin', substitute);
      } else if (window.matchMedia('(min-width: 768px)').matches && newParentDiv.contains(descriptionElem)) {
        // Перемещаем блок
        buttonsElem.before(descriptionElem);
        // Меняем классы
        descriptionElem.classList.remove('wrapper');
        descriptionElem.classList.add('main-header__description');
        // Удаляем замену
        if (document.querySelector('.main-header__description-substitute')) {
          document.querySelector('.main-header__description-substitute').remove();
        }
      }
    }
  };

  window.addEventListener('resize', moveDescription);
  moveDescription();
})();

// ПРОКРУТКА

(function () {
  var headerConsultationLink = document.querySelector('.header__contacts-contact .button');
  var servicesLink = document.querySelector('.main-header__button--services');
  var consultationLink = document.querySelector('.main-header__button--consultation');

  var handleAnchorClick = function () {
    event.preventDefault();
    var linkTarget = event.currentTarget.getAttribute('href');
    var id = linkTarget.substring(1, linkTarget.length);
    var aim = document.getElementById(id);
    aim.scrollIntoView({block: 'start', behavior: 'smooth'});
  };

  if (headerConsultationLink) {
    headerConsultationLink.addEventListener('click', handleAnchorClick);
  }

  if (consultationLink) {
    consultationLink.addEventListener('click', handleAnchorClick);
  }

  if (servicesLink) {
    servicesLink.addEventListener('click', handleAnchorClick);
  }
})();
