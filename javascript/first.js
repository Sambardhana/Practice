// console.log("hello world");
// console.log("i'm sambardhana");

// let n = 10;
// console.log(n);



// {let n = 10;
// console.log(n);
// }
// {
//   let n = 188;
// console.log(n);
// }

// let x ;


// const student = {
//   fullName: "Sambardhana", 
//   Age: 22 ,
//   marks : 8.2, 
//   Gender: "female"
// };

// student["Age"] = student["Age"]+1;
// student["fullName"]= "Debadarshan";
// console.log(student.fullName);

/*const Product ={
  name : "pen",
  rating: 4.5,
  price: 30
};
*/

// let a = 2;
// let b = 8;
// console.log(a +b );
// console.log(a - b );
// console.log(a / b );
// console.log(a % b );
// console.log(a  * b );
// console.log(a  ** b ); //2^2
// a++ , b++ , ++a 
// console.log(a);
//  a-- 
//  console.log(a);
//assignment operator

// let a = 5 ;
// let b = 4;
// a+= 4;
// console.log(a);
// console.log(a != b);
// let cond1 = a>b ;
// let cond2 = a == b;
// console.log(cond1 && cond2);


// let name = "Sambardhana";
// let age = 20;
// console.log(name);
// console.log(age);


// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log(sum);



// let age = 18 ;
// if(age >= 18){
//   console.log("can vote");
// }
// else if(age = 18){
//   console.log(" can dance");
// }else{
//   console.log("can sleep");
// }



// let mode = "pink-mode" ;
// let color;

// if(mode === "dark-mode"){
//   color = "black";
// }else if(mode === "blue"){
//   color ="white";
// }else {
//   color = "b" ; 
// }
// console.log(color); 



// let age = 28 ;
// let ressult = age >=18 ? "adult" : "not adult" ;
// console.log(ressult);




// let n = 11;
// if (n % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


// let a = 20;
// let b = 15;
// if (a > b) {
//     console.log(a + " is larger");
// } else {
//     console.log(b + " is larger");
// }


// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }



// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log(sum);
// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);


// let name = prompt(" hello ");
// console.log(name);


// let num = prompt (" enter a num");

// if (num % 5 == 0){
//   console.log("divisible by 5");
// }else{
//   console.log("not divisible");
// }


// let score = prompt (" enter your marks");
// if( score  >= 80  && score <= 100){
//   console.log("A");
// }else if( score  >= 70  && score <= 89){
//   console.log("B");
// }else if(score  >= 60  && score <= 69){
//   console.log("C");
// }else if(score  >= 50  && score <= 59){
//   console.log("D");
// }else{
//   console.log("F");
// }


// for(let i = 1; i<=100000; i++){                                                                     //loops
//   console.log("hello");
// }



// let sum = 0 ;
// for(let i =1; i<=5 ;i++){
//   sum =sum + i;
//   console.log(sum);
// }


// for(let i =1; i>=0; i++){                                                                           //infinite loop
// console.log(i);
// }



// let sum = 0;
// let n =500;
// for(let i =1; i<=n; i++){
//   sum = sum + i;
// }
//   console.log(sum);


// for(var i = 1; i<=5 ;i++){  
//   console.log(i);
// }
// console.log(i)


// let i=1;
// while( i <= 10){                                   //while loop
// console.log("hii");
// i++;
// }


// let i =1;
// do{
//   console.log("hii");
//   i++;
// }
// while(i<=10);


// let str = "Sambardhana";                       //for-of loop
// let size = 0;
// for(let i of str){
//   console.log("i=", i);
//   size++;
// }
// console.log("String size = ",size);


// let student ={                                 //for in loop
//   stu_id: 496,
//   Name: "Sambardhana",
//   sec: "ST-B",
//   branch:"CSE",
//   cgpa:9.8
// };
// for (let key in student ){
// console.log( student[key]);
// }



// for(let i= 0; i<=100 ;i++){
//   if(i % 2 != 0){
//     console.log(i);
//   }
// }



// let num = prompt ("enter a num");
// let correct_num = 23;
// if(correct_num != num){
//   num =prompt ("wrong num");
// }else{
// console.log("correct");
// }




//------------------------strings (they are immutable)
// let str =" sambardhana";
// console.log(str.length);
// console.log(str[7]);
 
// let sentence = `special string`;
// console.log (sentence);

// let obj ={
//   item : "pen",
//   price : 100
// }
// console.log(obj.item , obj.price);

// let output = `${obj.item} and ${obj.price} ${1+6}`;
// console.log(output);

// //template literals is a way to embedd expression in strings

// let output2 =  `${1+6}`;
// console.log(output2);

// console.log ("Sambbardhana \n Bishoyi");

// console.log ("Sambbardhana \t Bishoyi");

// let str2 = " Sambardhana";
// let str3 = str2.toLowerCase();
// console.log(str3);
// let str4 = str2.toUpperCase();
// console.log(str4);


// let str = "       Serafg3ebndbui3gdfk";
// console.log(str.trim());

// console.log(str.slice(2 , 17));
// console.log(str.slice(15));
// console.log(str.concat(str2));
// console.log(str + str2 + "hello");
// console.log(str2.replace("b" , "s"));
// console.log(str2.replaceAll("a" , "s"));
// console.log(str2.charAt(4));

let user = prompt("enter their name");
console.log("@" + user + user.length);