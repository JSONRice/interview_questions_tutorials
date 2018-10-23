abstract class Shape {
    public abstract void drawShape();
}

class Circle extends Shape {
    public void drawShape() {
        System.out.println("code to draw a circle");
    }
}

class Square extends Shape {
    public void drawShape() {
        System.out.println("code to draw a square");
    }
}