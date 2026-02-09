"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("./Card");
const newRecentMistakesFirstSorter_1 = require("./newRecentMistakesFirstSorter");
class Main {
    static main() {
        const cards = [
            new Card_1.Card("What is Java?", "Programming language", true),
            new Card_1.Card("What is polymorphism?", "The same method can behave differently depending on the object that calls this method.", false),
            new Card_1.Card("What is OOP?", "Object-Oriented Programming", true),
            new Card_1.Card("What is encapsulation?", "Data hiding", false),
            new Card_1.Card("What is inheritance?", "one class (the child) takes on the properties and behaviors of another class (the parent).", true),
            new Card_1.Card("What is interface?", "is an abstract type that defines a set of methods a class must implement.", false)
        ];
        console.log("BEFORE ");
        this.printCards(cards);
        const organizer = new newRecentMistakesFirstSorter_1.newRecentMistakesFirstSorter();
        const organized = organizer.organizeCards(cards);
        console.log("\n AFTER (Mistakes First) ");
        this.printCards(organized);
    }
    static printCards(cards) {
        let index = 1;
        for (const card of cards) {
            const status = card.isCorrect() ? "Yes" : "No";
            console.log(index + ". Question: " + card.getQuestion());
            console.log("Answer: " + card.getAnswer());
            console.log("Correct: " + status);
            console.log();
            index++;
        }
    }
}
Main.main();
//# sourceMappingURL=Main.js.map