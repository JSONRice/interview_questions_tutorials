import java.nio.file.*;
import java.io.IOException;

/**
 * Compile and run with Java version 11:
 *
 * javac WriteToFile.java
 * java WriteToFile
 *
 * Expected output:
 * /var/folders/_n/p36dd2xj6xjd4nfc27lnj9d80000gn/T/data11700414906504128493.txt
 * data to be added to file
 */
public class WriteToFile {
  public static void main(String[] args) throws IOException {
    // This line of code writes a temporary file on your drive called data.txt:
    Path pathToTmpFile = Files.createTempFile("data", ".txt");

    // Say we wanted to write to a file in the same directory as this executable Java program (class). The following
    // would enforce that:
    Path.of("./", "data.txt");

    // Write some data to the file located at the temporary file path :
    Path p = Files.writeString(pathToTmpFile, "data to be added to file");

    // Print out the location of the temporary file
    System.out.println(p);

    // Read the data that was previously written to the file:
    String value = Files.readString(p);

    // Print out the data read in from the file:
    System.out.println(value);
  }
}