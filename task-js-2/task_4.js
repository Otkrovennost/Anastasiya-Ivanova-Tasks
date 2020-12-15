// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

function multiplyAll(arr) {
  return function result(n) {
    return arr.slice().map((elem) => {
      return elem * n;
    });
  };
}