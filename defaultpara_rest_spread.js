const sqr = (a = 1, b = 1) => {
  console.log(a * b);
};
sqr(10, 20);

const sum = (...num) => {
  return num.reduce((a, b) => a + b);
};
console.log(sum(10, 20, 30, 40));

const arr = [1, 2, 3, 4];
const arr2 = [...arr, 6, 7, 8];

console.log(arr2);

const obj = {
  name: "mafi",
  email: "nahid@mafi.com",
};

const obj2 = {
  ...obj,
  name: "maggiii",
  age: 20,
};

console.log(obj2);
