function convertToRomanNum(num, arabicNum, romanNum, array) {
  if (num !== 0) {
    for (; num - arabicNum >= 0; ) {
      array.push(romanNum);
      num -= arabicNum;
    }
  }
  return num;
}

function convertToRoman(num) {
  const array = [];
  let remainder = num;
  const objs = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  for (const [key, value] of Object.entries(objs).reverse()) {
    remainder = convertToRomanNum(remainder, key, value, array);
  }
  const str = array.join("");
  console.log(str);
  return str;
}

convertToRoman(4);
