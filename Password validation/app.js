// select the tags by ids and class

const input = document.querySelector(".input");
const button = document.querySelector(".button");
const eyeIcon = document.querySelector(".eyeIcon");

const numberIcon = document.querySelector(".numberIcon");
const upperIcon = document.querySelector(".upperIcon");
const lowerIcon = document.querySelector(".lowerIcon");
const symbolIcon = document.querySelector(".symbolIcon");
const lengthIcon = document.querySelector(".lengthIcon");

const lenSpan = document.getElementById("len-span");
const numSpan = document.getElementById("num-span");
const upperSpan = document.getElementById("upper-span");
const lowerSpan = document.getElementById("lower-span");
const symbolSpan = document.getElementById("symbol-span");

//for eye Icon
button.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    eyeIcon.classList.add("fa-eye");
    eyeIcon.classList.remove("fa-eye-slash");
  }
});

//for seeing input fill the terms and conditions

input.addEventListener("keyup", function (e) {
  const data = input.value;
  let number = 0;
  let uppercaseLetter = 0;
  let lowercaseLetter = 0;
  let symbols = 0;

  for (let i = 0; i < data.length; i++) {
    // if uppercase , lowercase , symbol , number and length greater than 8 than function call and display change of list elements
    matchDisplaySetting(data[i], i);

    //check that in input uppercase letter , lowercase letter , symbol , number exist or not
    for (let i = 0; i < data.length; i++) {
      if (1) console.log("hello");
      if (2) console.log("wordl");
      if ((data[i] >= "0") & (data[i] <= "9")) {
        number = 1;
      }

      if ((data[i] >= "a") & (data[i] <= "z")) {
        lowercaseLetter = 1;
      }

      if ((data[i] >= "A") & (data[i] <= "Z")) {
        uppercaseLetter = 1;
      }
      if (
        data[i] === "!" ||
        data[i] === "@" ||
        data[i] === "#" ||
        data[i] === "$"
      ) {
        symbols = 1;
      }
    }
  }

  //if input has nothing then display of list elements
  if (input.value === "") {
    removeUpperDis();
    removeLowerDis();
    removeNumberDis();
    removeSymbolDis();
    removeLenDis();
  }
  //   if length is less than 8  then styling of list element for length remove

  if (data.length < 8) {
    removeLenDis();
  }

  // if input has no number then display of list elements and if input has no uppercase letter then display of list elements
  //if input has no lowercase letter then display of list elements and if input has no symbol then display of list elements

  if (number === 0) {
    //styling of list element for number remove
    removeNumberDis();
  }

  if (uppercaseLetter === 0) {
    //styling of list element for uppercase  letter remove
    removeUpperDis();
  }

  if (lowercaseLetter === 0) {
    //styling of list element for lowercase  letter remove
    removeLowerDis();
  }

  if (symbols === 0) {
    //styling of list element for symbol remove
    removeSymbolDis();
  }
});

//styling of list element for uppercase  letter remove
function removeUpperDis() {
  upperIcon.classList.add("fa-circle");
  upperIcon.classList.remove("fa-check");
  upperIcon.classList.add("text-light");
  upperIcon.classList.remove("iconStyle");
  upperSpan.classList.remove("text-color");
}
//styling of list element for lowercase  letter remove
function removeLowerDis() {
  lowerIcon.classList.add("fa-circle");
  lowerIcon.classList.remove("fa-check");
  lowerIcon.classList.add("text-light");
  lowerIcon.classList.remove("iconStyle");
  lowerSpan.classList.remove("text-color");
}

//styling of list element for number remove
function removeNumberDis() {
  numberIcon.classList.add("fa-circle");
  numberIcon.classList.remove("fa-check");
  numberIcon.classList.add("text-light");
  numberIcon.classList.remove("iconStyle");
  numSpan.classList.remove("text-color");
}

//styling of list element for symbol remove
function removeSymbolDis() {
  symbolIcon.classList.add("fa-circle");
  symbolIcon.classList.remove("fa-check");
  symbolIcon.classList.add("text-light");
  symbolIcon.classList.remove("iconStyle");
  symbolSpan.classList.remove("text-color");
}

//styling of list element for length remove
function removeLenDis() {
  lengthIcon.classList.add("fa-circle");
  lengthIcon.classList.remove("fa-check");
  lengthIcon.classList.add("text-light");
  lengthIcon.classList.remove("iconStyle");
  lenSpan.classList.remove("text-color");
}

function matchDisplaySetting(element, index) {
  if (index === 7) {
    lengthIcon.classList.remove("fa-circle");
    lengthIcon.classList.add("fa-check");
    lengthIcon.classList.remove("text-light");
    lengthIcon.classList.add("iconStyle");
    lenSpan.classList.add("text-color");
  }
  if ((element >= "A") & (element <= "Z")) {
    upperIcon.classList.remove("fa-circle");
    upperIcon.classList.add("fa-check");
    upperIcon.classList.remove("text-light");
    upperIcon.classList.add("iconStyle");
    upperSpan.classList.add("text-color");
  }

  if ((element >= "a") & (element <= "z")) {
    lowerIcon.classList.remove("fa-circle");
    lowerIcon.classList.add("fa-check");
    lowerIcon.classList.remove("text-light");
    lowerIcon.classList.add("iconStyle");
    lowerSpan.classList.add("text-color");
  }

  if ((element >= "0") & (element <= "9")) {
    numberIcon.classList.remove("fa-circle");
    numberIcon.classList.add("fa-check");
    numberIcon.classList.remove("text-light");
    numberIcon.classList.add("iconStyle");
    numSpan.classList.add("text-color");
    console.log("enclose");
  }

  if (element === "!" || element === "@" || element <= "#" || element === "$") {
    symbolIcon.classList.remove("fa-circle");
    symbolIcon.classList.add("fa-check");
    symbolIcon.classList.remove("text-light");
    symbolIcon.classList.add("iconStyle");
    symbolSpan.classList.add("text-color");
  }
}
