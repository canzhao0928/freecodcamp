function telephoneCheck(str) {
  if (
    str.search(/^([0-9]{3}|\([0-9]{3}\))[\s|-]?[0-9]{3}[\s|-]?[0-9]{4}$/) !==
      -1 ||
    str.search(
      /^1[\s|-]?([0-9]{3}|\([0-9]{3}\))[\s|-]?[0-9]{3}[\s|-]?[0-9]{4}$/
    ) !== -1
  )
    return true;
  else {
    return false;
  }
}

telephoneCheck("(555-555-5555");
