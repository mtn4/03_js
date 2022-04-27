Array.prototype.myFilter = function (callBackFunction) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBackFunction(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
Array.prototype.myFind = function (num) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === num) {
      return true;
    }
  }
  return false;
};
Array.prototype.myReduce = function (callBackFunction) {
  prev = this[0];
  for (let i = 1; i < this.length; i++) {
    prev = callBackFunction(prev, this[i]);
  }
  return prev;
};
