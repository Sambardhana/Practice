// // import java.util.Scanner;

// // public class butterfly {

// //     public static void main(String[] args) {
     

// //         int n = 5;

// //         for (int i = 1; i <= n; i++) {

// //             for (int j = 1; j <= i; j++) {
// //                 System.out.print("* ");
// //             }

// //             int space = 2 * (n - i);
// //             for (int j = 1; j <= space; j++) {
// //                 System.out.print("  ");
// //             }

// //             for (int j = 1; j <= i; j++) {
// //                 System.out.print("* ");
// //             }

// //             System.out.println();
// //         }

       
// //         for (int i = n; i >= 1; i--) {

            
// //             for (int j = 1; j <= i; j++) {
// //                 System.out.print("* ");
// //             }

            
// //             int space = 2 * (n - i);
// //             for (int j = 1; j <= space; j++) {
// //                 System.out.print("  ");
// //             }

          
// //             for (int j = 1; j <= i; j++) {
// //                 System.out.print("* ");
// //             }

// //             System.out.println();
// //         }
// //     }
// // }




// // ----------------------------------------------------------
// // import java.util.*;

// // public class butterfly {
// // public static int CalculateSum(int a , int b) {
// // int sum = a + b ;
// // return sum ;

// // }
// // public static void main (String args[]){
// // Scanner sc = new Scanner(System.in);
// // int a = sc.nextInt();
// // int b = sc.nextInt();
  
// // int sum = CalculateSum(a, b) ;
// // System.out.println(sum);
// // }
// // }




// //---------------------------------------------------------------------------


// // import java.util.*;
// // class butterfly{

// //     public static int  Mul(int a , int b){
// //         int mul = a * b ;
// //         return mul ;
// //     }
// //     public static void main(String[] args) {
// //         Scanner sc = new Scanner(System.in);
// //         int a = sc.nextInt();
// //         int b = sc.nextInt();

// //         int mul = Mul(a, b);
// //         System.out.println(mul);
// //     }
// // }
// //  -------------------------------------------------------


// // import java.util.*;
// // public class butterfly {

// //    public static int Factorial(int n) {
// //     int fact = 1;
// //     for(int i = 1 ; i <= n ; i++){
// //     fact = fact * i;
// //     }
// //     return fact ;
// // }
// //     public static void main(String[] args) {
// //         Scanner sc = new Scanner(System.in);
// //         int n = sc.nextInt();
// //         int fact = Factorial(n) ;
// //         System.out.println( fact );
// //     }
// // }

// // -------------------------------------------------

// import java.util.*;
// class butterfly {

//   public static void main(String[] args) {
//     Scanner sc = new Scanner(System.in);
//     int marks = sc.nextInt();
//     int num[]= new int[marks];

//     //input
//     for(int i =0; i<=marks; i++){
//     num[i]=sc.nextInt();
//     }
    
//     //output
//     for(int i =0; i<=marks; i++){
//     num[i]=sc.nextInt(marks);
//     }
    
//   }
// }
