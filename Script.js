const classOne = document.querySelector('.information-container');
const classTwo = document.querySelector('.user-container');
const classThree = document.querySelector('.cardMessage-container');
const textBox = document.querySelector('.textBox');
const textBox_2 = document.querySelector('.errorMessage');
const userMessage = document.getElementById("userMessage");
const btn = document.querySelector('.btn');
const btn_2 = document.querySelector('.btn-2');
const image = document.querySelector('.message-img')

textBox.addEventListener('keydown', function(e) {
  addHyphen(e);
});

btn.addEventListener("click", function() {
  validateCreditCard();
});

btn_2.addEventListener("click", function() {
  returnHomeScreen();
});

function addHyphen(e){
  if (e.keyCode !== 8) {
    if ((textBox.value.length + 1) % 5 === 0 && textBox.value.length < 19) {
      textBox.value = textBox.value + "-";
    }
  }
}

function removeHyphen(str) {
  return str.replaceAll("-", "");
}

function validateCreditCard(){
  let message = "Your credit card is valid";
  let txtValue = removeHyphen(textBox.value);
  if (validateInput(txtValue))
    if (checkCard(txtValue)) {
      //userMessage.style.color = colorMessage;
      textBox_2.innerHTML = message;
      rightScreen();
    }
  else
    errorScreen();
}

function validateInput(data) {
  //let data = removeHyphen(textBox.value);
  let caracters = data.split("");
  let flag = true;
  let message = "";
  let colorMessage = "";

  if (data === "") {
    flag = false;
    colorMessage = "red";
    message = "Input is empty";
  } else {
    for (let index = 0; index < caracters.length; index++) {
      if (isNaN(caracters[index])) {
        textBox.value = "";
        message = "Input is not a number";
        colorMessage = "red";
        flag = false;
        break;
      }
    }
  }
  userMessage.style.color = colorMessage;
  userMessage.innerHTML = message;
  return flag;
}

function errorScreen() {
  let array;
  let str;
  classOne.style.display = "none"; //change css property
  classTwo.style.display = "none";
  classThree.style.display = "flex";
  array = textBox.value.split("");
  image.setAttribute("src", "./img/red-cross.png");

  for (let index = 0; index < array.length - 4; index++) {
    array.splice(index, 1, '#');
  }

  str = array.join(''); //join array elements in a string
  textBox_2.innerHTML = `Your credit card number: ${str} is invalid, Do you want try it again?`;
}

function rightScreen() {
  classOne.style.display = "none"; //change css property
  classTwo.style.display = "none";
  classThree.style.display = "flex";
  image.setAttribute("src", "./img/check.jpg");
}

function returnHomeScreen() {
  classOne.style.display = "flex";
  classTwo.style.display = "flex";
  classThree.style.display = "none";
  textBox.value = "";
}

function checkCard(creditCard) {
  let splitCreditCard;
  let reversed;
  let multipliedAdded = 0;
  let isCreditCard = false;

  splitCreditCard = splitNumber(creditCard);

  if (splitCreditCard !== "is Not a number") {
    reversed = reverseNumber(splitCreditCard);
    multipliedAdded = multiplyAddSecondDigit(reversed);
  }
  if ((multipliedAdded % 10) === 0)
    isCreditCard = true;
  return isCreditCard;
}

function splitNumber(card) {
  let number = "";

  if (!(isNaN(card)))
    number = Array.from(card);
  else
    number = "is Not a number";
  return number;
}

function reverseNumber(card) {
  let number = [];
  number = card.reverse();
  return number;
}

function multiplyAddSecondDigit(card) {
  let number = [];
  let total = 0;
  number = card;

  for (let index = 0; index < number.length; index++) {
    number[index] = parseToInteger(number[index]);

    if (((index + 1) % 2) === 0)
      number[index] = number[index] * 2;
    number[index] = addSecond(number[index]);
    total += number[index];
  }
  return total;
}

function addSecond(card) {
  let number;
  let total = 0;
  number = parseToString(card).split("");

  for (let index = 0; index < number.length; index++) {
    number[index] = parseToInteger(number[index]);
    total += number[index];
  }
  return total;
}

function parseToInteger(str) {
  return parseInt(str);
}

function parseToString(integer) {
  return integer.toString();
}
