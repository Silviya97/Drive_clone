const hideSideBarBtn = document.querySelector('#hide-btn');
const rightPane = document.querySelector('#right-pane');
const main = document.querySelector('#main-body');


const onBtnClick = (e) => {
    main.classList.toggle('two-pane');
    hideSideBarBtn.classList.toggle('rot');
    rightPane.classList.toggle('hidden');
}

const onFocus = (e) => {
    searchWrapper.classList.add('search-wrapper-focus');
}

hideSideBarBtn.addEventListener('click', onBtnClick);
