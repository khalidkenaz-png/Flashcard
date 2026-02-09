export class Card {
    private readonly question: string;
    private readonly answer: string;
    private readonly correct: boolean;

    constructor(question: string, answer: string, correct: boolean) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    getQuestion(): string {
        return this.question;
    }

    getAnswer(): string {
        return this.answer;
    }

    isCorrect(): boolean {
        return this.correct;
    }
}