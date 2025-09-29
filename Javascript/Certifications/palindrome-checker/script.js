const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDisplay = document.getElementById("result");

const palindromeCheck = (str) => {
  if (!str) return alert("Please input a value");
  let textString = str;
  let cleanString = stringCleaner(textString).toLowerCase();
  console.log(textString);
  console.log(cleanString);
  let rawString = cleanString.split("");
  let reversedString = [];
  let palindromedString = "";
  console.log(rawString);
  for (let i = 0; i < rawString.length; i++) {
    reversedString.unshift(rawString[i]);
    palindromedString = reversedString.join("");
  }
  const isPalindrome = cleanString === palindromedString ? true : false;
  console.log(palindromedString);
  console.log(isPalindrome);
  if (cleanString === palindromedString) {
    resultDisplay.textContent = str + " is a palindrome";
  } else {
    resultDisplay.textContent = str + " is not a palindrome";
  }
};

function stringCleaner(str) {
  const regex = /[^A-Za-z0-9:|]+/g;
  return str.replace(regex, "");
}

checkButton.addEventListener("click", () => {
  const userInput = textInput.value;
  palindromeCheck(userInput);
});
