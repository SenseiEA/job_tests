const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");
const romanNumerals = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];
const romanNumeralConverter = (num) => {
  if (num === 0) {
    return "";
  } else {
    for (const obj of romanNumerals) {
      if (num >= obj.value) {
        return num >= obj.value
          ? obj.symbol + romanNumeralConverter(num - obj.value)
          : obj.symbol;
      }
    }
  }
};
const checkUserInput = () => {
  const intInput = parseInt(numberInput.value);
  if (isNaN(intInput) || !numberInput.value) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (intInput < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (intInput >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = romanNumeralConverter(intInput);

  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
