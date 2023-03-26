// Використовуючи setInterval
detonatorTimer = (delay) => {
  const timerId = setInterval(function () {
    if (delay >= 0) {
      console.log(delay === 0 ? "BOOM!" : delay);
    } else {
      clearInterval(timerId);
    }
    delay--;
  }, 1000);
};

detonatorTimer(3);


// Використовуючи вкладений setTimeout
detonatorTimer = (delay) => {
  setTimeout(function go() {
    if (delay >= 0) {
      setTimeout(go, 1000);
      console.log(delay === 0 ? "BOOM!" : delay);
    }
    delay--;
  }, 1000);
};

detonatorTimer(3);
