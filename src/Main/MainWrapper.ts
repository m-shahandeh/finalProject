function MainWrapper() {
  document.getElementById('app')?.insertAdjacentHTML(
    'beforeend',
    `
        <div id="mainWrapper" class="grid 
        grid-cols-2 gap-4 m-6
        sm:grid-cols-3 sm:gap-5 sm:m-7
        md:grid-cols-4 md:gap-4 md:m-8
        lg:grid-cols-5 ld:gap-6 lg:m-9
        xl:grid-cols-6 xl:gap-7 xl:m-10
        2xl:grid-cols-7 2xl:gap-7 2xl:m-11
        ">

        </div>
        `
  );
}

export default MainWrapper;
