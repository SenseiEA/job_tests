// const n = 6;
// for (let i = 1; i < n; i++) {
//   let row = " ";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "X";
//   }
//   console.log(row);
// }

// const count = 8;
// const rows = [];
// const char = "#";

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     char.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= count; i++) {
//   rows.push(padRow(i, count));
// }

// let result = "";
// for (const row of rows) {
//   result = result + row + "\n";
// }

// console.log(result);

// const threes = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

// // reduce method - to sum all elements in the array
// const sumOfThrees = threes.reduce((acc, curr) => acc + curr, 0);

// const minSum = sumOfThrees - threes[threes.length - 1];
// const maxSum = sumOfThrees - threes[0];
// console.log(`${minSum} ${maxSum}`);
// console.log(sumOfThrees);
// console.log(threes.length - 1);

// // map method - to create a new array with each element multiplied by 2
// const doubledThrees = threes.map((num) => num * 2);
// console.log(doubledThrees);

// // counter how many times the highest integer appears in an array
// const integers = [1, 2, 3, 4, 5, 1, 2, 1, 3, 4, 5, 1];

// const highest = Math.max(...integers);
// const countHighest = integers.filter((num) => num === highest).length;
// console.log(countHighest);

// //12-hour AM/PM to 24-hour time conversion to military time

// const time = "12:05:45AM";
// function convertToMilitaryTime(s) {
//   const period = s.slice(-2);
//   let [hours, minutes, seconds] = s.slice(0, -2).split(":");
//   if (period === "AM" && hours === "12") {
//     hours = "00";
//   } else if (period === "PM" && hours !== "12") {
//     hours = String(Number(hours) + 12);
//   }
//   return `${hours}:${minutes}:${seconds}`;
// }
// console.log(convertToMilitaryTime(time));

// //matrix

// function getAverage(scores) {
//   let sum = 0;

//   for (const score of scores) {
//     sum += score;
//   }

//   return sum / scores.length;
// }

// function getGrade(score) {
//   if (score === 100) {
//     return "A++";
//   } else if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// function hasPassingGrade(score) {
//   return getGrade(score) !== "F";
// }

// function studentMsg(totalScores, studentScore) {
//   const avg = getAverage(totalScores);
//   const studentGrade = getGrade(studentScore);
//   if (studentGrade !== "F") {
//     return (
//       `Class average: ` +
//       avg +
//       `. Your grade: ` +
//       studentGrade +
//       `. You passed the course.`
//     );
//   } else {
//     return (
//       `Class average: ` +
//       avg +
//       `. Your grade: ` +
//       studentGrade +
//       `. You failed the course.`
//     );
//   }
// }
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// remainingCalories = -350;
// const surplusOrDeficit = remainingCalories > 0 ? "surplus" : "deficit";
// console.log(surplusOrDeficit);

// function randomResult() {
//   const options = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * options.length);
// }

// function greetuser(user, callback) {
//   console.log(`Hello, ${user}!`);
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// function askQuestion() {
//   console.log("How are you today?");
// }

// greetuser("Alice", askQuestion);

// function miniMaxSum(arr) {
//   // const minSum =arr.sort((a, b) => a - b).reduce((s, n) => s + n, 0) - arr[arr.length - 1];
//   // const maxSum = arr.sort((a, b) => a - b).reduce((s, n) => s + n, 0) - arr[0];
//   // console.log(`${minSum} ${maxSum}`);
//   arr.sort((a, b) => a - b);
//   // const sum = arr.reduce((s, n) => s + n, 0);
//   // console.log(`${sum - arr[arr.length - 1]} ${sum - arr[0]}`);
//   const sum = arr
//     .filter((n) => n !== Math.max(...arr))
//     .reduce((s, n) => s + n, 0);
//   console.log(`${sum} ${sum + Math.max(...arr) - Math.min(...arr)}`);
// }

// miniMaxSum([4, 3, 5, 1, 2]);

// const callStack = [
//   'a(): returns "freeCodeCamp " + b()',
//   "b(): returns 'is ' + c()",
//   "c(): returns 'awesome!'",
// ];

// const a = () => {
//   return "freeCodeCamp " + b();
// };

// const b = () => {
//   return "is " + c();
// };

// const c = () => {
//   return "awesome!";
// };

// console.log(a());

//when writing recursive case, remember:
//What is the base case?
//What is the least amount of work you need to do to get closer to the base case?
// since base case is when number is equal to 0, call countdown again while lowering
// the value of number by 1
// inside else block, call countdown again and pass number -1 as an argument

// const countDownAndUp = (number) => {
//   if (number === 0) {
//     console.log("Reached base case");
//     return;
//   } else {
//     console.log(number);
//     countDownAndUp(number - 1);
//     console.log(number);
//   }
// };

// countDownAndUp(5);

// const decimalToBinary = (input) => {
//   if (input === 0) {
//     return "0";
//   } else {
//     console.log("Remainder: ", input % 2);
//     console.log("DecimalToBinary: ", Math.floor(input / 2));
//     return decimalToBinary(Math.floor(input / 2)) + (input % 2);
//   }
// };
// console.log(decimalToBinary(159)); // Output: "0"S

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

console.log(romanNumeralConverter(507));
