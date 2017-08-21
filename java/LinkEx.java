
import java.util.*;
public class LinkEx{
     public static void main(String args[]) {
          Set<String> set = new LinkedHashSet<String>();
          set.add("3");
          set.add("1");
          set.add("3");
          set.add("2");
          set.add("3");
          set.add("1");
          for (String str:set) {
               System.out.print(str+"-");
          }
     }
}
