const originalString = "To be or not to be is the question";
const originalStrArray = originalString.split(" ");

const reverseWithInternalFuntion = () => {
  return originalStrArray
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
};

const reverseWithoutInternalFunction = () => {
  let reversed = "";
  let word = "";

  for (let i = 0; i < originalString.length; i++) {
    // last owrd won't be added as the " " will not be detected
    if (originalString[i] == " ") {
      reversed = reversed + word;
      reversed = reversed + " ";
      word = "";
    } else {
      word = originalString[i] + word;
    }
  }
  // Here we add the last word
  reversed += word;
  return reversed;
};
console.log(`With internal function: "${reverseWithInternalFuntion()}"`);
console.log(`Without internal function: "${reverseWithoutInternalFunction()}"`);
