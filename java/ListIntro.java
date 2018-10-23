import java.util.*;

public class ListIntro {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        for (int i = 1; i <= 3; i++)
            list.add(i);
        Spliterator<Integer> split = list.spliterator();
        split.forEachRemaining(z -> System.out.print(z + " "));
    }
}