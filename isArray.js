const myIsArray = (input) => {
  return Object.prototype.toString.call(input) === "[object Array]";
};

console.log(myIsArray([]));
console.log(myIsArray({}));
console.log(myIsArray(""));
console.log(myIsArray(123));
