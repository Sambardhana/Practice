import java.util.*;
public class Hash {
  public static void main(String[] args) {
    HashMap< Integer, String > h1 = new HashMap<>();
    HashMap< Integer, String > h2 = new HashMap<>();

    h1.put(1, "sam");
    h1.put(2, "suhani");

    h2.put(1, "ram");
    h2.put(2, "smile");

    System.out.println(h1);
    System.out.println(h2);
    
    h1.put(2, "Ram");
    System.out.println(h1);

    h1.remove(1);
    System.out.println(h1);


  }
  
}
