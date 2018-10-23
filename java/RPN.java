import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class RPN {
    private static Stack<String> stack = new Stack<String>();
    private static final String ops = "+-*/";

    public static int computedRPN() {
        int computedVal = 0;
        System.out.print("Provide a number or operand sequence in Polish notation: ");
        String line = "";
        Scanner input = new Scanner(System.in);
        while (input.hasNextLine()) {
            String tokens[] = input.nextLine().split(" ", -1);
            for (String token: tokens) {
                if (!ops.contains(token)) {
                    // Must be a number if it's not a token (sure it could be other things):
                    stack.push(token);
                } else {
                    // Grab the first two values for operations as we might need these
                    int a = Integer.valueOf(stack.pop());
                    int b = Integer.valueOf(stack.pop());
                    switch(token) {
                        case "*":
                            stack.push(String.valueOf(b * a));
                            break;
                        case "/":
                            stack.push(String.valueOf(b / a));
                            break;
                        case "-":
                            stack.push(String.valueOf(b - a));
                            break;
                        case "+":
                            stack.push(String.valueOf(b + a));
                            break;
                    }

                }
            }
            break;
        }
        computedVal = Integer.valueOf(stack.pop());
        return computedVal;
    }


    public static void main(String args[] ) throws Exception {
       System.out.println("RPN is: " + RPN.computedRPN());
    }
}
