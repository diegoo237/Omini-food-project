"use strict";
const headerMenu = document.querySelector(".header");
const btnMenu = document.querySelector('[name="menu-outline"]');
const btnClose = document.querySelector('[name="close-outline"]');

btnMenu.addEventListener("click", function () {
  headerMenu.classList.add("nav-open");
});
btnClose.addEventListener("click", function () {
  headerMenu.classList.remove("nav-open");
});
