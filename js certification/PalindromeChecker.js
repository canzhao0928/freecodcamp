function palindrome(str) {
  const regex = /[a-z]|\d/g;
  const array = str.toLocaleLowerCase().match(regex);
  const str1 = array.toString();
  const str2 = array.toReversed().toString();
  if (str1 === str2) return true;
  else return false;
}

palindrome("eye");
