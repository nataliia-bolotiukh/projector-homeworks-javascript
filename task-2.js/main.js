`use strict`;

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const title = document.querySelector(".title");

function formatDate(date) {
  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${dayOfMonth}-${month}-${year} ${hour}:${minutes}:${seconds}`;
}

if (localStorage.getItem("turn_off")) {
  title.innerHTML = localStorage.getItem("turn_off");
}

btn.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Turn off") {
    e.target.innerHTML = "Turn on";
    body.style = "background-color:gray";

    localStorage.setItem(
      "turn_off",
      `Last turn off: ${formatDate(new Date())}`
    );

    title.innerHTML = localStorage.getItem("turn_off");
  } else {
    e.target.innerHTML = "Turn off";
    body.style = "background-color:white";
    title.innerHTML = `Last turn on: ${formatDate(new Date())}`;
  }
});
