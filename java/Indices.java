import java.util.List;
import java.util.LinkedList;
import java.util.stream.Stream;
class Indices {
    public String s;
    public List<Integer> indices;
    public Indices(String s) {
        this.s=s;
        indices= new LinkedList<>();
        for (int i=0;i<this.s.length();++i) {
            indices.add(i);
        }
    }
}