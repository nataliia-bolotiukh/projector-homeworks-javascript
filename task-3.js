// Задача про рекурсію та ітерацію
// Напишіть: - функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
//   функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.



function recursiveOddSumTo(number) {
  if (number <= 0) {
    return 0;
  }
  
  if (number % 2 === 0) {
    return recursiveOddSumTo(number - 1);
  }  
  
  return number + recursiveOddSumTo(number - 2);
  
  };
  console.log(recursiveOddSumTo(1)) // 1
  console.log(recursiveOddSumTo(10)) // 25 



function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i = i + 2) {
    sum += i;
  }
  return sum;
}
console.log(iterativeOddSumTo(1)) 
console.log(iterativeOddSumTo(10)) 
