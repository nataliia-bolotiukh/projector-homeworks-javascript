function someFunction(a, b) {
  console.log(a + b);
}

function slower(func, seconds) {
  function wrapper(...args) {
    setTimeout(() => func.apply(this, args), seconds * 1000);
  }
  return wrapper;
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(1, 2);
slowedSomeFunction(3, 4);
console.log("Chill out, you will get you result in 5 seconds");
