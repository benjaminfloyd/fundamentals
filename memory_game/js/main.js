var cards = ['queen','king','queen','king'];

var cardsInPlay = [cards];
cardsInPlay.push('cardOne');
var cardOne = cards[0];
console.log("User flipped " + cardOne);

var cardsInPlay = [cards];
cardsInPlay.push('cardtwo');
var cardTwo = cards[1];
console.log("User flipped " + cardTwo);


if (cardsInPlay === cards[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again");
}


