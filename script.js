var burger = document.querySelector('.menu-burger');
var sidebar = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('nav-list-active');
    burger.classList.toggle('toggle');
})