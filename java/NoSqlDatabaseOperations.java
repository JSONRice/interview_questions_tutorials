import java.sql.ResultSet;
import java.sql.Connection;

interface DatabaseOperations {
    ResultSet getData(String query);
    default void executeProcedure(String procedureName) { System.out.println("do nothing"); }
    Connection getConnection();
}

abstract class NoSqlDatabaseOperations implements DatabaseOperations {
    abstract void updateData(String updateQuery);
    void deleteData(String query){/*code to delete records from database tables */ }
}