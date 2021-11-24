const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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