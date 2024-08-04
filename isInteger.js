const isNumInteger = (num) => {
  if (num && typeof num === "number") {
    return num % 1 === 0;
  } else {
    return "Is not a number";
  }
};

console.log(isNumInteger(11));
console.log(isNumInteger(11.12));
console.log(isNumInteger("dd"));
console.log(isNumInteger([]));
