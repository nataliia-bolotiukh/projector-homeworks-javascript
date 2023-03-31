function addThemAll(...arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(addThemAll(2, 4)); // 6*
console.log(addThemAll(1, 2, 3, 4)); // 10*
console.log(addThemAll(5, 5, 10)); // 20*
