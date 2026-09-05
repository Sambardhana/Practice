public class Recursion {

//   public static void printNew(int n){
//     if(n==0){
//       return;
//     }
//      System.out.println(n);
//      printNew(n-1);
//   }
//   public static void main(String[] args) {
//     int n = 5;
//     printNew(n);
//   }
// }


//   public static void printNew(int n){
//     if(n==5){
//       return;
//     }
//      System.out.println(n);
//      printNew(n+1);
//   }
//   public static void main(String[] args) {
//     int n = 1;
//     printNew(n);
//   }
// }



// public static void printNew(int n, int sum, int i) {

//     if (i == n) {
//         sum += i;
//         System.out.println(sum);
//         return;
//     }

//     sum += i;
//     printNew(n, sum, i + 1);
// }

// public static void main(String[] args) {
//     printNew(5, 0, 1);
// }
// }





// public static int printNew(int n) {
//     if (n == 1 || n == 0) {
//         return 1;
//     }
//     int fact_n = printNew(n - 1);
//     int fact_nn = n * fact_n;
//     return fact_nn;
// }
// public static void main(String[] args) {
//   int n =5 ;
//   int ans  = printNew(n);
//   System.out.println(ans);
// }


// public static void printMain(int a, int b, int n){

//     if (n == 0) {
//         return;
        
//     }
//     int c= a+b;
//     System.out.println(c);
//     printMain(b, c, n-1);
// } 
// public static void main(String[] args) {

//     int a = 0 , b = 1;
//     System.out.println(a);
//     System.out.println(b);
//     int n = 7;
//     printMain(a, b, n-2);
    
// }
// }


// public static int calcPower(int x, int n) {
//    if (n == 0){
//     return 1;
//    }
//    if(x == 0){
//     return 0 ;
//    } 
//    int xCount1 = calcPower(x, n-1);
//    int xCount = x * xCount1 ;
//    return xCount ;

// }public static void main(String[] args) {
//     int x = 2 , n =5 ;
//     int ans = calcPower(x, n);
//     System.out.println(ans);
// }
// }



public static int calcPower(int x, int n) {
   if (n == 0){
    return 1;
   }
   if(x == 0){
    return 0 ;
   } 
   if(x % 2 == 0 ){
    return calcPower(x , x^n);
   }else{
    return calcPower(x,  x^n) * x ;
   }

}public static void main(String[] args) {
    int x = 2 , n =5 ;
    int ans = calcPower(x, n);
    System.out.println(ans);
}
}










