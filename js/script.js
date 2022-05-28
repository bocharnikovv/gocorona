const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const body = document.body;

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
    e.preventDefault();
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        body.classList.toggle("lock");
}