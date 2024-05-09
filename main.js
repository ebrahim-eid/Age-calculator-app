/// styles
let validData = "Must be a valid data";
let emptyField = "This field is required";
let redBorder = "1px solid hsl(0, 100%, 67%)";
let mainBorder = "1px solid hsl(0, 0%, 86%)";
let mainLabel = "hsl(0, 1%, 44%)";
let redLabel = "hsl(0, 100%, 67%)";


let smallE = document.getElementsByTagName("small");
let inpEle = document.getElementsByTagName("input");
let lableEle = document.getElementsByTagName("label");

//current data
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();

//Calculations
let yearNum = document.getElementById("YY");
let monthNum = document.getElementById("MM");
let dayNum = document.getElementById("DD");
//Valus
let yearValue = document.getElementById("year");
let monthValue = document.getElementById("month");
let dayValue = document.getElementById("day");

window.document.forms[0].onsubmit = function (event) {
  if (yearValue.value != "" && monthValue.value != "" && dayValue.value != "") {
    if (
      yearValue.value < currentYear &&
      yearValue.value > 1850 &&
      monthValue.value <= 12 &&
      monthValue.value >= 1 &&
      dayValue.value <= 31 &&
      dayValue.value >= 1
    ) {
      if (monthValue.value > currentMonth) {
        yearNum.innerHTML = currentYear - yearValue.value - 1;
        monthNum.innerHTML = Math.abs(12 + currentMonth - monthValue.value);
      } else {
        yearNum.innerHTML = currentYear - yearValue.value;
        monthNum.innerHTML = Math.abs(currentMonth - monthValue.value);
      }

      dayNum.innerHTML = Math.abs(currentDay - dayValue.value);

      for (let i = 0; i < 3; i++) {
        smallE[i].innerText = "";
      }
      event.preventDefault();
    }
  }
  ///year field
  if (yearValue.value != "") {
    if (yearValue.value > currentYear || yearValue.value < 1850) {
      smallE[2].innerText = validData;
      inpEle[2].style.border = redBorder;
      lableEle[2].style.color = redLabel;
    } else {
      smallE[2].innerText = "";
      inpEle[2].style.border = mainBorder;
      lableEle[2].style.color = mainLabel;
    }
  } else {
    smallE[2].innerText = emptyField;
    inpEle[2].style.border = redBorder;
    lableEle[2].style.color = redLabel;
  }

  ///Month field

  if (monthValue.value != "") {
    if (monthValue.value > 12 || monthValue.value < 1) {
      smallE[1].innerText = validData;
      inpEle[1].style.border = redBorder;
      lableEle[1].style.color = redLabel;
    } else {
      smallE[1].innerText = "";
      inpEle[1].style.border = mainBorder;
      lableEle[1].style.color = mainLabel;
    }
  } else {
    smallE[1].innerText = emptyField;
    inpEle[1].style.border = redBorder;
    lableEle[1].style.color = redLabel;
  }

  ///Day field
  if (dayValue.value != "") {
    if (dayValue.value > 31 || dayValue.value < 1) {
      smallE[0].innerText = validData;
      inpEle[0].style.border = redBorder;
      lableEle[0].style.color = redLabel;
    } else {
      smallE[0].innerText = "";
      inpEle[0].style.border = mainBorder;
      lableEle[0].style.color = mainLabel;
    }
  } else {
    smallE[0].innerText = emptyField;
    inpEle[0].style.border = redBorder;
    lableEle[0].style.color = redLabel;
  }

  event.preventDefault();
};
