import java.sql.*;
public class SQLDemo {
    public static void main(String args[]){
        try{
            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection connection = null;
            connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:myservice","username","password");
            connection.close();
        } catch(Exception e){e.printStackTrace();}
    }
}