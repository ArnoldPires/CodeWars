function duplicateCount(text) {
  let theText = text.toLowerCase();
  let theStuff = {};
  let numbersForSho = 0;
  for (let index = 0; index < theText.length; index++) {
    if (!theStuff[theText[index]]) {
      theStuff[theText[index]] = 1;
    } else if (theStuff[theText[index]] < 2) {
      theStuff[theText[index]] += 1;
      numbersForSho++;
    }
  }
  return numbersForSho;
}
