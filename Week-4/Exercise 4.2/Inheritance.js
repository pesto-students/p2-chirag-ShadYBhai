var Person = function () {};
Person.prototype.initiate = function (name, age) {
  this.name = name;
  this.age = age;
};
let Teacher = new Person();

Teacher.teach = function (subject) {
  console.log(`Mr.${this.name} is now teaching ${subject}`);
};
Teacher.initiate("Nick", 22);
Teacher.teach("OOPS");