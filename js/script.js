/* eslint-disable eqeqeq */
/* eslint-disable curly */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-redeclare */
/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-undefined */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

/* МЕНЮ */
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

// // Слайдер преимуществ
// (function () {
//   var Enter = 13;
//   var advantages = document.querySelector('.advantages');
//   var buttons = advantages.querySelectorAll('.button');


//   var selectItem = function (evt) {
//     evt.preventDefault();
//     if (evt.target.classList.contains('button--selected') !== true) {
//       // Меняются классы кнопок
//       // удалить старый
//       var prevButton = advantages.querySelector('.button--selected');
//       prevButton.classList.remove('button--selected');
//       // добавить новый
//       evt.target.classList.add('button--selected');

//       // Меняются классы слайдов
//       // удалить старый
//       var prevItem = advantages.querySelector('.advantages__item--selected');
//       prevItem.classList.remove('advantages__item--selected');
//       // добавить новый
//       var currentButton = evt.target.id;
//       var selector = '.advantages__item:nth-child(' + currentButton + ')';
//       var currentItem = advantages.querySelector(selector);
//       currentItem.classList.add('advantages__item--selected');
//     }
//   };
//   if (advantages && buttons) {
//     for (var i = 0; i < buttons.length; i++) {
//       var button = buttons[i];
//       button.addEventListener('click', function (evt) {
//         selectItem(evt);
//       });
//       button.addEventListener('keydown', function (evt) {
//         if (evt.keyCode === Enter) {
//           selectItem(evt);
//         }
//       });
//     }
//   }
// })();

/* ПЕРЕМЕЩЕНИЕ БЛОКА ПРЕИМУЩЕСТВ */
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

// // ПОЛИФИЛЛ ДЛЯ REMOVE в IE
// (function () {
//   var arr = [window.Element, window.CharacterData, window.DocumentType];
//   var args = [];

//   arr.forEach(function (item) {
//     if (item) {
//       args.push(item.prototype);
//     }
//   });

//   // from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
//   (function (arr) {
//     arr.forEach(function (item) {
//       if (item.hasOwnProperty('remove')) {
//         return;
//       }
//       Object.defineProperty(item, 'remove', {
//         configurable: true,
//         enumerable: true,
//         writable: true,
//         value: function remove() {
//           this.parentNode.removeChild(this);
//         }
//       });
//     });
//   })(args);
// })();

/* ПЕРЕМЕЩЕНИЕ БЛОКА ОПИСАНИЯ */
(function () {
  var moveDescription = function () {
    var descriptionElem = document.querySelector('.description');
    var buttonsElem = document.querySelector('.main-header__buttons-container');
    var headerElem = document.querySelector('.main-header');
    var oldParentDiv = buttonsElem.parentNode;
    var newParentDiv = document.querySelector('.main');

    // Заменяющий параграф
    var substitute = '<p class="main-header__description-substitute">Работаем на российском рынке с&nbsp;<b>1992</b>&nbsp;года</p>';

    if (descriptionElem && buttonsElem && headerElem) {
      if (window.matchMedia('(max-width: 767px)').matches && oldParentDiv.contains(descriptionElem)) {
        // Перемещаем блок
        newParentDiv.insertBefore(descriptionElem, headerElem.nextSibling);
        // Меняем классы
        descriptionElem.classList.remove('main-header__description');
        descriptionElem.classList.add('wrapper');
        // Добавляем замену
        buttonsElem.insertAdjacentHTML('beforebegin', substitute);
      } else if (window.matchMedia('(min-width: 768px)').matches && newParentDiv.contains(descriptionElem)) {
        // Перемещаем блок
        // buttonsElem.before(descriptionElem);
        oldParentDiv.insertBefore(descriptionElem, buttonsElem);
        // Меняем классы
        descriptionElem.classList.remove('wrapper');
        descriptionElem.classList.add('main-header__description');
        // Удаляем замену
        if (document.querySelector('.main-header__description-substitute')) {
          // document.querySelector('.main-header__description-substitute').remove();
          document.querySelector('.main-header__description-substitute').parentNode.removeChild(document.querySelector('.main-header__description-substitute'));
        }
      }
    }
  };

  window.addEventListener('resize', moveDescription);
  moveDescription();
})();

/* ПРОКРУТКА */

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

/* ОБРЕЗКА КОНЦА СТРОКИ */
(function () {
  var allLinks = document.querySelectorAll('.services__sublist a p');

  if (allLinks) {
    for (var i = 0; i < allLinks.length; i++) {
      var link = allLinks[i];
      link.innerHTML = link.innerHTML.replace(/.{1}$/, '<span>$&</span>');
    }
  }
})();

// /* Неполная последняя строка */
// (function () {
//   var allCards = document.querySelectorAll('.projects__item p');

//   if (allCards) {
//     for (var i = 0; i < allCards.length; i++) {
//       var text = allCards[i];
//       text.innerHTML = text.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
//     }
//   }
// })();

/* АККОРДЕОНЫ */
(function () {
  // Полифилл для IE closest
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }


  var Enter = 13;
  var allButtons = document.querySelectorAll('.services__item button');
  var allElements = document.querySelectorAll('.services__item');

  var resetHeight = function () {
    if (window.matchMedia('(min-width: 1024px)').matches || window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector('.services__list').style.height = 'auto';
    } else {
      document.querySelector('.services__list').style.height = ((document.querySelector('.services__list h3').clientHeight) * allButtons.length / 2) + ((document.querySelector('.services__list h3').clientHeight) / 100 * 60) + 'px';
    }
  };

  // Сначала закрываем все что открыто
  if (allButtons && allElements) {

    var closeAll = function () {
      for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];
        element.classList.remove('services__item--opened');
      }
    };

    // Open if close target content
    var toggleContent = function (evt) {
      evt.preventDefault();
      // Close if opened. Else open anything that is openes and open target
      if (evt.target.closest('.services__item').classList.contains('services__item--opened')) {
        closeAll();
        resetHeight();
      } else {
        closeAll();
        evt.target.closest('.services__item').classList.add('services__item--opened');
      }
    };

    // Add eventListeners to all buttons
    for (var i = 0; i < allButtons.length; i++) {
      var button = allButtons[i];
      button.addEventListener('click', function (evt) {
        toggleContent(evt);
        changeOrder();
        // if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 768px)').matches) {
        adjustHeight();
        // }
      });
      button.addEventListener('keydown', function (evt) {
        if (evt.keyCode === Enter) {
          toggleContent(evt);
          changeOrder();
          // if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 768px)').matches) {
          adjustHeight();
          // }
        }
      });
    }
  }

  var openFirst = function () {
    if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 768px)').matches) {
      var allElements = document.querySelectorAll('.services__item');
      var yes = 0;
      for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].classList.contains('services__item--opened')) {
          yes++;
        }
      }
      if (yes == false) {
        allElements[0].classList.add('services__item--opened');
      }
    }
  };

  var adjustHeight = function () {
    if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 768px)').matches) {
      // var list = document.querySelectorAll('.services__list');
      if (document.querySelector('.services__item--opened')) {
        var height = document.querySelector('.services__item--opened').clientHeight;
        // var h = list.style.height;
        document.querySelector('.services__list').style.height = (height + 'px');
      }
    }
  };

  var changeOrder = function () {
    if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 768px)').matches) {
      if (document.querySelector('.services__item--opened')) {
        var currentElement = document.querySelector('.services__item--opened');
        for (var i = 0; i < allElements.length; i++) {
          var element = allElements[i];
          element.style.order = '0';
        }
        currentElement.style.order = '-1';
      }
    }
  };

  var resetOrder = function () {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];
        element.style.order = '0';
      }
    }
  };

  if (window.matchMedia('(max-width: 1767px)').matches) {
    closeAll();
  }

  openFirst();
  window.addEventListener('resize', resetHeight);
  // window.addEventListener('resize', openFirst);
  window.addEventListener('resize', resetOrder);
  window.addEventListener('resize', changeOrder);
  window.addEventListener('resize', adjustHeight);
})();

/* ОТКЛЮЧЕНИЕ КНОПОК УСЛУГ НА ДЕСКТОПЕ*/
(function () {
  var allButtons = document.querySelectorAll('.services__item button');
  var toggleButtonProperty = function () {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      for (var i = 0; i < allButtons.length; i++) {
        var element = allButtons[i];
        element.disabled = true;
      }
    } else {
      for (var i = 0; i < allButtons.length; i++) {
        var element = allButtons[i];
        element.disabled = false;
      }
    }
  };

  toggleButtonProperty();
  window.addEventListener('resize', toggleButtonProperty);
})();

/* SWIPER для Партнеров */
(function () {
  var swiper;

  var destroySwiper = function () {
    swiper.destroy(true, true);
    swiper = undefined;
  };


  var initSwiperM = function () {
    swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      initialSlide: 1,
      // loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        // visibilityFullFit: true,
        // cssWidthAndHeight: true,
        // autoResize: false,
        // loop: true,
        rotate: 0,
        stretch: 0.22,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
    });
  };

  var initSwiperL = function () {
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  var initSwiperS = function () {
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      // centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
    });
  };

  var changeSwiper = function () {
    if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 768px)').matches) {
      if (swiper !== undefined) {
        destroySwiper();
      }
      initSwiperM();
    } else if (window.matchMedia('(min-width: 1024px)').matches) {
      if (swiper !== undefined) {
        destroySwiper();
      }
      initSwiperL();
    } else if (window.matchMedia('(max-width: 767px)').matches) {
      if (swiper !== undefined) {
        destroySwiper();
      }
      initSwiperS();
    }
  };

  window.addEventListener('resize', changeSwiper);
  changeSwiper();
})();

// var toggleSwiperClasses = function (add) {
//   var wrapper = document.querySelector('.advantages__list');
//   var items = document.querySelectorAll('.advantages__item');
//   if (add) {
//     wrapper.classList.add('swiper-wrapper');
//     for (var i = 0; i <= items.length; i++) {
//       items[i].classList.add('swiper-slide');
//     }
//   } else {
//     wrapper.classList.remove('swiper-wrapper');
//     for (var i = 0; i <= items.length; i++) {
//       items[i].classList.remove('swiper-slide');
//     }
//   }
// };

/* SWIPER для Преимуществ */
(function () {
  var advantagesSwiper;

  var destroyAdvantagesSwiper = function () {
    advantagesSwiper.destroy(true, true);
    advantagesSwiper = undefined;
  };


  var initAdvantagesSwiperS = function () {
    advantagesSwiper = new Swiper('.advantages__wrapper', {
      slidesPerView: 'auto',
      initialSlide: 1,
      // centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.advantages__buttons',
        dynamicBullets: true,
        clickable: true,
      },
    });
  };

  var initAdvantagesSwiperM = function () {
    advantagesSwiper = new Swiper('.advantages__wrapper', {
      effect: 'coverflow',
      grabCursor: true,
      initialSlide: 1,
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        // visibilityFullFit: true,
        // cssWidthAndHeight: true,
        // autoResize: false,
        // loop: true,
        rotate: 0,
        stretch: 0.22,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
        // dynamicBullets: true,
        clickable: true,
      },
    });


    // var changeClasses = function () {
    //   var slides = document.querySelectorAll('.advantages__item');
    //   for (var i = 0; i <= slides.length; i++) {
    //     var currentSlide = slides[i];
    //     var zet = currentSlide.style.zIndex;
    //     if (zet === 1 || zet !== -1) {
    //       currentSlide.classList.remove('swiper-slide-hidden');
    //     } else {
    //       currentSlide.classList.add('swiper-slide-hidden');
    //     }
    //   }
    // };

    // advantagesSwiper.on('slideChangeTransitionEnd', changeClasses);
  };

  var changeAdvantagesSwiper = function () {
    // Для десктопа
    if (window.matchMedia('(min-width: 1024px)').matches) {
      if (advantagesSwiper !== undefined) {
        destroyAdvantagesSwiper();
      }
      // Для планшета
    } else if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 768px)').matches) {
      if (advantagesSwiper !== undefined) {
        destroyAdvantagesSwiper();
      }
      initAdvantagesSwiperM();

      // Для мобилки
    } else if (window.matchMedia('(max-width: 767px)').matches) {
      if (advantagesSwiper !== undefined) {
        destroyAdvantagesSwiper();
      }
      initAdvantagesSwiperS();
    }
  };

  window.addEventListener('resize', changeAdvantagesSwiper);
  changeAdvantagesSwiper();
  window.advantagesSwiper = advantagesSwiper;
})();

/* ЗАМЕНА ТЕКСТА */
(function () {
  var changeText = function () {
    var element = document.querySelector('.partners h2');
    if (element) {
      if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
        element.innerHTML = 'Наши партнеры';
      } else {
        element.innerHTML = 'Партнеры';
      }
    }
  };
  window.addEventListener('resize', changeText);
  changeText();
})();


/* КЛОНИРОВАНИЕ БЛОКА МЕНЮ */
(function () {
  var contactsElem = document.querySelector('.contacts-list');
  var newSibling = document.querySelector('.social');
  var newParentDiv = document.querySelector('.footer__container');

  if (contactsElem && newSibling && newParentDiv) {
    var newContactsElem = contactsElem.cloneNode(true);
    newParentDiv.insertBefore(newContactsElem, newSibling);
    newContactsElem.classList.add('contacts-list--shadow');
  }
})();

// МАСКА ДЛЯ ПОЛЯ ТЕЛЕФОНА

var telInput = document.getElementById('customer-phone');

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
// eslint-disable-next-line no-undef
var mask = IMask(telInput, maskOptions);
