  import java.text.*;
  import java.util.*;
  class DateFormatApp {
      public static void main(String[] args) {
          Calendar calendar = Calendar.getInstance();
          calendar.set(2015,3,4);
              Date date = calendar.getTime();                   
          System.out.println("DateFormat.LONG : " + DateFormat.getDateInstance(DateFormat.LONG).format(date));
          System.out.println("DateFormat.FULL : " + DateFormat.getDateInstance(DateFormat.FULL).format(date));
          System.out.println("DateFormat.SHORT: " + DateFormat.getDateInstance(DateFormat.SHORT).format(date));     
      }
  }
