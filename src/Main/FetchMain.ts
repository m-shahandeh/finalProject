// import axios from 'axios';
import * as database from "../db.json";


async function FetchMain() {
  // let data = (await axios.get('http://localhost:3000/product')).data;
  let data = database.product
  data.forEach(
    (element: {
      image: string;
      title: string;
      rating: {
        rate: number;
        count: number;
      };
      description: string;
    }) => {
      document.getElementById('mainWrapper')?.insertAdjacentHTML(
        'beforeend',
        `
        <div class="group h-96 cursor-pointer">
          <div class="relative w-full">
            <div class="h-96 w-full p-4 rounded-3xl shadow-xl shadow-violet-300 hover:shadow-violet-500 group-hover:scale-y-0 group-hover:duration-500 absolute">  
              <img class="h-48 w-full object-contain" src="${element.image}"></img>
              <p class="h-28 font-plusBold leading-5 py-2 line-clamp-5">${element.title}</p>
              <p class="font-plusBold text-sm py-2">Price: $${element.rating.rate}</p>
              <div class="flex justify-between">
                <p class="font-plusMedium text-sm text-gray-700">Rate: ${element.rating.rate}</p>
                <p class="font-plusMedium text-sm text-gray-700">From: ${element.rating.count}</p>
              </div>
            </div>
            <div class="h-96 w-full p-4 rounded-3xl bg-zinc-200 shadow-xl shadow-violet-400 scale-y-0 overflow-hidden group-hover:scale-y-100 group-hover:duration-500 group-hover:delay-500 absolute">
              <p class=" line-clamp-15">${element.description}</P>
            </div>
          </div>
        </div>
        `
      );
    }
  );
}

export default FetchMain;
