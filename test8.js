var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function () {
        console.log("I'm " + this.name + ", " + this.age + " years old.");
    };
    return Person;
}());
var person = new Person('armorik', 83);
person.sayName();
