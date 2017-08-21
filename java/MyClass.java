 public class MyClass {
      String objectId;
      MyClass containedInstance;
      public MyClass(String idValue) {
             objectId = idValue;
      }
      public MyClass(String idValue, MyClass instanceValue) {
           objectId = idValue;
           containedInstance = instanceValue;
     }
     public static void main(String[] args) {
	 Integer number1 = new Integer(1);
	 Integer number2 = number1;
	 number1+=1;
	 System.out.println(number1);
	 System.out.println(number2);	 
     }
}
