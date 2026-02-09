"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRecentMistakesFirstSorter = void 0;
class newRecentMistakesFirstSorter {
    organizeCards(cards) {
        const incorrect = [];
        const correct = [];
        for (const card of cards) {
            if (card.isCorrect()) {
                correct.push(card);
            }
            else {
                incorrect.push(card);
            }
        }
        const result = [];
        result.push(...incorrect);
        result.push(...correct);
        return result;
    }
}
exports.newRecentMistakesFirstSorter = newRecentMistakesFirstSorter;
//# sourceMappingURL=newRecentMistakesFirstSorter.js.map