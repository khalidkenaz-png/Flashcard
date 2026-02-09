import { Card } from './Card';
import { CardOrganizer } from './CardOrganizer';

export class newRecentMistakesFirstSorter implements CardOrganizer {
    organizeCards(cards: Card[]): Card[] {
        const incorrect: Card[] = [];
        const correct: Card[] = [];

        for (const card of cards) {
            if (card.isCorrect()) {
                correct.push(card);
            } else {
                incorrect.push(card);
            }
        }

        const result: Card[] = [];
        result.push(...incorrect);
        result.push(...correct);

        return result;
    }
}