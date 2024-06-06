// popup swiper slider script
var swiper = new Swiper(".popupSlide", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// Testimonial swiper slider script
var swiper = new Swiper(".testimonial_slider", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      
    },
  });

