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

export {checkCard as default};