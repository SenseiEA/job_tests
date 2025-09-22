import { useState } from "react";

const n = 6;
for (let i = 1; i < n; i++) {
  let row = " ";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "X";
  }
  console.log(row);
}

const count = 8;
const rows = [];
const char = "#";

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    char.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

let result = "";
for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

const threes = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

// reduce method - to sum all elements in the array
const sumOfThrees = threes.reduce((acc, curr) => acc + curr, 0);

const minSum = sumOfThrees - threes[threes.length - 1];
const maxSum = sumOfThrees - threes[0];
console.log(`${minSum} ${maxSum}`);
console.log(sumOfThrees);
console.log(threes.length - 1);

// map method - to create a new array with each element multiplied by 2
const doubledThrees = threes.map((num) => num * 2);
console.log(doubledThrees);

// counter how many times the highest integer appears in an array
const integers = [1, 2, 3, 4, 5, 1, 2, 1, 3, 4, 5, 1];

const highest = Math.max(...integers);
const countHighest = integers.filter((num) => num === highest).length;
console.log(countHighest);

//12-hour AM/PM to 24-hour time conversion to military time

const time = "12:05:45AM";
function convertToMilitaryTime(s) {
  const period = s.slice(-2);
  let [hours, minutes, seconds] = s.slice(0, -2).split(":");
  if (period === "AM" && hours === "12") {
    hours = "00";
  } else if (period === "PM" && hours !== "12") {
    hours = String(Number(hours) + 12);
  }
  return `${hours}:${minutes}:${seconds}`;
}
console.log(convertToMilitaryTime(time));

//matrix

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const avg = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  if (studentGrade !== "F") {
    return (
      `Class average: ` +
      avg +
      `. Your grade: ` +
      studentGrade +
      `. You passed the course.`
    );
  } else {
    return (
      `Class average: ` +
      avg +
      `. Your grade: ` +
      studentGrade +
      `. You failed the course.`
    );
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

const [data, setData] = useState(null);

async function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => setData(json));
}

getData();

console.log(data);
