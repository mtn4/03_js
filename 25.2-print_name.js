const Obj = {
  name: "Matan",
  printName: function () {
    console.log(`My name is ${this.name}`);
  },
  printTimeout: function (func) {
    setTimeout(function () {
      func();
    }, 1000);
  },
};

Obj.printName();
const func = Obj.printName.bind(Obj);
Obj.printTimeout(func);
