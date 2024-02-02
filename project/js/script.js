document.addEventListener('DOMContentLoaded', () => {

  /* search */
  let search = document.querySelector('#search')
  let headerSearch = document.querySelector('#header__search-left')
  let searchExit = document.querySelector('#search__exit')

  search.addEventListener('click',
    function () {
      headerSearch.classList.add('header__search-left--is-active');
      search.classList.add('search__open-left--is-active')
    })

  searchExit.addEventListener('click',
    function () {
      headerSearch.classList.remove('header__search-left--is-active');
      search.classList.remove('search__open-left--is-active')
    })

  /* dropdown */
  const menuBtns = document.querySelectorAll('.menu__btn');
  const drops = document.querySelectorAll('.dropdown');

  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('menu__btn--active');
        }
      });

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown--active');
        }
      });

      drop.classList.toggle('dropdown--active');
      currentBtn.classList.toggle('menu__btn--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
      menuBtns.forEach(el => {
        el.classList.remove('menu__btn--active');
      });

      drops.forEach(el => {
        el.classList.remove('dropdown--active');
      });
    }
  });

  /* burger */
  let burger = document.querySelector('.header__burger')
  let menu = document.querySelector('.burger')
  let menulinks = menu.querySelectorAll('.burger__link')
  let menuexit = menu.querySelector('.burger__exit')

  burger.addEventListener('click',
    function () {
      menu.classList.toggle('burger-nav');
    })

  menuexit.addEventListener('click',
    function () {
      menu.classList.remove('burger-nav');
    })

  menulinks.forEach(function (el) {
    el.addEventListener('click', function () {

      menu.classList.remove('burger-nav');
    })

  })

  /* tabs */
  document.querySelectorAll('.accordion__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.accordion__btn').forEach(function (btn) {
        btn.classList.remove('catalog__tabs--active-color')
      });

      e.currentTarget.classList.add('catalog__tabs--active-color');

      document.querySelectorAll('.catalog__artist').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('catalog__artist-active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__artist-active');
    });
  });

});

/* hero__swiper*/
new Swiper('.hero__swiper', {

  autoplay: {
    delay: 2500,
  },

  speed: 0,

  disableOnInteraction: {
    boolean: false,
  },

  scrollbar: {
    hide: true,
  },

  loop: {
    boolean: true,
  },

  simulateTouch: {
    boolean: true,
  },

  FollowFinger: {
    boolean: true,
  },
});

/* gallery__swiper */
new Swiper('.gallery__swiper', {
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 800,

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    479: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25,
    },

    770: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 38,
    },

    760: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    993: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1360: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

});

/* events__swiper */
new Swiper(".events__swiper", {
  keyboard: {
    enabled: true,
  },

  speed: 800,

  navigation: {
    nextEl: ".events__swiper-button-next",
    prevEl: ".events__swiper-button-prev",
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: {
      boolean: true,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    665: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1700: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

const element = document.querySelector('select');
<<<<<<< HEAD
element.tabIndex = "0";
=======
>>>>>>> a355f45d7a0ba965744cfea885cf37abe87b3d9e
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

<<<<<<< HEAD
/* accordion */

=======

/* accordion */
>>>>>>> a355f45d7a0ba965744cfea885cf37abe87b3d9e
$(".accordion__list").accordion({
  heightStyle: "content"
});

$(function () {
  $(".accordion__list").accordion({
    collapsible: true
  });
});


$(".accordion__list").accordion({
  icons: false
});

document.createElement('figure');
document.createElement('figcaption');


/* project__swiper */
var swiper = new Swiper(".project__swiper", {
  keyboard: {
    enabled: true,
  },

  speed: 800,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

});

/* maps */
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.7600014369869, 37.59640262040711],
    zoom: 14
  });
<<<<<<< HEAD
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  myMap.behaviors.disable(['scrollZoom']);

  var myPlacemark = new ymaps.Placemark([55.7600014369869, 37.59640262040711], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
=======

  var myPlacemark = new ymaps.Placemark([55.7598864949149, 37.59626314553832], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'location.svg',
>>>>>>> a355f45d7a0ba965744cfea885cf37abe87b3d9e
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -50]
  });

<<<<<<< HEAD
  myMap.geoObjects.add(myPlacemark);
=======
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark);

>>>>>>> a355f45d7a0ba965744cfea885cf37abe87b3d9e
}

/* form */
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },

  messages: {
    name: {
      remote: 'Подходит',
      required: 'Требуется ввести имя',
      minLength: 'Нужно минимум два символа',
      maxLength: 'Слишком много букв!',

    },
    tel: {
      remote: 'Подходит',
      required: 'Требуется ввести телефон',
      minLength: 'Нужно 10 цифр',
      maxLength: 'Нужно не более 10 цифр',
      function: 'Введите только 10 цифр'
    },
  },
})

/* modal */
const swiperSlides = document.querySelector('.gallery__swiper-wrapper');
const modal = document.querySelector('.modal');
const modalBtn = modal.querySelector('.modal__close-btn');

const animation = function (el, Class, flag) {
  if (flag === 'play') {
    el.style.display = 'flex';
    setTimeout(() => {
      el.classList.add(Class);
    }, 50);
  } else if (flag === 'reverse') {
    el.classList.remove(Class);
    setTimeout(() => {
      el.style.display = 'none';
    }, 700);
  }
};

const openModal = function ({ target }) {
  if (target.closest('.gallery__swiper-btn')) {
    const img = target.querySelector('img');
    const link = img.getAttribute('src');
    animation(modal, 'modal__block--active', 'play');
    modal.querySelector('img')
      .setAttribute('src', link);
    document.body.classList.add('modal__body-block--active');
  }
};

const closeModal = function () {
  animation(modal, 'modal__block--active', 'reverse');
  document.body.classList.remove('modal__body-block--active');
};

swiperSlides.addEventListener('click', openModal);
modalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', ({ target }) => {
  if (target === modal) closeModal();
});

/* sroll */
$(document).ready(function () {

  $('.accordion__btn').on('click', function () {

    $('.catalog__artist').get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
});
