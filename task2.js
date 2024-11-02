function padString(str, length, symbol, toLeft = false) {
  const lenDif = length - str.length;
  if (lenDif <= 0) return str;
  

  let annex = "";
  for (let i = 0; i < lenDif; i++) {
    annex += symbol;
  }

  let result = "";

  if (toLeft) {
    result = annex + str;
  } else {
    result = str + annex;
  }

  return result;
}

console.log(padString("Ivan", 6, "*"))