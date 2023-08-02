const zeroToNinetyNine = (input) => {
  const inputStr = input.toString();
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let returnVal = "";

  if (parseInt(inputStr) >= 0 && parseInt(inputStr) <= 9) {
    returnVal = units[parseInt(inputStr)];
  } else if (parseInt(inputStr) >= 10 && parseInt(inputStr) <= 19) {
    returnVal = teens[parseInt(inputStr) % 10];
  } else if (parseInt(inputStr) >= 20 && parseInt(inputStr) <= 99) {
    const prefix = tens[parseInt(inputStr.substr(0, 1)) - 2];
    const suffix = units[parseInt(inputStr) % 10];
    returnVal = prefix + " " + suffix;
  }

  return returnVal.trim();
};

const formatNumbers = (numberStr, position) => {
  if (numberStr !== "") {
    return numberStr + " " + position;
  }
  return "";
};

const numberToWords = (amount) => {
  const amountInNumber = parseInt(amount);
  const tens = amountInNumber % 100;
  const hundreds = (amountInNumber % 1000) - tens;
  const thousands = (amountInNumber % 100000) - (tens + hundreds);
  const lakhs = (amountInNumber % 10000000) - (tens + hundreds + thousands);

  const tensToNumbers = zeroToNinetyNine(tens);
  const hundredsToNumbers = formatNumbers(
    zeroToNinetyNine(hundreds / 100),
    "hundred",
  );
  const thousandsToNumbers = formatNumbers(
    zeroToNinetyNine(thousands / 1000),
    "thousand",
  );
  const lakhsToNumbers = formatNumbers(
    zeroToNinetyNine(lakhs / 100000),
    "lakh",
  );

  const concatenatedVal =
    lakhsToNumbers +
    " " +
    thousandsToNumbers +
    " " +
    hundredsToNumbers +
    " " +
    tensToNumbers;
  return concatenatedVal.trim();
};

export default numberToWords;
