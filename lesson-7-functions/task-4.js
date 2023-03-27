// Використовуючи setInterval
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
detonatorTimer = (delay) => {
  let del = delay;
  setTimeout(
    (go = () => {
      if (del >= 0) {
        setTimeout(go, 1000);
        console.log(del === 0 ? "BOOM!" : del);
      }
      del--;
    }),
    1000
  );
};

detonatorTimer(3);
