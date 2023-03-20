// Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.


const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};
function optimizer(data) {
  return Object.keys(data).reduce((accumulator, key) => {
        accumulator[key.toLowerCase()] = Number.parseFloat(data[key]).toFixed(2);
    return accumulator;  
  }, {}); 
};
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData) 
