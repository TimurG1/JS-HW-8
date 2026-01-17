
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string1 = "";
for (let i = 0; i < friends.length; i++) {
    string1 += friends[i] + ", "
}

let string = friends.join(", ")

const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
];
const cardToRemuve = cards.indexOf("Карточка-3");
const removedCard =  cards.splice(cardToRemuve, 1);

const cardToInsert = "Карточка-6";
const insertCard = cards.push(cardToInsert);

const cardToUpdate = cards.indexOf("Карточка-4");
const cardsUpdated = cards.splice(cardToUpdate, 0,);