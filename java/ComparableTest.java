public class ComparableTest implements Comparable<ComparableTest> {
   private String value;
   public ComparableTest(String newValue) {
      this.value = newValue;
   }
   public String toString() {
      return value;
   }
   public int compareTo(ComparableTest testObject) {
   //IMPLEMENTATION HERE
   }
}