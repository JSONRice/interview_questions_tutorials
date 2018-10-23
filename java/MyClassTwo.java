public class MyClassTwo implements Cloneable {
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public String getInfo() {
        System.out.println("MyClassTwo");
        return "MyClassTwo";
    }

    public static void main(String args[]) throws
            ClassNotFoundException, InstantiationException, IllegalAccessException {
//        MyClassTwo myClass = (MyClassTwo) MyClassTwo.class.getClassLoader().loadClass("MyClassTwo").newInstance();

        MyClassTwo myClass = new MyClassTwo();
        myClass.getInfo();
    }
}