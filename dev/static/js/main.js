(function () {
  'use strict';
  const historyYearSlider = new Swiper('.about-company-history__year-slider', {
    direction: 'horizontal',
    grabCursor: true,
    preventClicks: true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 30,
    //     slidesOffsetBefore: 0,
    //     slidesOffsetAfter: 0,
    //   },
    // },
    // pagination: {
    //   el: '.certificates-pagination',
    //   type: 'bullets',
    //   bulletClass: 'certificates-pagination__bullet',
    //   bulletActiveClass: 'certificates-pagination__bullet--active',
    //   clickable: true,
    // },
  });
})();
