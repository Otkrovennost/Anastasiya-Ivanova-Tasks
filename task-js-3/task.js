const deepCopyFunc = (obj) => {
  let copyObj = {};
  let value;
  let key;

  if(typeof obj !== 'object') {
    return obj;
  }

  for (key in obj) {
    value = obj[key];
    if(!Array.isArray(value) || !value instanceof Function) {
      copyObj[key] = deepCopyFunc(value);
    }
  }
  // Проверка на функцию почему-то не работает..

  return copyObj;
};

const obj_1 = {
  name: 'Anna',
  age: 14,
  preferences: {
    dish: 'meat',
    drink: 'juce'
  },
  likes: [1, 2, 3],
  sayHello: function () {
    console.log('Hello')
  }
}

const obj_2 = deepCopyFunc(obj_1);

console.log(obj_2);
console.log(obj_1 === obj_2 );