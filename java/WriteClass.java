import java.io.*;
import java.util.stream.*;
class WriteClass {
    public static void main(String[] args) throws Exception {
        File file = new File("Data.txt");
        FileWriter output = new FileWriter(file);
        output.write(new char[] {'0', '1', '2', '3', '4'});


        PrintWriter p = new PrintWriter(output);
        Stream.of('0','1','2','3','4').forEach(p::write);

        for (int i = 0; i < 5; i++)
            output.write(String.valueOf(i));
        output.flush();
    }
}