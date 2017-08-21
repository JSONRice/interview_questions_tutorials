  import java.util.*;
  class CollectionDemo {    
      public static void main(String[] args) {
          String[] a = { "A", "D", "B", "E", "C" };
          List<String> l = Arrays.asList(a);
          Collection<String> c = getCollection(l);
          for (String s : c)
              System.out.print(s);
      }
     static public <E extends CharSequence> Collection<? extends CharSequence> getCollection(Collection<E> c) {
         Collection<E> t = new TreeSet<E>();
         for (E e : c)
             t.add(e);
             return t;
     }
 }
