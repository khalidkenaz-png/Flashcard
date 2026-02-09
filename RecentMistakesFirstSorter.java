
import java.util.ArrayList;

public class RecentMistakesFirstSorter implements CardOrganizer {

    @Override
    public Card[] organizeCards(Card[] cards) {

        ArrayList<Card> incorrect = new ArrayList<>();
        ArrayList<Card> correct = new ArrayList<>();

        for (Card card : cards) {
            if (card.isCorrect()) {
                correct.add(card);
            } else {
                incorrect.add(card);
            }
        }

        ArrayList<Card> result = new ArrayList<>();
        result.addAll(incorrect);
        result.addAll(correct);

        return result.toArray(new Card[0]);
    }
}
