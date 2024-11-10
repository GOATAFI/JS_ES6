const arr = [10, 20, 30];

//usual way
const a = arr[0];
const b = arr[0];
const c = arr[0];

console.log(a);
//ES-6 way

const [x, y, z] = arr;
console.log(x);

const obj = {
  name: "Mafi",
  email: "nahid@mafi.com",
};

let { name, email } = obj;
console.log(name, email);

//main moja to function ee

function print({ name, email }) {
  console.log(`Hello ${name} , Email : ${email}`);
}

print({ email, name }); //function call korar somoy name ar email er position change korleo problem nai , declaration ar function call duitatei {...} evabe likhle hobe
