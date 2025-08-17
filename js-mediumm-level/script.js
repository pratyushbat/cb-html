function Person(name, age) {
  this.name = name;
  this.age = age;
  this.isAdultS = function () {
    return this.age > 18;
  };
}
Person.prototype.isAdult=function () {
    return this.age > 18;
  };
let p = new Person("ajay", 29);
let p2 = new Person("Shivam", 12);

// console.log('p',p)
// console.log('name',name)
// console.log('age',age)


console.log('---------')
console.log(p.isAdultS())
console.log(p2.isAdultS())
console.log('----p.isAdultS == p2.isAdultS-----')
console.log(p.isAdultS == p2.isAdultS)

console.log('----p.isAdult == p2.isAdult-----')
console.log(p.isAdult == p2.isAdult)

console.log('node  .load filename.js')
console.log('p.__proto__ === Person.prototype',p.__proto__ === Person.prototype)
console.log(' Person.prototype.isPrototypeOf(p)', Person.prototype.isPrototypeOf(p))
console.log(' Person.prototype.isPrototypeOf(p)', Person.prototype.isPrototypeOf(p2))
Person.prototype.city='delhi';
console.log(Person.prototype)
console.log(p.city)
console.log()

// object inhertiance below
let a = { p: 10, q: "akshad", r: false };
let b = Object.create(a);
let c = Object.create(b);
console.log(a);
console.log(b.p);
console.log(b.q);
b.q = "nafadfafdff";
console.log(b);
console.log(c.q);
console.log(c.p);
console.log("b.__proto__", b.__proto__);
console.log("c.__proto__.__proto__", c.__proto__.__proto__);
console.log("b.__proto__== a", b.__proto__ == a);

console.log("c.__proto__ ==b", c.__proto__ == b);
console.log("c.__proto__.__proto__ ==a", c.__proto__.__proto__ == a);

console.log("a.isPrototypeOf(b)", a.isPrototypeOf(b));
b.__proto__.p++;
console.log(a);
console.log("a.isPrototypeOf(c)", a.isPrototypeOf(c));

let x = "adsdas";
console.log(x.__proto__ === String.prototype);
