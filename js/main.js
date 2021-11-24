const swiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});
// JavaScript API от Яндекс.Карт
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [36.708957, 28.723924],
        zoom: 8,
    });

    var Placemark = new ymaps.Placemark([36.708957, 28.723924], {
    });
    map.geoObjects.add(Placemark);
}

const reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});