public class Main {
    public static void main(String[] args) {
        Card[] cards = {
                new Card("What is Java?", "Programming language", true),
                new Card("What is OOP?", "Object-Oriented Programming", true),
                new Card("What is encapsulation?", "Data hiding", false),
                new Card("What is inheritance?",
                        "one class (the child) takes on the properties and behaviors of another class (the parent).",
                        true),
                new Card("What is interface?",
                        "is an abstract type that defines a set of methods a class must implement.", false)
        };
        System.out.println("BEFORE ");
        printCards(cards);
        CardOrganizer organizer = new RecentMistakesFirstSorter();
        Card[] organized = organizer.organizeCards(cards);
        System.out.println("\n AFTER (Mistakes First) ");
        printCards(organized);
    }

    static void printCards(Card[] cards) {
        int index = 1;
        for (Card card : cards) {
            String status = card.isCorrect() ? "Yes" : "No";
            System.out.println(index + ".Question: " + card.getQuestion());
            System.out.println("Answer:" + card.getAnswer());
            System.out.println("Correct:" + status);
            System.out.println();
            index++;
        }
    }
}