async function SwiperWrapper() {
  document.getElementById('app')?.insertAdjacentHTML(
    'beforeend',
    `
    <div class="w-full">
      <div class="swiper base sm:hidden">
        <div id="swiperWrapperBase" class="swiper-wrapper">

        </div>
      <div class="swiper-pagination"></div>
      </div>


      <div class="swiper sm hidden sm:block md:hidden">
        <div id="swiperWrapperSM" class="swiper-wrapper ">

        </div>
      <div class="swiper-pagination"></div>
      </div>


      <div class="swiper md hidden md:block lg:hidden">
        <div id="swiperWrapperMD" class="swiper-wrapper">

        </div>
      <div class="swiper-pagination"></div>
      </div>


      <div class="swiper lg hidden lg:block xl:hidden">
        <div id="swiperWrapperLG" class="swiper-wrapper xl:hidden">

        </div>
      <div class="swiper-pagination"></div>
      </div>


      <div class="swiper xl hidden xl:block 2xl:hidden">
        <div id="swiperWrapperXL" class="swiper-wrapper 2xl:hidden">

        </div>
      <div class="swiper-pagination"></div>
      </div>


      <div class="swiper extra hidden 2xl:block">
        <div id="swiperWrapperExtra" class="swiper-wrapper">

        </div>
      <div class="swiper-pagination"></div>
      </div>
    </div>
    `
  );
}

export default SwiperWrapper;
