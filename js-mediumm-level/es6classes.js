class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    // this.isAdultS = function () {
    //   return this.age > 18;
    // };
  }
let p = new Person("ajay", 29);
let p2 = new Person("Shivam", 12);

class Student extends Person{
    constructor(name, age,height){
        super(name,age);
        this.height = height;

    }
}

let s1 = new Student('ron',21,6);