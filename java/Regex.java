

public class Regex {
  private String dobYear;
  private String dobMonth;
  private String dobDay;

  public String getDobYear() {return dobYear;}
  public String getDobMonth() {return dobMonth;}  
  public String getDobDay() {return dobDay;}

  public void setDobYear(String dobYear) {
    this.dobYear = dobYear;
  }

  public void setDobMonth(String dobMonth) {
    this.dobMonth = dobMonth;
  }

  public void setDobDay(String dobDay) {
    this.dobDay = dobDay;
  }
  
  public Regex() {}
  
  public void setBirthDay(String bDay) {
    if (bDay != null) {
      String[] date = bDay.split("[^0-9]");
      if (date.length > 0) setDobYear(date[0]);
      if (date.length > 1) setDobMonth(date[1]);
      if (date.length > 2) setDobDay(date[2]);
    }
  }
  
  public static void main(String[] args) {
    Regex bdayRegex = new Regex();
    bdayRegex.setBirthDay(args[0]);
    System.out.println("DOB Year: " + bdayRegex.getDobYear());
    System.out.println("DOB Month: " + bdayRegex.getDobMonth());
    System.out.println("DOB Day: " + bdayRegex.getDobDay());
  }
}
