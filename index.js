// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];


  ////  for (let i = 0; i < gifts.length; i++){
    // console.log(`wrapped ${gifts[i]} and added a bow!`);
   //     debugger;
    //}
    //return gifts;

//wrapGifts(gifts);
 
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++){
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message);
    }
    return messages;
}
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 3;
    while (i > 0) {
        console.log(`wrapped ${gifts[i-1]} and added a bow!`);
        i--;
    }
    return gifts;
}
wrapGifts(gifts);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--
    }
}
countDown(10);