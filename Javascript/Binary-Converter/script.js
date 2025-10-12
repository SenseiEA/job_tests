const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
  },
  {
    inputVal: 2,
    addElDelay: 1500,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
  },
];
const decimalToBinary = (input) => {
  // const inputs = [];
  // const quotients = [];
  // const remainders = [];
  // if (input === 0) {
  //   result.innerText = "0";
  //   return;
  // }
  // while (input > 0) {
  //   const quotient = Math.floor(input / 2);
  //   const remainder = input % 2;
  //   inputs.push(input);
  //   quotients.push(quotient);
  //   remainders.push(remainder);
  //   input = quotient;
  //   console.log("Inputs: ", inputs);
  //   console.log("Quotients: ", quotients);
  //   console.log("Remainders: ", remainders);
  //   result.innerText = remainders.reverse().join("");
  // }
  // let binary = "";
  // if (input === 0) {
  //   binary = "0";
  // }
  // while (input > 0) {
  //   binary = (input % 2) + binary;
  //   input = Math.floor(input / 2);
  // }
  // result.innerText = binary;

  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
  result.innerText = "Call Stack Animation";
  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `<p id="${obj.inputVal}" class="animation-frame">decimalToBinary(${obj.inputVal})</p>`;
    }, obj.addElDelay);
    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);
    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
    setTimeout(() => {
      result.textContent = decimalToBinary(5);
    }, 20000);
  });
};

//check the value in the number input element whenever we click the convert button
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }
  result.textContent = decimalToBinary(inputInt);

  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
// keydown checks if user is typing or pasting something
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
