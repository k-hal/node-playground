class Person {
    constructor(public name: string, public age: number) {}
  
    sayName() {
      console.log(`I'm ${this.name}, ${this.age} years old.`)
    }
  }
  
  const person = new Person('armorik', 83)
  person.sayName()
  