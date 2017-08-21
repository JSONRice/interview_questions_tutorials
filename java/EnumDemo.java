  public class EnumDemo {
    public static void main(String args[]) {
      String report = args[0];
      if (report.equals(Report.EMPRPT.getName()))
        System.out.println("Id: " + Report.EMPRPT.getId() + " Name: " + Report.EMPRPT.getName());
      if (report.equals(Report.EMPRPT))
        System.out.println("Id: " + Report.EMPRPT.getId() + " Name: " + Report.EMPRPT.getName());            
      if (report.equals(Report.MNGRPT.toString()))
        System.out.println("Id: " + Report.MNGRPT.getId() + " Name: " + Report.MNGRPT.getName());          
     if (report.equals(Report.MNGRPT.name()))
       System.out.println("Id: " + Report.MNGRPT.getId() + " Name: " + Report.MNGRPT.getName());
   }
   public enum Report {
     EMPRPT(1, "EMPLOYEE_REPORT"), MNGRPT(2, "MANAGER_REPORT");
     private String name;
     private int id;
     Report(int id, String name) {
       this.setName(name);
       this.id = id;
     }
     public String getName() { return name; }
     public void setName(String name) { this.name = name; }
     public int getId() { return this.id; }
   } 
 }
