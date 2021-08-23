(function () {
  'use strict';
  const historyYearSlider = new Swiper('.about-company-history__year-slider', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    // pagination: {
    //   el: '.certificates-pagination',
    //   type: 'bullets',
    //   bulletClass: 'certificates-pagination__bullet',
    //   bulletActiveClass: 'certificates-pagination__bullet--active',
    //   clickable: true,
    // },
  });
  const historyMainSlider = new Swiper('.about-company-history__slider', {
    direction: 'horizontal',
    preventClicks: true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    navigation: {
      nextEl: '.about-company-history__button--next',
      prevEl: '.about-company-history__button--prev',
    },
    thumbs: {
      swiper: historyYearSlider,
      slideThumbActiveClass: 'about-company-history__year-item--red'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    }
  });
})();
