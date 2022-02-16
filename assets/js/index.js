class MyFunc {
  // instance scope
  constructor(param1) {
    this.field1 = param1;
    this.prop2 = 5;
  }
  // instance scope
  prop = 3;
  method = function () {}
  method2 = () => {}


  // prototype scope
  mymethod() {
    console.log(this);
  }


  // static scope
  static myStaticField = Math.random() * 10;
}

// instance scope
const classInstance = new MyFunc('123');
console.log(classInstance);
classInstance.mymethod();

// prototype scope
const myProt = classInstance.__proto__
const parentProt = MyFunc.prototype

// static scope
console.log(classInstance.myStaticField);
console.log(classInstance.__proto__.constructor.myStaticField);
console.log(MyFunc.myStaticField);
