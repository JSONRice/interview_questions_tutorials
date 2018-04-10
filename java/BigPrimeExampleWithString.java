import java.math.BigDecimal;



public class BigPrimeExampleWithString
{
  public final static String BELPHEGORS_PRIME_STRING = "1000000000000066600000000000001";
  // Note if you tack on a 1 to the end of the Double type then this w
  // ill yield: 12345678987654320
  // Seems like the type automatically truncates itself rather than overflows.
  public final static String DOUBLE_STRING = "1234567898765432";
  public static Double DOUBLE_REGULAR = 1234567898765432D;
  public static int ITERATE_TO = 100000000;

  public static void main(String[] args)
  {    
    BigDecimal dr  = new BigDecimal(DOUBLE_REGULAR);
    BigDecimal ds  = new BigDecimal(DOUBLE_STRING);
    BigDecimal bps = new BigDecimal(BELPHEGORS_PRIME_STRING);

    for (int i = 0; i < ITERATE_TO; i++)
    {
      if (bps.compareTo(new BigDecimal(DOUBLE_REGULAR.toString())) == 0)
      {
        System.out.println("We have a match against a string!");
      }
      /*
      else if (i == (ITERATE_TO - 1) && (ds.compareTo(new BigDecimal(DOUBLE_REGULAR.toString())) == 0))
      {
	System.out.println("We have a match against a double converted to a string BD!");	
      }
      */
      else if (i == (ITERATE_TO - 1) && (dr.compareTo(new BigDecimal(DOUBLE_STRING))) == 0)
      {
	System.out.println("We have a match against a string BD!");
      }

    }
  }
}
