function camelCase(str, separator) {
  if (separator > str.length) {
    return str;
  }
  let camelCaseStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === separator) {
      camelCaseStr += str[i].toUpperCase();
    } else {
      camelCaseStr += str[i];
    }
  }
  return camelCaseStr;
}

console.log(camelCase("camelcase", 5));
