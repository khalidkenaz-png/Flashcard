import { Card } from './Card';
import { CardOrganizer } from './CardOrganizer';
import { newRecentMistakesFirstSorter } from './newRecentMistakesFirstSorter';

class Main {
    static main(): void {
        const cards: Card[] = [
            new Card("What is java?", "Programming language", true),
            new Card(
                "What is polymorphism?",
                "The same method can behave differently depending on the object that calls this method.",
                false
            ),
            new Card("What is OOP?", "Object-Oriented Programming", true),
            new Card("What is encapsulation?", "Data hiding", false),
            new Card(
                "What is inheritance?",
                "one class (the child) takes on the properties and behaviors of another class (the parent).",
                true
            ),
            new Card(
                "What is interface?",
                "is an abstract type that defines a set of methods a class must implement.",
                false
            )
        ];

        console.log("Before ");
        this.printCards(cards);

        const organizer: CardOrganizer = new newRecentMistakesFirstSorter();
        const organized: Card[] = organizer.organizeCards(cards);

        console.log("\n After (incorrect answers appear first) ");
        this.printCards(organized);
    }

    static printCards(cards: Card[]): void {
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
