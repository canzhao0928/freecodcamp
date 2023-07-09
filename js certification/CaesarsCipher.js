function rot13(str) {
  const array = str.split("");
  const newArray = array.map((value) => {
    if (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90) {
      let newValue = value.charCodeAt(0) + 13;
      if (newValue > 90) {
        newValue -= 26;
      }
      value = String.fromCharCode(newValue);
    }
    return value;
  });

  return newArray.join("");
}

rot13("SERR PBQR PNZC");
