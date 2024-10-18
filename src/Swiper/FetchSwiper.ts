import * as database from '../db.json'

function adjacentHtml(element: {
  image: string;
  title: string;
  rating: { rate: number; count: number };
}) {

  return `
        <div class="swiper-slide my-6">
          <div class="cursor-pointer h-96 p-4 rounded-3xl shadow-lg shadow-cyan-100 hover:shadow-cyan-300">
            <img class="h-48 w-full bg-white object-contain" src="${element.image}"></img>
            <p class="h-28 font-plusBold leading-5 py-2 overflow-hidden">${element.title}</p>
            <p class="font-plusBold text-sm py-2">Price: $${element.rating.rate}</p>
            <div class="flex justify-between">
              <p class="font-plusMedium text-sm text-gray-700">Rate: ${element.rating.rate}</p>
              <p class="font-plusMedium text-sm text-gray-700">From: ${element.rating.count}</p>
          </div>
        </div>
       `;
}

async function FetchSwiper() {
  let data = database.product

  data.forEach(
    (element: {
      image: string;
      title: string;
      rating: { rate: number; count: number };
    }) => {
      document
        .getElementById('swiperWrapperBase')
        ?.insertAdjacentHTML('beforeend', adjacentHtml(element));
      document
        .getElementById('swiperWrapperSM')
        ?.insertAdjacentHTML('beforeend', adjacentHtml(element));
      document
        .getElementById('swiperWrapperMD')
        ?.insertAdjacentHTML('beforeend', adjacentHtml(element));
      document
        .getElementById('swiperWrapperLG')
        ?.insertAdjacentHTML('beforeend', adjacentHtml(element));
      document
        .getElementById('swiperWrapperXL')
        ?.insertAdjacentHTML('beforeend', adjacentHtml(element));
      document
        .getElementById('swiperWrapperExtra')
        ?.insertAdjacentHTML('beforeend', adjacentHtml(element));
    }
  );
}
export default FetchSwiper;
