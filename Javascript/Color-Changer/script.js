// const darkColorsArr = [
//   "#2C3E50",
//   "#34495E",
//   "#2C2C2C",
//   "#616A6B",
//   "#4A235A",
//   "#2F4F4F",
//   "#0E4B5A",
//   "#36454F",
//   "#2C3E50",
//   "#800020",
// ];
const hexChars = "0123456789ABCDEF";

function generateRandomHexColor() {
  let hexArray = [];
  let randomHexCode = "";
  let index = 0;

  for (const char of hexChars) {
    hexArray.push(char);
  }

  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * hexArray.length);

    if (Math.floor(Math.random() * 100) < 5 && i % 2 == 0) {
      randomHexCode += hexArray[index].repeat(2);
      i++;
      continue;
    }
    randomHexCode += hexArray[index];
  }
  console.log(Math.floor(Math.random() * 100));
  console.log(randomHexCode);
}
generateRandomHexColor();

// function randomerIndex() {
//   const chars =
//     "AAAAABBBBBCCCCCDDDDDEEEEEFFFFF11111222223333344444555556666677777888889999900000";
//   let result = "";
//   for (let i = 0; i < 6; i++) {
//     const randomColorIndex = Math.floor(Math.random() * chars.length);
//     result += chars[randomColorIndex];
//   }
//   console.log(result);
//   return `#` + result;
// }
// const body = document.querySelector("body");
// const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

// function changeBackgroundColor() {
//   const color = randomerIndex();

//   bgHexCodeSpanElement.innerText = color;
//   body.style.backgroundColor = color;
// }
// const btn = document.querySelector("#btn");
// btn.onclick = changeBackgroundColor;
