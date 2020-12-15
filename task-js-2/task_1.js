// Realize pipe pattern
const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;

const pipe = (func_1, func_2) => {
  return (arg) => {
    const result_1 = func_1(arg);
    return func_2(result_1);
  }
}

const res = pipe(
  multiplyTwo,
  minusFour
)(10);

console.log(res); // 16