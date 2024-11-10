let name = "Nahid Parvez";
let email = "nahid@mafi.com";

const Person = {
  name,
  email,

  print() {
    console.log(this.name, this.email);
  },
};

Person.print();
console.dir(Person);
