import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;

public class CalendarTestTwo {
    public static void main(String[] args)
    {
        Date aDate = null;
        Calendar aCalendar = Calendar.getInstance();
        aCalendar.setTimeInMillis(1450000000000L);
        aDate = aCalendar.getTime();
        System.out.print(new SimpleDateFormat("dd-MMM-yyyy").format(aDate));

        Instant anInstant = Instant.ofEpochMilli(1450000000000L);
        DateTimeFormatter d = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
        System.out.println(" " + LocalDateTime.ofInstant(anInstant, ZoneId.systemDefault()).format(d));

        aCalendar.add(Calendar.DAY_OF_MONTH, 60);
        aDate = aCalendar.getTime();
        System.out.print(new SimpleDateFormat("dd-MMM-yyyy").format(aDate));

        anInstant.plus(60, ChronoUnit.DAYS);
        System.out.println(" " + LocalDateTime.ofInstant(anInstant, ZoneId.systemDefault()).format(d));
    }
}