//You get an array of numbers, return the sum of all of the positives ones.
//Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(array) {
  return array.reduce(
    (previousNumber, currentNumber) => {
      if (currentNumber > 0) {
        return previousNumber + currentNumber;
      }

      return previousNumber;
    },
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  );
}
