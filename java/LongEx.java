public class LongEx{
    public static void main(String args[]){
        Long i = new Long(10);
        long j = 10;
        long k = -5;
        if(i.equals(j))
            System.out.println("i is equal to j");
        else
            System.out.println("i is not equal to j");
        if(Long.compare(i,k)>0)
            System.out.println("i is greater than k");
        else
            System.out.println("i is less than k");
        if(Long.compareUnsigned(i,k)>0)
            System.out.println("i is greater than k");
        else
            System.out.println("i is less than k");
    }
}
