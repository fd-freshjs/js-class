// prototype obj
const funcPrototype = {
  // prototype method
  mymethod() {
    console.log(this);
  },
};

// function constructor
class Func {
  constructor(param1) {
    this.field1 = param1;
  }
}

// bind obj to prototype
Func.prototype = Object.assign(Func.prototype, funcPrototype);

const funcInstance = new Func(123);
// console.log(funcInstance);
// funcInstance.mymethod()




class MyFunc {
  // function constructor
  constructor(param1) {
    this.field1 = param1;
  }

  // prototype method
  mymethod() {
    console.log(this);
  }
}

const classInstance = new MyFunc(123);
console.log(classInstance);
classInstance.mymethod();
