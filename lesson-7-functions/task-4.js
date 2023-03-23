// Використовуючи setInterval
function detonatorTimer(delay) {
  const timerId = setInterval(function () {
    if (delay > 0) {
      console.log(delay);
    }
    if (delay === 0) {
      console.log("BOOM!");
      clearInterval(timerId);
    }
    delay--;
  }, 1000);
}
detonatorTimer(3, 0);


// Використовуючи вкладений setTimeout
function detonatorTimer(delay) {
  setTimeout(function go() {
    if (delay > 0) {
      setTimeout(go, 1000);
      console.log(delay);
    }
    if (delay === 0) {
      console.log("BOOM!");
    }
    delay--;
  }, 1000);
}
detonatorTimer(3, 0);
