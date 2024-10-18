function MenuWrapper() {
  document
    .getElementById('app')
    ?.insertAdjacentHTML(
      'afterbegin',
      `<div id="menuWrapper" class="w-full h-20 border-b-lime-200 bg-zinc-100 border-b-2 flex justify-around items-center"></div>`
    );
}

export default MenuWrapper;
