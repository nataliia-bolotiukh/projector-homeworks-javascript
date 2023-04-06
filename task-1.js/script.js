`use strict`;

const mainTitle = document.getElementById("headerTwo");
console.log(mainTitle.textContent);

const sectionWithClass = document.querySelector(".firstSection");
console.log(sectionWithClass.firstElementChild.textContent);

const fifth = document.querySelector("li:nth-child(5)");
console.log(fifth);

const labelWithClass = document.getElementsByClassName("hatredLevelBlock");
console.log(labelWithClass);
