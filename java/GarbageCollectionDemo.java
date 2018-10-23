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
        MyClass c1 = new MyClass("One");
        MyClass c2 = new MyClass("Two", c1);
        MyClass c3 = new MyClass("Three", c2);
        MyClass c4 = new MyClass("Four", c2);
        c1 = null;
        c2 = null;
        c3 = null;
        c4 = null;
    }
}