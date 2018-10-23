import java.util.*;
import java.util.function.*;

class Sorter {
    public static void main(String[] args) {
        Consumer<Namer> printit = e -> System.out.println(e.getFirstName() + " " + e.getLastName());
        List<Namer> names = new ArrayList(Arrays.asList(
                new Namer("Harry","Smith"),new Namer("Joe","Smith"),new Namer("Jane","Doe"),
                new Namer("Mary","Jane"),new Namer("Harry","Homeowner")));

        /**
         * Output:
         * Harry Homeowner
         * Harry Smith
         * Jane Doe
         * Joe Smith
         */
        Comparator<Namer> groupBy = Comparator.comparing(e -> e.getFirstName());
        groupBy = groupBy.thenComparing(e -> e.getLastName());
        names.removeIf(e -> e.getFirstName().equals("Mary"));
        names.sort(groupBy);
        names.forEach(printit);
    }
}