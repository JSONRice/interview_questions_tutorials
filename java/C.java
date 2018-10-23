class A {
    A(){
        System.out.println("A");
    }
    class B {
        B(){
            System.out.println("B");
        }
    }
}
class C extends A.B {
    C(A car, float f) {
        car.super();
        System.out.println("C");
    }
    public static void main(String str[]){
        new C(new A(), 5.0f);
    }
}