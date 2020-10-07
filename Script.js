//import myFunction, {checkCard} from './LuhnAlgorithm.js';
/////////////////////////
const classOne = document.querySelector('.one');
const classTwo = document.querySelector('.two');
const classThree = document.querySelector('.three');
const textBox = document.querySelector('.textBox');
const textBox_2 = document.querySelector('.errorMessage');
const userMessage = document.getElementById("userMessage");
const btn = document.querySelector('.btn');
const btn_2 = document.querySelector('.btn-2');

btn.addEventListener("click",function() {
    let colorMessage = "green";
    let message = "Yours credit card is valid"
    if(validateInput())
        if(checkCard(textBox.value)){
           userMessage.style.color = colorMessage;
           userMessage.innerHTML = message;
        }
        else
            errorScreen();    
})

btn_2.addEventListener("click",function() {
    returnHomeScreen();
})
//return true if numbers digit by user don't have errors otherwise return false.
function validateInput () {
    let data = textBox.value;
    let caracters = data.split("");
    let flag = true;
    let message = "";
    let colorMessage = "";
       //if textBox is empty throw alert
       if(data === ""){
           flag = false;
           colorMessage = "red";
           message = "Input is empty";
       }
       else{//if not check that every char is a number
            for (let index = 0; index < caracters.length; index++) {
                if(isNaN(caracters[index])) {
                    
                    //set TextBox empty
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


function errorScreen () {
 let array;
 let str;
 classOne.style.display = "none";//change css property
 classTwo.style.display = "none";
 classThree.style.display = "flex";
 array = textBox.value.split("");

 for (let index = 0; index < array.length - 4; index++) {
     array.splice(index,1,'#')//splice(array index,change of element to remove,element#,...#,##)
 }

 str = array.join('');//join array elements in a string
 textBox_2.innerHTML = `Tu tarjeta ${str} No ha sido reconocida ¿Quieres intentarlo de nuevo`;
 //use innerHtml to change the text in a tag h#
}

function returnHomeScreen () {
    classOne.style.display = "flex";//change css property
    classTwo.style.display = "flex";
    classThree.style.display = "none";
    textBox.value = "";
}
/////////////////////////////////////////////////////////////////////////////////////////////////

//const cardNum = "3625102593804";//"4137894711755904","3625102593804"
//let str_2 = "split digit";

function checkCard (creditCard) {
    let splitCreditCard;
    let reversed;
    let multipliedAdded = 0;
    let isCreditCard = false;
 
    splitCreditCard = splitNum(creditCard);
 
    if(splitCreditCard !== "is Not a number") {
       reversed = reverseNum(splitCreditCard);
       multipliedAdded = multiplyAddSecondDigit(reversed);
    }
       if((multipliedAdded % 10) === 0)
          isCreditCard = true;
    return isCreditCard;
 }
 //console.log(str_2,checkCard(cardNum));
 
 function splitNum(card) {
     let num = "";
 
     if(!(isNaN(card)))
        num = card.split("");
     else
        num = "is Not a number";
     return num;
 }
 
 function reverseNum(card) {
     let num = [];
     num = card.reverse();
     return num;
 }
 
 function multiplyAddSecondDigit(card) {
    let num = [];
    let total = 0;
    num = card;
    
    for (let index = 0; index < num.length; index++) {
        num[index] = parseToInteger(num[index]);
 
        if(((index + 1) % 2) === 0)
           num[index] = num[index] * 2;
           num[index] = addSecond(num[index]);
           total += num[index];
          // console.log('addSecond: ',num[index]);
    }
     return total;
 }
 
 function addSecond(card){
    let num ;
    let total = 0;
    num = parseToString(card).split("");
 
    for (let index = 0; index < num.length; index++) {
       num[index] = parseToInteger(num[index]);
       total += num[index];
    }
    return total;
  }
 
 function parseToInteger (str) {
     return parseInt(str);
 }
 
 function parseToString (integer) {
    return integer.toString();
 }
 

