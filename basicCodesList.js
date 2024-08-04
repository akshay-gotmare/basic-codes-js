/* reverse string */

const reverseString = (str) => {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
};

console.log(reverseString("Akshay"));

const reverseString1 = (str) => {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
};

console.log(reverseString1("Akshay"));
console.log(reverseString1("Greetings"));

//------------------------------------------

const palindrome = (str) => {
  let isPalindrome = false;
  const copy = str;
  let reversed = copy.split("").reverse().join("");
  if (reversed.toLowerCase() === str.toLowerCase()) {
    return true;
  }
  return false;
};

console.log(palindrome("Akshay"));

//------------------------------------------

const countChars = (str) => {
  const arr = str.split("");
  const obj = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  return obj;
};

const maxChars = (str) => {
  const obj = countChars(str);
  let maxNo = 0;
  let maxChar = "";
  for (let ch in obj) {
    if (obj[ch] >= maxNo) {
      maxNo = obj[ch];
      maxChar = ch;
    }
  }
  return {
    maxChar,
    maxNo,
  };
};

console.log(maxChars("adjnhfsjsffsfjn"));

//------------------------------------------
const reverseNumber = (num) => {
  if (num < 0)
    return -1 * parseInt(num.toString().split("").reverse().join(""));
  return parseInt(num.toString().split("").reverse().join(""));
};

console.log(reverseNumber(-200));

//------------------------------------------

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);

//------------------------------------------

const chunkedArray = (array, chunkSize) => {
  const chunked = [];
  for (let i of array) {
    // 0 []
    let last = chunked[chunked.length - 1];
    if (!last || last.length === chunkSize) {
      chunked.push([i]);
    } else {
      last.push(i);
    }
  }
  return chunked;
};

console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8], 0));

//------------------------------------------

const allUniqChars = (str) => {
  let flag = true;
  const obj = str.split("").reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  for (let i in obj) {
    if (obj[i] > 1) {
      flag = false;
      return flag;
    }
  }
  return flag;
};
console.log(allUniqChars("aksh"));
console.log(allUniqChars("akshay"));

//------------------------------------------

const replaceWithSpecial = (str) => {
  return str.trim().replaceAll(" ", "%20");
};
console.log(replaceWithSpecial("Mr Akshay Gotmare  "));

const replaceSpace = (str) => {
  let newStr = "";
  for (let i of str.trim()) {
    if (i == " ") {
      newStr += "%20";
    } else {
      newStr += i;
    }
  }
  return newStr;
};

console.log(replaceSpace("Mr Akshay Gotmare  "));

//------------------------------------------

const isPalindromePermutation = (str) => {
  let newStr = "";
  for (let i of str.toLowerCase()) {
    if (i != " ") {
      newStr += i;
    }
  }

  let strObj = newStr.split("").reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  if (newStr.length % 2 == 0) {
    for (let i in strObj) {
      if (strObj[i] % 2 != 0) {
        return false;
      }
    }
  } else {
    let count = 0;
    for (let i in strObj) {
      if (strObj[i] % 2 != 0) {
        count++;
        if (count > 1) {
          return false;
        }
      }
    }
  }
  return true;
  console.log(strObj);
};

console.log(isPalindromePermutation("Pop popiuuo"));

//------------------------------------------

const getObj = (str) => {
  const obj = {};
  for (let i of str) {
    if (obj[i]) obj[i] += 1;
    else obj[i] = 1;
  }
  return obj;
};

const oneAway = (str1, str2) => {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  if (str1 === str2) return false;
  let count = 0;

  const obj1 = getObj(str1);
  const obj2 = getObj(str2);
  for (let i in obj1) {
    if (obj1[i] != obj2[i]) {
      count++;
    } else if (count > 1) return false;
  }
  return true;
};
console.log(oneAway("Hello", "Oleh"));

//------------------------------------------

const isUnique = (obj) => {
  const arr = Object.values(obj);
  const sum = arr.reduce((acc, curr) => (acc += curr));
  if (sum === arr.length) return true;
  return false;
};
const stringCompression = (str) => {
  const obj = getObj(str);
  let newStr = "";
  if (isUnique(obj)) {
    return Object.keys(obj).join("");
  } else {
    for (let i in obj) {
      newStr += i + obj[i];
    }
    return newStr;
  }
};

console.log(stringCompression("aabcd"));
console.log(stringCompression("abcd"));
