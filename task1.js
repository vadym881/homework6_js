function doubleLetter(str) {
  let resultString = "";
  for (const letter of str) {
    resultString += `${letter}${letter}`;
  }
  return resultString;
}
console.log(doubleLetter("hello"));
