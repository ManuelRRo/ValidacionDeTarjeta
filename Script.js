const classOne = document.querySelector('.one');
const classTwo = document.querySelector('.two');
const classThree = document.querySelector('.three');
const textBox = document.querySelector('.textBox');
const textBox_2 = document.querySelector('.errorMessage');
const userMessage = document.getElementById("userMessage");
const btn = document.querySelector('.btn');
const btn_2 = document.querySelector('.btn-2');

btn.addEventListener("click", function () {
    let colorMessage = "green";
    let message = "Yours credit card is valid"
    if (validateInput())
        if (checkCard(textBox.value)) {
            userMessage.style.color = colorMessage;
            userMessage.innerHTML = message;
        }
        else
            errorScreen();
})

btn_2.addEventListener("click", function () {
    returnHomeScreen();
})

function validateInput() {
    let data = textBox.value;
    let caracters = data.split("");
    let flag = true;
    let message = "";
    let colorMessage = "";

    if (data === "") {
        flag = false;
        colorMessage = "red";
        message = "Input is empty";
    }
    else {
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
    classOne.style.display = "none";//change css property
    classTwo.style.display = "none";
    classThree.style.display = "flex";
    array = textBox.value.split("");

    for (let index = 0; index < array.length - 4; index++) {
        array.splice(index, 1, '#');
    }

    str = array.join('');//join array elements in a string
    textBox_2.innerHTML = `Tu tarjeta ${str} No ha sido reconocida ¿Quieres intentarlo de nuevo`;
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
 

