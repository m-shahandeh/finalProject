import * as database from '../db.json';

function isCategories(
  name: string,
  list: { categoryName: string; categoryLink: string }[],
  href: string | null
) {
  if (name === 'Categories') {
    let category = list.map((item) => {
      console.log(item);

      return `<a href="${item.categoryLink}" class="bg-white border-solid border-black p-2 border-[1px] font-plusMedium text-sm px-4
      sm:font-plusRegular sm:text-lg
      md:font-plusMedium md:px-6
      lg:text-xl 
      xl:font-plusBold
      2xl:px-8">${item.categoryName}</a>`;
    });

    return `
    <div class="group">
      <div class="bg-white rounded border-2 border-solid border-lime-300 py-2 shadow-md hover:shadow-lime-500
      font-plusMedium text-sm px-4
      sm:font-plusMedium sm:text-lg
      md:font-plusBold md:px-6
      lg:text-xl 
      xl:font-plusExtraBold
      2xl:px-8"> 
        <div>${name}</div>
      </div>
      <div class="z-10 absolute flex-col top-[60px] h-2 hidden group-hover:flex">
          ${category.join('')}
      </div>
    </div>
    `;
  } else {
    return `
      <a href="${href}" class="
      bg-white rounded border-2 border-solid border-lime-300 py-2 shadow-lg hover:shadow-lime-400
      font-plusMedium text-sm px-4
      sm:font-plusMedium sm:text-lg
      md:font-plusBold md:px-6
      lg:text-xl 
      xl:font-plusExtraBold
      2xl:px-8
      ">
        ${name} 
        </a>
    `;
  }
}

async function Menu() {
  let data = database.menu
  data
    .reverse()
    .forEach(
      (element) => {
        document
          .getElementById('menuWrapper')
          ?.insertAdjacentHTML(
            'afterbegin',
            isCategories(element.name, element.categories, element.href)
          );
      }
    );
}

export default Menu;
