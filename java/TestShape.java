public class TestShape {
    public static void main(String[] args) {
        Shape shape;

        shape = (Shape) (new Circle());
        shape.drawShape();


        shape = new Square();
        shape.drawShape();

        Circle circle = new Circle();
        shape = (Shape) circle;
        shape.drawShape();
    }
}