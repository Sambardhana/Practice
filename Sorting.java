public class Sorting {
  public static void PrintArray(int arr[]){
    for (int i=0 ; i<arr.length; i++){
      System.out.println(arr[i]);
        }
        System.out.println();
      }

 
      
//     public static void main(String args[]){        //time complexity = x^2
//     int arr[] = {7 ,8 , 3, 1, 2};                  //bubble sort
 
//     for (int i = 0; i<arr.length-1; i++){
//     for (int j = 0; j<arr.length-i-1; j++){

//       if(arr[i]> arr[j+1]){
//         int temp = arr[i];
//         arr[i]   = arr[i+1];
//         arr[i+1] = temp; 
//       }
//     }
//   }
//   PrintArray(arr);
//  } 
// }
 


//   public static void main(String[] args) {          //selection sort
//     int arr[] = {7 ,8 , 3, 1, 2};                   //time complexity - x^2

//     for(int i = 0; i<arr.length-1; i++){
//       int smallest = i;
//       for(int j = i+1 ; j<arr.length; j++){
//         if(arr[smallest] >arr[j]){
//           smallest = j;
//         }
//       }
//       int temp = arr[smallest];
//       arr[smallest]=arr[i];
//       arr[i] = temp;
//     }
//     PrintArray(arr);
//   }
// }

public static void main(String[] args) {         //insertion sort
   int arr[] = {7 ,8 , 3, 1, 2};                 //time-complexity :x^2

   for(int i = 1; i<arr.length;i++){
    int current = arr[i];
    int j = i-1;
    while (j >= 0 && current < arr[j]) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
   }
      PrintArray(arr);

}
}
