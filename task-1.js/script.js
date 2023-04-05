`use strict`;

const mainTitle = document.getElementById("headerTwo");
console.log(mainTitle.textContent);

const sectionWithClass = document.querySelector(".firstSection");
console.log(sectionWithClass.firstElementChild.textContent);

const TagName = Array.from(document.getElementsByTagName("li")).filter(
  (item) => item.textContent === "Пункт 5"
);
console.log(TagName[0].textContent);

const labelWithClass = document.getElementsByClassName("hatredLevelBlock");
console.log(labelWithClass);
