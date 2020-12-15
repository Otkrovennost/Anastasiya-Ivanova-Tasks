// Realize memo pattern

// const memo = (func) => {
//   let memo = {};

// };
const sum = (a,b) => a + b;
const memedSum = memo(sum);

console.log(memedSum(1,2));
console.log(memedSum(1,2)); // second time there is no calculation, we get answer from cache
