// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(names, event) {
    // Create a new, empty array to hold the messages
    const messages = [];

    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        // Build out the 'thank you' message for each name
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

        // Add the message to the new array
        messages.push(message);
    }

    // Return the new array
    return messages;
}

// Example usage:
const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);
// Output:
// [
//   "Thank you, Alice, for the wonderful birthday gift!",
//   "Thank you, Bob, for the wonderful birthday gift!",
//   "Thank you, Charlie, for the wonderful birthday gift!"
// ]
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--; // Decrement the number
    }
}

// Example usage:
countDown(10);
// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
