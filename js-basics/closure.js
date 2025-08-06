// NOTE arguments keyword is not captured in closure for outeer function without naming arg1 and arg2
//   "when function is created all scope that avaialble at birthplace are captured and availble inside the function till inner function is in memory"
//  "inner function will capture the scope of middle function and outer function"
function outer(arg1) {
  let var1 = 10;
  let x = 10;
  console.log(arguments);
  function inner(arg2) {
    let var2 = 20;
    console.log(arg1, var1, arg2, var2, x);
    console.log(arguments);
  }
  return inner;
}

let x = outer("param1");
x("param2");

function outerfunction() {
  let a = 10;
  let x = 10;
  return function middlefunction() {
    let b = 10;
    let x = 20;
    return function innerfunction() {
      let x = 30; // variable shaddowing
      console.log(a + b, x);
    };
  };
}

let mf = outerfunction()()();
// variable shaddowing-shadown the outer function varibale and overrirde
// now outer scope variblae cannot be accessed
