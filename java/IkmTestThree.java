public class IkmTestThree {
    public IkmTestThree() {
        this(10);
    }
    public IkmTestThree(int data) {
        this.data = data;
    }
    public void display() {
        class Decrementer {
            public void decrement () {
                data--;
            }
        }
        Decrementer d = new Decrementer();
        d.decrement();
        System.out.println("data = " + data);
    }

    private int data;

    public static void main (String [] args) {
        int data = 0;
        IkmTestThree t = new IkmTestThree();
        t.display();
        System.out.println("data = " + data);
    }
}