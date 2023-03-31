// Використовуючи setInterval
"use strict";
detonatorTimer = (delay) => {
  let del = delay;
  const timerId = setInterval(() => {
    if (del >= 0) {
      console.log(del === 0 ? "BOOM!" : del);
    } else {
      clearInterval(timerId);
    }
    del--;
  }, 1000);
};

detonatorTimer(3);


// Використовуючи вкладений setTimeout
"use strict";
function detonatorTimer(delay) {
  let del = delay;
  setTimeout(function () {
    console.log(del === 0 ? "BOOM!" : del);
    if (del > 0) {
      del--;
      detonatorTimer(del);
    }
  }, 1000);
}
detonatorTimer(3);
