import java.util.*;
import java.util.function.*;


interface StringMapper<T> {
    String map(T t);
}
class X {
    String s;
    public X(String s) { this.s=s; }
    @Override public String toString() { return s.toLowerCase();}
    public String toLowerCase() { return s.toLowerCase();}
}
class Y<T> {
    T s;
    public Y(T s) { this.s=s; }
    @Override public String toString() { return s.toString();}
}

public class Tester {
//    public static void main (String[]args){
//        Stream.of(new Indices("Mercury"), new Indices("Venus"), new Indices("Earth"))
//                .flatMap(i -> i.indices.stream())
//                .mapToInt(j -> j)
//                .max()
//                .ifPresent(s -> System.out.println(s));


//        boolean b = false;
//        System.out.println((b = true) ? "true" : "false");
//
//
//        Double d = null;
//        System.out.println((d instanceof Double) ? "true" : "false");
//
//        int a = 0;
//        System.out.println((a != 0) ? "true" : "false");
//
//        int c = 0;
//        System.out.println((0 == c++) ? "true" : "false");
//
//        String e = "1";
//        System.out.println(("1" != e) ? "true" : "false");
//


//        Double d = new Double("17.46d");
//        Boolean b = new Boolean("false");
//        Character c = new Character("C");
//        Integer i = Integer.parseUnsignedInt(4);
//        Float f = new Float(23.43);
//    }


    static String mapme(Y y, StringMapper<Y> t) {
        return t.map(y);
    }
    static String mapme(X x, StringMapper<X> t) {
        return t.map(x);
    }
    public static void main(String[] args) {
//        System.out.println(mapme(new X("HELLO"),
//                e -> {if (e.s.charAt(0)=='H') return e.toString();return e.toLowerCase();}));


        List<String> list = java.util.Arrays.asList("dog", "over", "good");

//        System.out.println(list.stream().reduce(new String(),(s1,s2) -> s1 + s2.charAt(0),(c1,c2) -> c1 += c2));
//        System.out.println(list.stream().reduce(new String(), (x1,x2) -> {if (x1.equals("dog"))return x1;return x2;}));
//        list.stream().reduce( (x1,x2) -> x1.length()==3?  x1:x2).ifPresent(System.out::println);
//        list.stream().reduce( (x1,x2) -> x1.length() > x2.length()? x1:x2).ifPresent(System.out::println);
//        System.out.println(list.stream().reduce(new Character(),(Character s1,s2) -> s1 + s2.charAt(0),(c1,c2) -> c1 += c2)));


        Locale locale3 = new Locale("th", "TH");
        Locale locale4 = new Locale.Builder().setLanguage("en").setRegion("GB").build();
        Locale locale5 = Locale.forLanguageTag("zh-CN");

    }
}