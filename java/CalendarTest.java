import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
public class CalendarTest {
public static void main(String args[]) {
   Date aDate = null;
   try {
      aDate = new SimpleDateFormat("yyyy-mm-dd").parse("2012-01-15");
      Calendar aCalendar = Calendar.getInstance();
      aCalendar.setTime(aDate);
      System.out.print(aCalendar.get(aCalendar.DAY_OF_MONTH)+"," +  aCalendar.get(aCalendar.MONTH));
      }
      catch (ParseException ex) {System.out.println(ex);}
   }
}