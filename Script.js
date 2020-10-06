const classOne = document.querySelector('.one');
const classTwo = document.querySelector('.two');
const classThree = document.querySelector('.three');
const textBox = document.querySelector('.textBox');
const textBox_2 = document.querySelector('.errorMessage');
const userMessage = document.getElementById("userMessage");
const btn = document.querySelector('.btn');
const btn_2 = document.querySelector('.btn-2');

btn.addEventListener("click",function() {
    if(validateInput())
        if(checkCard())
            alert("Correct number");
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
//LuhnAlgorithm
function checkCard() {
 let cardNum = textBox.value;
 let arrayOne = [];
 let arrayTwo;
 let splitCardNum = cardNum.split("");
 let totalSum = 0;
 let digits = [];
 let arrayThree;
//parse every string to number
for (let index = 0; index < splitCardNum.length; index++) {
    digits[index] = parseInt(splitCardNum[index]);//containing cardNum as a number

    if(index % 2 === 0){
        arrayOne[0] = digits[index] *= 2;//multiply by two every second digit

        if(arrayOne[0] > 9){
            arrayTwo = arrayOne[0].toString().split("");
            arrayTwo[0] = parseInt(arrayTwo[0]);
            arrayTwo[1] = parseInt(arrayTwo[1]);
            digits[index] = arrayTwo[0] + arrayTwo[1];
        }
    }
}

for (let index = 0; index < digits.length; index++){
    digits[index] = parseInt(digits[index]);
    //console.log("valor: " + digits[index] + " posicion: " + index);
    totalSum = totalSum + digits[index];
}

arrayThree = totalSum.toString().split("");

if(arrayThree[1] === '0')
    return true;
else
    return false;
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




