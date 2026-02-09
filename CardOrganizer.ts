import { Card } from './Card';

export interface CardOrganizer {
    organizeCards(cards: Card[]): Card[];
}