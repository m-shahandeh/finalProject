import Swiper from 'swiper';

function FetchSwiperBase() {
  return new Swiper('.base', {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function FetchSwiperSM() {
  return new Swiper('.sm', {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function FetchSwiperMD() {
  return new Swiper('.md', {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function FetchSwiperLG() {
  return new Swiper('.lg', {
    slidesPerView: 6,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function FetchSwiperXL() {
  return new Swiper('.xl', {
    slidesPerView: 7,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function FetchSwiperEXTRA() {
  return new Swiper('.extra', {
    slidesPerView: 8,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function FetchSwiperInit() {
  FetchSwiperBase();
  FetchSwiperSM();
  FetchSwiperMD();
  FetchSwiperLG();
  FetchSwiperXL();
  FetchSwiperEXTRA();
}

export default FetchSwiperInit;
