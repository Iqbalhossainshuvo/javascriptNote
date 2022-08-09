
var prise = 11;
// console.log(prise);


// ARRAY AND CONDITIONAL CONCEPT 

// number type variable 
var orenge = 20;

// string type variable 
var myName = "iqbal";

// boolean type variable 
var amIsingle = true;


// variable not define more way 

// 1. single word 
// 2. no gap or speace 
// 3. no quote 
// 4. no keyword 
// 5. can not start with a Number
// 6. can not contain dash 
// 7. should use camelCase
 
// Math Operations : +, -, *, /, %
// Shorthand: +=, -=, ++, --
// integer হল পুণ্য সংখ্যা 
// Float হল দশমিক সংখ্যা 

/*  convert: parseInt = Array কে পুণ্য সংখায় রূপান্তর করা 
             parseFloat = ভগ্নাংশ Array কে ভগ্নাংশ  সংখায় রূপান্তর করা 
 */




// toFixed  দশমিক সংখ্যা ২ বা ৩ ঘর করা 

// reminder ভাগশেষ বের করার জন্য %





// ARRAY 


var friendsName = ['habib', 'iqbal', 'shorif', 'asraful', 'rasel', 'arif', 'deader' ]
var friendsAge = [11, 32, 45, 56, 76, 54, 85 ]

// console.log(friendsAge.length);
// console.log(friendsName.length);
//  get Element by index 
// console.log(friendsName[5]);


//  change array Element by index 
// console.log(friendsName[5]); 
//  var element = friendsName[5];  কোন কিছু change করতে হলে পথমে element লিখতে হবে । তারপর ঐ element এর
//  নাম এবং position সংখ্যা লিখতে হবে, তারপর ঐ position টা লিখে সমান চিহ্ন এর পর যেই জিনিস টা দিয়ে পরিবর্তন করতে চায় সেটা লিখে দিবে।
// friendsName[5]= 'saiful';

// console.log(friendsName);


// indexOf দিয়ে array এর position number বের করা হয় 

// var positionIndex = friendsName.indexOf('iqbal');


// console.log(positionIndex);

// ARRAY এর উপাদান বলা হয় ELEMENT এগুলি  [11, 32, 45, 56, 76, 54, 85 ] ['habib', 'iqbal', 'shorif', 'asraful', 'rasel', 'arif', 'deader' ]
//  আর এগুলোর POSITION কে বলা হয় INDEX [ POSITION 0- থেকে শুরু হয়। এবং যত গুলো ARRAY থাকে তত মাণ পযন্ত নেয়। ]


 
var friendsName = ['habib', 'iqbal', 'shorif', 'asraful', 'rasel', 'arif', 'deader' ]
var friendsAge = [11, 32, 45, 56, 76, 54, 85 ]




// কোন ১ টা array এর শেষে কোন কিছু যোগ করতে চাইলে array এর নাম ডট push তারপর যেটা যোগ করতে চায় সেটা দিবে 

friendsAge.push(34);

/* console.log(friendsAge);
PS C:\javascript> node main.js
[
  11, 32, 45, 56,
  76, 54, 85, 34 
]
PS C:\javascript>  */

// কোন ১ টা array এর থেকে কোন কিছু বের করতে চাইলে array এর নাম ডট pop তারপর যেটা বের করতে চায় সেটা দিবে 


/* friendsAge.pop(34);

console.log(friendsAge);
PS C:\javascript> node main.js
[
  11, 32, 45, 56,
  76, 54, 85
]
PS C:\javascript>  */










// comparison array তুলনা করা

// console.log(5 < 6); ৫ ৬ থেকে ছোট কিনা
// console.log(5 > 6); ৫ ৬ থেকে বড় কিনা
// console.log(5 == 6); ৫ ৬ উভয় টা সমান কিনা 
// console.log(5 === 6); ৫ ৬ উভয় টার type check করা
// console.log(5 != 6); ৫ ৬ আলাদা কিনা / সমান নয় কিনা  
// console.log(5 !== 6); ৫ ৬ এর valu এবং type আলাদা কিনা 
// console.log(5 <= 6); ৫ ৬ থেকে ছোট বা সমান কিনা  
// console.log(5 >= 6); ৫ ৬ থেকে বড় বা সমান কিনা  
// var iphonePrice = 79000; এখানে ১ = মানে variable এর মান টা সেট করা
// Shorthand: +=, -=, ++, --
/*  var iphonePrice += 7; এখানে  += মানে variable ( iphonePrice +=  7 মানে var iphonePrice = 79000+7 =79007 ) এর মান টার 
সাথে ১ এর অদিক নাম্বার যোগ করা  */
// var iphonePrice -= 5; এখানে  -= মানে variable এর মান টার সাথে ১ এর অদিক নাম্বার বিয়োগ করা 
// var iphonePrice ++ 1; এখানে  ++ মানে variable এর মান টার সাথে 1 এটাকে যোগ করা 
// var iphonePrice ++ 1; এখানে  -- মানে variable এর মান টার সাথে 1 এটাকে বিয়োগ করা 


// MULTIPLE CONDITION 
// money1 > money2 && result1 > result2  যে কোন ২ টা সর্ত পূরণ হতে হবে, টাকা ও বড় হতে হবে result ও বড় হতে হবে 
// money1 > money2 ।। result1 > result2  যে কোন ১ টা সর্ত পূরণ হলে হবে, টাকা অথবা result যে কোন ১ টা বড় হতে হবে 





// conditional 
/* 
 var iphonePrice = 79000;
 var myBudget = 9500

if (iphonePrice < myBudget){ এখানে সর্ত টা সত্য হয় নাই তাই output দেখায় নাই। iphonePrice টা আমার টাকা থেকে বেশি তাই আমি iphone কিনতে পারবনা,
    console.log('i will buy iphone');
}

if (iphonePrice < myBudget){
    console.log('buy iphone');
}
else{
    console.log( 'buy another phone');
}
iphonePrice টা যদি আমার Budget এর সাথে মিলে যায় তাহলে output দেখাবে buy iphone. যদি iphonePrice না মিলে তাহলে output দেখাবে buy another phone 

 */


/* MULTIPLE ARRAY 
var iphonePrice = 79000;
var singlePhone = 7900;
if (iphonePrice == true){
    console.log('buy iphone');
}
else{
    console.log( 'buy another phone');
}


if (iphonePrice == true && myBudget < 7900){
    console.log('buy iphone');
}
else{
    console.log( 'buy another phone');
}

if (iphonePrice == true && myBudget < 79000  || singlePhone > 7900){
    console.log('buy iphone');
} */



// MULTI STAGE CINDITION 
var iphonePrice = 79000;
var singlePhone = 25000;
var sunGlass = 5500;
var myBudget = 7900;


/* if (iphonePrice < myBudget){
    console.log('buy iphone');
}
else if (singlePhone < myBudget){
    console.log('buy singlePhone');
}
else if (sunGlass < myBudget){
    console.log('You should buy sunglass');
}
else{
    console.log('buy anything')
} */

// else if দিয়ে অনেক গুলো Array এর মান বের করা যায় । else if এর কাজ হল সব গুলো কে দরে দরে চেক করা এবং যেটা সত্য হবে সেটাকে  output দেখাবে ।
//  যদি কোনটাই সত্য না হয় তাহলে else য়ে এসে output করে দিবে ।



// NESTED CINDITION 
var iphonePrice = 79000;
var singlePhone = 25000;
var sunGlass = 5500;
var myBudget = 7900;

/* if (iphonePrice == myBudget){
    if ( singlePhone == myBudget){
        console.log('  buy phone')
    }
    else{
        console.log(' not posible buy phone')
    }
}
else{
    console.log('buy anything')
} */









// PRACTICE PROBLEM 

// var fruits = [ 'apple', 'Banana', 'Orange' ]

// console.log(fruits.length);
// var positionIndexof = fruits.indexOf('Banana');

// console.log( positionIndexof);

// fruits[1] = 'Mango'
// console.log(fruits);
// fruits.pop('orange');
// console.log(fruits);
// fruits.push('watermelon');
// console.log(fruits);






// // You and your friends Tom, Jane, Peter, and john, got their final exam results. Your total score is 85 , Tom total score is 66 , Jane total score is 95 , Peter total score is 56 , and john total score is 40. The grade chart is 
// //                                         80 or above A grade 
// //                                         60 or above B grade 
// //                                         50 or above C grade 
// //                                         40 or above D grade 
// //                                         39 or less => F grade
// //     write a program to find you and your frinds  grade using if-else 



/* var iqbal = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

var gradeA = 80;
var gradeB = 60;
var gradeC = 50;
var gradeD = 40;
var gradeF = 39;

if (gradeA <= iqbal){
  console.log( 'A grade');
 }
else if (gradeB <= iqbal){
    console.log('B grade');
}
else if ( gradeC <= iqbal){
    console.log('C grade');
}
else if(gradeD <= iqbal){
    console.log( 'C grade');
}
else{
    console.log( 'F grade');
}
 */







// WHILE LOOP // WHILE LOOP // WHILE LOOP // WHILE LOOP // WHILE LOOP // WHILE LOOP =======================================
// LOOP এর VARIABLE এর মাণ কমানো বা বাড়ানো হতে হবে ণা হয় LOOP আজীবণ চলতে থাকবে 

/* var roastGiven = 0; ROAST আনা হয়েছে এখনও দেওয়া হয় নাই ,তাই এটা ০ ,যখন দেওয়া হবে তখন এটা বাড়বে । 
while (roastGiven < 7){   ROAST টা দেওয়া হবে মানুষ যদি ৭ জন বা তার কম থাকে ,এটা হল সর্ত ।
    console.log('roast Dicce, Please !!')  যখন roast দিবে তখন এটা output হবে।
    roastGiven = roastGiven + 1; প্রত্যেক মানুষ কে যে ROAST দিচ্ছি তার সংখ্যা ১ করে বাড়বে যতক্ষণ পজন্ত মানুষ কে ROAST দেওয়া শেষ না হবে
    যখন ROAST দেওয়া শেষ হবে তখন কয়টা ROAST দেওয়া হয়েচে তা দেখতে পাব। 
    আর যেহেতু WHILE এর মাজে সংখ্যা ৭ দেওয়া আছে তাহলে ROAST দেওয়া ৭ পজন্ত গিয়ে থেমে যাবে।
    আর ROAST কয়টা দেওয়া হয়েছে তা গণনা করা হয় এই ৩ টার যে কোন ১ টা দিয়ে 
   1=> roastGiven(এটা হল ROAST এর টোটাল সংখ্যা) = roastGiven(এটা হল ROAST দেওয়া এর টোটাল সংখ্যা) + 1 (এটা হল ROAST দেওয়া এর টোটাল সংখ্যার
     সাথে ১ যোগ করে ১ টা করে বাড়বে, এভাবে ১ করে বাড়তে থাকবে যতক্ষণ ROAST দিতে থাকবে।); 
   2=> roastGiven += 1 ;
   3=> roastGiven++;

} */

// loop এর ক্ষেত্রে এই ৪ টা কাজ করতে হবে

// loop variable 
// loop সর্ত দিতে হবে 
// loop body
// loop বাড়ানো বা কমানো 

/* var roast = 0;
while(roast < 7){
    console.log('roast decci');
    roast++;
} */


// event মানে জোড় সংখ্যা 
// 1 to 20 all event numbers 

/* var number = 0;
while(number <= 20){
    console.log(number);
    number = number + 2; 
} */

// FOR LOOP এর শট VERSION 

/* for(var i = 0; i <= 20 ; i+=2 ){ 
    console.log(i);
} */

// odd মানে বেজোড় সংখ্যা 
// 1 to 20 all odd numbers 

/* var number = 1;
while(number <= 20){
    console.log(number);
    number = number + 2; 
} */

// FOR LOOP এর শট VERSION 

/* for(var i = 1; i <= 20 ; i+=2 ){
    console.log(i);
} */


// FOR LOOP ===========================================================================
// FOOR LOOP সেম while LOOP এর মত
// FOOR LOOP য়ে WHILE LOOP এর সব গুলো একসাথে লিখা হয় এই টুকিই

/* var roastGiven = 0;
while(roastGiven < 7){
    console.log('roast decci');
    roastGiven++;
}

for(var roastGiven = 0; roastGiven < 7 ; roastGiven++){
    console.log('roast decci');
} */

// FOR LOOP এর শট VERSION 

/* for(var i = 0; i < 7 ; i++ ){
    console.log(i);
} */

// FOR LOOP টাকে PROGRAMMAR রা ছোট করে লেখার জন্য roastGiven এই টার পরিবর্তে i ব্যবহার করে । 
// যত জায়গায় (roastGiven এটা variable এর নাম ) আছে, তত জায়গায় i বসবে।
// এটাই হল FOR LOOP এর শট VERSION  

/* var number = 0;
while(number <= 20){
    console.log(number);
    number = number + 2; 
}

for(var number = 0; number <= 20; number = number + 2 ){ // var number += 2; এখানে  += মানে variable এর মান টার সাথে ২  যোগ করা 
    console.log(number);
} */

// FOR LOOP এর শট VERSION 

/* for(var i = 0; i <= 20 ; i++ ){ এখানে i দারা মূলত indexOf কে বুজানো হয়েছে।
    console.log(i);
} */


// terget: display every element of an array 
// var numbers = [45, 87, 89, 56, 32, 51, 25];

/* for(var i = 0; i <= 7; i++ ){
    console.log(i); এখানে সুধু উপরের array এর indexOf number টা বের হয়েছে , নিচের OUTPUT য়ে দেখতে পাচ্ছি। যদি আমরা indexOf number গুলো 
    না দেখে ঐ array গুলো কে দেখতে চাই,তাহলে আমরা ঐ loop এর ভিতেরে আরেক টা variable নিব, 
    এবং তার মাজে আমরা indexOf এর numbers গুলো কে বের করব, তারপর ঐ variable এর নাম টাকে console.log() এর মাজে বসিয়ে দিব।

}

OUTPUT indexOf numbers
PS C:\javascript> node main.js
0
1
2
3
4
5
6
7
PS C:\javascript> */

/* 
var numbers = [45, 87, 89, 56, 32, 51, 25];

for(var i = 0; i < 7; i++){
    var number = numbers[i]; নতুন variable indexOf এর মান বের করার জন্য ,
     indexOf number এর মান গুলো দরে দরে ঐ number variable টা array এর সংখ্যা গুলো কে OUTPUT দেখাবে।
    console.log(number); 
}

OUTPUT Array numbers
PS C:\javascript> node main.js
45
87
89
56
32
51
25
PS C:\javascript> */


/* এতক্ষণ আমরা শর্ত দিয়ে arrray থেকে নির্দিষ্ট সংখ্যা বের করেছি, যদি আমরা array থেকে সব গুলো items কে বের করতে চাই ,
 তাহলে array এর length বের করতে হবে , আর এটা করার জন্য ঐ শর্তের ভিতরেই array এর নাম ডট length(array.length) বসিয়ে দিব। */

/* var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 200,450];


for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}


OUTPUT all  Array numbers
PS C:\javascript> node main.js
45
87
89
56
32
51
25
188
200
450
PS C:\javascript> */



// BREAK  OR CONTINUE =====================================================================

// for loop টার মাজে যদি কোন break দিতে চাই তাহলে for loop এর ভিতরে কোন ১টা শর্ত দিয়ে break টাকে বসিয়ে দিব

/*  var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 200,450];


for(var i = 0; i <= 20; i++){
    console.log(i);
    if(i > 7){ যখন i এর মান ৭ এর বড় হবে তখন loop  টা break করবে (এটা হল শর্ত), আর যদি break এর জায়গায় continue ব্যবহার 
        করি তাহলে শর্ত সত্য হলে loop টা আবার ২য় rounde য়ে চলে যাবে। আর যেটা সত্য হবে না সেটা output দেখাবে।
        break;
    }
}

// break point output 
PS C:\javascript> node main.js
0
1
2
3
4
5
6
7
8
PS C:\javascript>  */

/* 
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 200,450];

for(var i = 0; i < numbers.length; i++ ){
    var number = numbers[i];
    if(number > 50 ){ যেই Number গুলো ৫০ এর বড় নয় সেগুলো output দেখাও , যদি ৫০ এর বড় হয় তাহলে continue করতে।
        continue;
    }
    console.log(number);
}

// CONTINUE OUTPUT
PS C:\javascript> node main.js
45
32
25
PS C:\javascript>  */


// REVERSE WAY মানে উল্টা করা

/* var num = 10;
while(num >= 1){ ১০ যখন ১ এর সমান বা বড় হবে 
    console.log(num);
    num--; ১০ থেকে ১ করে কমে যাবে
}


REVERS WAY OUTPUT
PS C:\javascript> node main.js
10
9
8
7
6
5
4
3
2
1
PS C:\javascript> */





// PRACTICE ================================== PRACTICE ======================== PRACTICE ===========================

/* Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to 
help Harry calculate how much money the shopkeeper will return. */

// var moneyGiven = 1000;
// var orange = 400;
// var apple = 300;

// var totalPrice = orange + apple;
// console.log(totalPrice);

// OUTPUT TOTAL expens
/* PS C:\javascript> node main.js
700
PS C:\javascript>  */

/* var remain = moneyGiven - totalPrice;
console.log(remain);

 */

// PRACTICE 2

/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and 
Bangla of a student. 75.25, 65, 80, 35.45, 99.50
 */


// var Mathematics = 75.25;
// var Biology = 65;
// var Chemistry = 80; 
// var Physics = 35.45;
// var Bangla = 99.50;

// var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
// console.log(totalMarks);
// var average = totalMarks /5; 
// console.log(average);
// var averageTwoDeciml = average.toFixed(2);
// console.log(averageTwoDeciml);


// OUTPUT totalMarks
/* PS C:\javascript> node main.js
355.2
PS C:\javascript> 
 */
// OUTPUT average
/* PS C:\javascript> node main.js
71.03999999999999
PS C:\javascript>  */

// OUTPUT TWO FIX DECIML 
/* PS C:\javascript> node main.js
71.04
PS C:\javascript>  */


// PRACTICE 3
/* Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the 
remainder would be if she divided the number by 5. Help Sarah write the program. এখানে REMAINDER হল ভাগ শেষ। */


// var number = 199;
// var remainder = number % 5;
// console.log(remainder);

/* OUTPUT remainder

PS C:\javascript> node main.js
4
PS C:\javascript> 
 */

// Practice Problem 4
/* 
You are given an array:
                var fruits = ['Apple', 'Banana', 'Orange'];

        a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
        b) Remove ‘Orange’ and add ‘Watermelon’.

 */

        // Find the index of ‘Banana’

// var fruits = ['Apple', 'Banana', 'Orange' ]
// var bananaIndex = fruits.indexOf('Banana');
// console.log(bananaIndex);

// OUTPUT INDEX OF BANANA 
/* PS C:\javascript> node main.js
1
PS C:\javascript>  */


// replace ‘Banana’ with ‘Mango’

// var fruits = ['Apple', 'Banana', 'Orange' ]
// fruits[1] = 'Mango'
// console.log(fruits);


// OUTPUT REPLACE 'BANANA' WITH 'MANGO'

/* PS C:\javascript> node main.js
[ 'Apple', 'Mango', 'Orange' ]
PS C:\javascript>  */


// Remove ‘Orange’ 

// var fruits = ['Apple', 'Banana', 'Orange' ]
// fruits.pop();
// console.log(fruits);

// UOTPUT REMOVE ORANGE 

/* PS C:\javascript> node main.js
[ 'Apple', 'Banana' ]
PS C:\javascript> 
 */

// and add ‘Watermelon’ 

var fruits = ['Apple', 'Banana', 'Orange' ]

fruits.push('watermelon');
// console.log(fruits); 

// OUTPUT ADD WATERMELON 
/* PS C:\javascript> node main.js
[ 'Apple', 'Banana', 'Orange', 'watermelon' ]
PS C:\javascript>  */


                        // Practice Problem 2


/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total 
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is 
                            80 or above A grade
                            60 or above B grade
                            50 or above C grade
                            40 or above D grade
                            39 or less => F grade
Write a program to find your and your friends’ grades using if-else. */

/* var iqbal = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

var gradeA = 80;
var gradeB = 60;
var gradeC = 50;
var gradeD = 40;
var gradeF = 39;

if (gradeA <= iqbal){
  console.log( 'A grade');
 }
else if (gradeB <= iqbal){
    console.log('B grade');
}
else if ( gradeC <= iqbal){
    console.log('C grade');
}
else if(gradeD <= iqbal){
    console.log( 'C grade');
}
else{
    console.log( 'F grade');
}
 */



                            // Practice Problem 3

/* 1. You are given three numbers 13, 79, and 45. Write a program that will print the 
largest number using if-else.

2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */



/* 
1. You are given three numbers 13, 79, and 45. Write a program that will print the 
largest number using if-else. */


// var num1 = 13;
// var num2 = 79;
// var num3 = 45;

/* if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
} */

/* OUTPUT LARGEST NUMBER 
PS C:\javascript> node main.js
79
PS C:\javascript>  */


/* 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */

// var side1 = 9;
// var side2 = 8;
// var side3 = 9;
/* 
if( side1 == side2 || side1 == side3 || side2 == side3 ){
    console.log('isosceles')
} */


/* বেসিক জাভাস্ক্রিপ্ট (ভেরিয়েবল, এরে, কন্ডিশন, লুপ) এর চেকলিস্ট। 
ভালো করে মনোযোগ দিয়ে একটার পর একটা চেকলিস্ট ধরে ধরে চেক করবে। একটাও বাদ দিবে। বাদ দিলেই তোমার আব্বার কাছে বিচার দিবো। 
১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
৩. ভেরিয়েবল কি জিনিস?
৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 
৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 
--------------
১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
১৬. কোন একটা উপাদানের index এর মান  -১ বলতে কি বুঝায় 
১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)
২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি:  >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
২৪. তোমার কাছে:  ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
---------------------
২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট  হিসেবে দেখাও। 
২৬. while লুপ কিভাবে কাজ করে 
২৭. for লুপ কিভাবে কাজ করে 
২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
৩২.while আর for loop এর মধ্যে পার্থক্য কি 
৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
 */






// কোন নাম্বার কে String য়ে convert করা যায় toString এর মাধ্মে 
/* 
var x = 180;
var y = x.toString(); 
console.log(y);

// String কে নাম্বারে convert করা 

var a = '10.80';
var c =  parseInt(a);
console.log(c)

// String কে ভগ্নাংশে convert করা
var a = '10.80';
var d = parseFloat(a);
console.log(d);
 */

/* // OUTPUT ARRAY INTEGER FLOAT 
PS C:\javascript> node main.js
180
10
10.8
PS C:\javascript>  */

/* random সংখ্যা বের করা যায় Math.random() দিয়ে ,এটা পথমে float number য়ে থাকে (০.১৫৬৪৯৮৫৬৪৮৭৯৪) এমন , 
এবার ০.১৫৬৪৯৮ এটা থেকে যদি ১৫.৬৪৮৫৬ এমন করতে চাই তাহলে Math.random()
কে যে কোন সংখ্যা দিয়ে গুন করতে হবে, তারপর সংখ্যা টা ১৫.৬৪৮৫৬ এমন আসবে , 
এই সংখ্যা টাকে এবার পুণ্য সংখায় আনার জন্য Math.round(এখানে Math.random() এর variable টা বসিয়ে দিব) , তাহলে এমন আসবে ১৫ ।

Math.random() কে যদি ৪ সংখ্যা ওয়ালা সংখ্যা দিয়ে গুন করি তাহলে Random সংখাটা ৩ সংখার আসবে। */

// var number = Math.random() * 100000;
// var result = Math.round(number);

// console.log(result);



// FUNCTION =============================================================================

// function হল কয়েক লাইনের ১ টা কোডের সমষ্টি , যা নির্দিষ্ট ১ টা কাজ সম্পাদন করে 

/* function functionName (parameters, একাদিক parameters লিখতে হলে কমা দিতে হবে){
    function body
    return
}
 functionName(parameters valu); এটাকে চাইলে ১ টা variable য়ে রাখতে পারি ।
 var returnedValu = functionName(parameters valu); এভাবে   */


// function এর নামের পর Parentheses () ব্যবহার করতে হবে{এবং এটার বিতরে variable এর মত কিছু লিখতে হবে 
// এরপর এটাকে কল করার সময় কোন ১ টা মান দিতে হবে } এর পর curly brackets {} ব্যাবহার করতে হবে , এবং {} এটার ভিতরে কোড লিখতে হবে 
/* 
function buySigngara(taka variable এর মত কিছু লিখলাম ){
    console.log('mama singara den')
    console.log(taka কল করলাম );
}
 কল করলাম => buySigngara(20 ১ টা মান দিলাম );
console.log('now signgara') */




/* কোন function কে যেখান থেকে কল করা হবে সেটার বাম পাশে কোন variable থাকলে ঐ function এর return এরপর যা লেখা থাকবে
 সেটার মান টা ঐ variable  মান হয়ে যাবে 


function add(num1 , num2){
    console.log(num1, num2);
    var sum = num1 + num2 ;
    console.log(sum);
    return sum;
}
 add(10 , 15); এটাকে var এর মাজে লিখতে পারি 

 var (return এর মান 25 মান টা total variable টার মান হয়ে যাবে ) total = কল করলাম => add(10, 15 মান দিলাম )
 */
/* function buySigngara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150
var singaras = buySigngara(myTaka);
console.log('Eating singara: ' , singaras);
 */

/* function getAverage (assignment1 ,assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks,assignment2Marks, assignment3Marks);
console.log('my average number:', myAverage);

 */




// OBJECT ====================================================

/* Object এর Name দিতে হবে
তারপর { } এই টা দিতে হবে 
এইটার ভিতরে poperty  নাম দিয়ে তার valu দিতে হবে 
object এর মাজে প্রত্যেকটা key/property:value জোড়া কে কমা দিয়ে আলাদা করা হয় 
*/

//  Object হল অনেক গুলো variable এর সমষ্টি বা যে কোন কিছুর অনেক গুলো বৈশিষ্ট্য 

// var mobile = {
//     brand : 'iPhone',
//     price : 79000,
//     storage : '64gb',
//     camera : '50MP'
// }

// var myComputer = {
//     brand : 'Hp',
//     price : 85000,
//     color : 'silver',
//     processor : 'i5'

// }

// console.log(myComputer , mobile);
//  আর নির্দিষ্ট কোন property বের করতে হলে object এর Name ডট ঐ property এর নাম 
// console.log(myComputer.price);
// console.log(mobile.price);
// আবার কোন কিছু change করতে চাইলে Object এর Name ডট propert এর নাম সমান যা change করতে চায় তা লিখবে ।
 
// myComputer.color = 'green';

// Object এর কোন ১ টা property এর নাম পেতে চাই তাহলে এটা পাওয়ার জন্য ৩ ভাবে করতে পারি, আবার এই  ৩ বাবে property এর নাম change করতে পারি।

// var findePropertyname = myComputer.brand;
// var findePropertyname = myComputerp['brand'];
//  var propertyNmae = 'color'
//  var propertyValue = myComputer[propertyNmae];

//  console.log(propertyNmae, propertyValue);
// console.log(findePropertyname);

// Object এর সব গুলো property/ value কে পাইতে চাইলে Object এর Name ডট keys (তার পর এটার ভিতরে ঐ Object এর নাম দিতে হবে ,জার সব গুলো value পাইতে চায়)

// var properties = Object.keys(myComputer); আর keys দারা Object এর properties গুলো দিবে 
// const keys = Object.keys(myComputer);
// console.log(properties);
/* PS C:\javascript> node main.js
[ 'brand', 'price', 'color', 'processor' ]
PS C:\javascript> */ 

// var propertiesValue = Object.values(myComputer); values এর দারা Object এর value গুলো দিবে
// const values = Object.values(myComputer);
/* console.log(propertiesValue);

PS C:\javascript> node main.js
[ 'Hp', 85000, 'green', 'i5' ]
PS C:\javascript>  */


// property আর value ২ টা একসাথে পেতে চাইলে loop চালাইতে পারি

// var myComputer = {
//     brand : 'Hp',
//     price : 85000,
//     color : 'silver',
//     processor : 'i5'
// }

// for (var i = 0; i < keys.length; i++ ){
//     // console.log(keys[i]);
// }

/* OUTPUT 
PS C:\javascript> node main.js
brand
price
color
processor
PS C:\javascript>  */

// এখানে Loop ২ ভাবে করলাম

/* for (var i = 0; i < keys.length; i++){
    var propertyNmae = keys[i]; INDEX গুলো কে বের করেছি 
    var propertyValue = myComputer Objectএর নাম [propertyNmae INDEX এর নাম ];
    console.log(propertyNmae, propertyValue); ঊভয়টার KEY AND VALUE কে একসাথ করেছি console এর মাদ্দমে ।
}
 */

/* for (var propertyNmae in myComputer){
    const value = myComputer[propertyNmae];
    console.log(propertyNmae, value);
}
 */
// OUTPUT PROPERTY AND VALUE 

/* PS C:\javascript> node main.js
brand Hp
price 85000       
color silver      
processor i5      
PS C:\javascript> 
 */


// Object থেকে array convert করার জন্য এই ভাবে লিখতে পারি  const arr = Object.entries(myComputer);

// how to convert object to array in javascript
// Object.entries()
// const credits = { producer: 'John', director: 'Jane', assistant: 'Peter' };
/* const arr = Object.entries(credits);
console.log(arr); */

/** Output:
[ [ 'producer', 'John' ],
  [ 'director', 'Jane' ],
  [ 'assistant', 'Peter' ]
]
**/


/* const arr = Object.entries(myComputer);
console.log(arr);
 */

// Output:
/* PS C:\javascript> node main.js
[
  [ 'brand', 'Hp' ],
  [ 'price', 85000 ],
  [ 'color', 'silver' ],
  [ 'processor', 'i5' ]
]
PS C:\javascript>  */


const color = 'yellow'

/* if(color === 'green'){
    console.log('its green');
}
else if (color === 'blue'){
    console.log('its blue');
}
else if (color === 'red'){
    console.log('its red');
}
else if (color === 'white'){
    console.log('its white');
}
else if (color === 'yellow'){
    console.log('its yellow');
}
else{
    console.log('Nothing found')
} */

// if else এই কাজ টা switch দিয়েও করা যায় । if Debug করার সময় ১ টা ১ টা করে খোঁজ করে বের করে , আর switch একবারেই ঐ টাকে বের করে পেলে 

//  switch
/* switch(color){
    case 'green':
        console.log('its green');
        break;
    case 'blue':
        console.log('its blue');
        break;
    case 'white':
        console.log('its white');
        break;
    case 'red':
        console.log('its red');
        break;
    case 'yellow':
        console.log('its yellow');
        break;
    default:
        console.log('Nothing found');
}

 */



// TRY SOME MATH ===============================================================================

// INCH TO FEET = INCH TO FEET = INCH TO FEET = INCH TO FEET = INCH TO FEET = INCH TO FEET = 

/* const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet); */

// TRY TO WITH FUNCTION 

// inche থেকে feet বের করতে হলে , inche কে feet দিয়ে ভাগ করতে হবে। আমরা জানি ১২ ইঞ্চি ১ ফুট। তাই ১২ দিয়ে inche কে ভাগ করলে সেটা ফুটে convert হয়ে যাবে।

/* function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
} */

/* const dadaInches = 144 ;
const dadaFeet = inchToFeet(dadaInches); */
// console.log(dadaFeet);


/* function mileToKilometer(miles){
    const kilometers = miles*1.609;
    return kilometers;
} */

/* const Tokilometers = 1200;
const totalKilometers = mileToKilometer(Tokilometers); */
// console.log(totalKilometers);



// EVEN (জোড়) OR ODD বিজোড়

// কোন সংখ্যা কে ২ দিয়ে ভাগ দিলে  যদি ভাগ শেষ ০ হয় তাহলে ঐ সংখ্যা টা জোড় সংখ্যা ,আর যদি ভাগ শেষ ০ না হয় তাহলে ঐ সংখ্যা টা বেজোড় ।
//  জোড় হলে return করবে true আর বেজোড় হলে return করবে false. নিছে তাই দেখানো হয়েছে।


// এখানে আমি ভাগ ফল বের করেছি 
/* console.log(4/2);
console.log(83/2);
console.log(145/2);
console.log(41287/2); */

/* ভাগ ফল 
PS C:\javascript> node main.js
2
41.5
72.5
20643.5
PS C:\javascript>  */

// এভার ওগুলোর ভাগ শেষ বের করব 
/* console.log(4%2);
console.log(83%2);
console.log(145%2);
console.log(41287%2); */


/* এগুলো হল ভাগ শেষ 
PS C:\javascript> node main.js
0
1
1
1
PS C:\javascript> */


/* function isEven(number){
    const remainder = number%2;
    return remainder;
} */

/* const evenNumber = 180;
const totalEven = isEven(evenNumber); */
// console.log(totalEven);

// একই function দিয়ে true এবং false উভয় মান বের করেছি 

/* function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{ 
        return false;
    }
}

const evEnNumber = 180;
const evenNumber2 = 185;
const toTalEven = isEven(evEnNumber);
const totalEven2 = isEven(evenNumber2);
console.log(toTalEven);
console.log(totalEven2); */

// উবয় তার OUTPUT
/* PS C:\javascript> node main.js
true
false
PS C:\javascript> */



// LEAP YEAR ============================================ LEAP YEAR 

// প্রতি ৪ বছর পর পর এমন ১ টা বছর আসে যেই বছরের দিন গুলো হয়ে যায় ৩৬৬ দিনের, আর ঐ বছরের ফেব্রুয়ারি মাস হয়ে যায় ২৯ দিনের 
// আমরা এখানেও ভাগ শেষ দিয়ে এটাকে বের করব , যদি ভাগ শেষ ০ হয় তাহলে leap year আর যদি ভাগ শেষ ০ না হয় তাহলে leap year না ।
/* যেহেতু ৪ বছর পর পর আসে leap year আসে তাই ৪ দিয়ে year এর ভাগ শেষ বের করেছি ,আর এই ভাগশেষ কে return এর মাদ্দমে true এবং false 
দারা প্রকাশ করেছি  */


/* function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        // return true;
        console.log('yes its leap year');
    }
    else{
        console.log('sorry! its not leap year');
    }
}
 */
/* 
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
} */


/* function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false; 
} */


/* let year1 = 2020;
let year2 = 2022;
let isleapYear1 = isLeapYear(year1);
let isleapYear2 = isLeapYear(year2);
console.log(isleapYear1);
console.log(isleapYear2);
 */

// leap year logic in javascript????
/* function isLeap(year) {
    if (year % 4 === 0) {
       if (year % 100 === 0){
          if (year % 400 == 0){
             return ("Leap year.");
          } else {
             return ("Not leap year.");
          }
       } else {
          return ("Leap year.");
       }
    } else{
       return ("Not leap year.");
    }
 }
  */

//  FIND ODD NUMBER SUM = == = = FIND ODD NUMBER SUM = == = = FIND ODD NUMBER SUM = == = = FIND ODD NUMBER SUM = == = =

/* function getSum(numbers){
    console.log(numbers);
} */

/* const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSum(myNumbers); */

/* function getSumAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(index, element);
    }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumAnArray(myNumbers); */


// console.log(index, element);
/* OUTPUT OF ARRAY AND ELEMENT 
PS C:\javascript> node main.js
0 12
1 65
2 45
3 78
4 32
5 45
6 91
PS C:\javascript>  */

/* const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumAnArray(myNumbers); */

// function getSumAnArray(numbers){
//     let sum = 0; /* এটাকে যদি for এর ভিতরে লিখি তাহলে সে তার যোগ এর মান টা দরে রাখতে পারবে না ,
//     যার কারনে for যত বার গুরে আসবে ততবার sum টাকে ০ দেখবে এবং পরের সংখ্যা গুলোকে ০ এর সাথেই যোগ করে যাবে এবং পুরো Array টার যোগ আমরা পাবনা 
//     তাই এটাকে for এর বাহিরে লিখতে হবে।  */
//     for(let i = 0; i < numbers.length; i++){
//         // let sum = 0;
//         const index = i; //এখানে i মানে index number 
//         const element = numbers[index]; // এখানে Array এর নাম এবং index দিয়ে Array এর element গুলো বের করা হয়েছে 
//         sum = sum + element // এখানে sum এর মানের সাথে elemnt যোগ করা হয়েছে 
//         console.log(index, element, sum);
//         // return sum; আবার যদি for এর ভিতরে sum কে return করে দেই , 
//         // তাহলে ঐ for টা একভারেই বের হয়ে যাবে এবং ঐ Array গুলকে আর যোগ করবে না , তাই return কেও for এর বাহিরে লিখতে হবে
//         // যেটাকে হিসাবে রাখবে (// let sum = 0;) সেটাকে loop এর বাহিরে রাখবে এবং যেটাকে return করবে সেটাকেও loop এর বাহিরে রাখবে
//     }
//     return sum;
// }




// OUTPUT  (index, element, sum)
// console.log(index, element, sum);
/* PS C:\javascript> node main.js
0 12 12
1 65 77
2 45 122
3 78 200
4 32 232
5 45 277
6 91 368
PS C:\javascript>  */







// function getOddNumberAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i
//         const element = numbers[index]
//         // console.log(index, element);
//         if (element % 2 === 0)/*  (এখানে element এর ভাগ শেষ গুলো যদি ০ এর সমান হয় তাহলে জোড়
//              আর ০ এর সমান না হলে বেজোড়) */ { 
//             console.log(index, element);
//         }
//     }
// }

// OUTPUT ENEN NUMBER 
/* PS C:\javascript> node main.js
0 12
3 78
4 32
PS C:\javascript> node main.js */

// /* function getOddNumberAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i
//         const element = numbers[index]
//         // // console.log(index, element);
//         // if (element % 2 !== 0) /* (এখানে element এর ভাগ শেষ গুলো যদি ০ এর সমান হয় তাহলে জোড়
//         //      আর ০ এর সমান না হলে বেজোড়) */ { 
//         //     console.log(index, element);
//         // }
//     }
// } 


// OUTPUT ODD NUMBER
/* 

1 65
2 45
5 45
6 91
PS C:\javascript>  */

/* এবার এই odd number গুলো কে ১ টা array এর মাজে নিয়ে আসব ,
আর এই জন্য ১ টা  array variable নিতে হবে, এই variable এর মাজে ঐ odd element গুলো কে push করতে হবে ।  */

/* function getOddNumberAnArray(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) { 
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers; */
    
    /* সব গুলো নাম্বার কে ঐ odd array এর ভিতরে নেওয়ার জন্য return ব্যাবহার করতেছি
    যদি return ব্যাবহার না করি তাহলে ঐ oddNumber Array টা ১ টা element কেই ঐ oddNumber array এর ভিতরে নিয়ে আর কোন element নিবে না। */
// }

/* let myNumbers = [12, 65, 45, 78, 32, 45, 91];
let oddNumbers = getOddNumberAnArray(myNumbers);
console.log(oddNumbers);
getOddNumberAnArray(myNumbers); */
// OUTPUT ODD NUMBERS 
/* PS C:\javascript> node main.js
[ 65, 45, 45, 91 ]
PS C:\javascript>  */

/* function getSumofAnArray(numbers){

} */

// এভার ঐ oddNumber Array এর সব গুলো কে যোগ করার জন্য নতুন করে আরেক টা function call করেছি  

/* function getoddNumberSum(oddNumbers){
    let sum = 0;
    for(i = 0; i < oddNumbers.length; i++){
        const index = i;
        const element = oddNumbers[index];
        console.log(index, element);
        sum = sum + element;
    }
    return sum;
}

let oddNumberSum = getoddNumberSum(oddNumbers); 
console.log(oddNumberSum);
 */

// OUTPUT oddNumberSum 
/* PS C:\javascript> node main.js
[ 65, 45, 45, 91 ]
0 65
1 45
2 45
3 91
246
PS C:\javascript> */


//  SOME Number যোগ  SOME Number যোগ   SOME Number যোগ   SOME Number যোগ  SOME Number যোগ 

// 1+ 2 + 3 + 4 + 5 + 6 + 7 
/* let sum = 0;
for(i = 1; i <= 7 ; i++){
    sum = sum + i;
    console.log(i, sum);
} */

// OUTPUT THIS SUM 
/* PS C:\javascript> node main.js
1 1
2 3
3 6
4 10
5 15
6 21
7 28
PS C:\javascript>  */

// এখন এই কাজ টাই  function য়ে করব 
 
/* function sumOfNumbers(number){
    let sum = 0;
    for(i = 1; i <= number ; i++){
        sum = sum + i;
        
    }
    return sum;
} 

let sum = sumOfNumbers(9);
console.log(sum); */


// OUTPUT TOTAL SUM 
/* PS C:\javascript> node main.js
1 1
2 3
3 6
4 10
5 15
6 21
7 28
8 36
9 45
45
PS C:\javascript> node main.js */









// গুন করা====================== যোগের ক্ষেত্রে sum variable এর মান ০ দিতে হবে আর গুন করার ক্ষেত্রে ০ এর জায়গায় ১ দিতে হবে ।


/* let sum = 1;
for(i = 1; i <= 7 ; i++){
    sum = sum * i;
    console.log(i, sum);
}
return sum;
 */
// OUTPUT গুণ 

/* PS C:\javascript> node main.js
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
PS C:\javascript>  */


// এখন এই কাজ টাই  function য়ে করব 

/* function mulTiplicationOfNumber(number){
    let multiplication = 1;
    for(i = 1; i <= number ; i++){
        multiplication = multiplication * i;
        console.log(i, multiplication);
    }
    return multiplication;
}

let multiplication = mulTiplicationOfNumber(9);
console.log(multiplication); */


// OUTPUT OF MULTIPLICATION 

/* PS C:\javascript> node main.js
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
8 40320
9 362880
362880
PS C:\javascript>  */






// FACTORIAL  এটা হল গুণ করা আর এটাকে ! এই চিহ্ন দারা প্রকাশ করে , যেমন 4! মানে ৪ এর factorial বা গুন , আর এই গুন টা হয় 
// এমন ভাবে ৪*৩*২*১  factorial হল ১ থেকে ঐ সংখ্যা পযন্ত গুন করা ।
/* 
function factorial(number){
    let fact = 1;
    for( let i = 1; i <= number; i++){
        fact = fact * i;
        console.log(i, fact);
    }
    return fact;
}

let multipliFactorial = factorial(9);
console.log(multipliFactorial); */

// OUTPUT OF FACTORIAL 
/* PS C:\javascript> node main.js
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
8 40320
9 362880
362880
PS C:\javascript>  */




// factorial revers 

/* 
function factorialRevers(number){
    let reverFact = 1;
    for(let i = number; i >= 1 ; i--){
        reverFact = reverFact*i;
        console.log(i);

    }
    return reverFact;
}

let reversFactorial = factorialRevers(9);
console.log(reversFactorial); */


// OUTPUT REVERS FACTORIAL 
/* PS C:\javascript> node main.js
9
8
7
6
5
4
3
2
1
362880
PS C:\javascript> */

// WHILE LOOP FACTORIAL 

/* function whilwFactorial(number){
    let num = 1;
    let result = 1;
    while(num <= 9){
        result = result * num;
        num++;
    }
    return result;
}

whilefactorialNum = whilwFactorial(9);
console.log(whilefactorialNum); */

/* OUTPUT OF WHILE FACTORIAL 
PS C:\javascript> node main.js
362880
PS C:\javascript>  */

// REVERS WHILW FACTORIAL 
/* function reversWhile(number){
    let i = 9;
    let result = 1;
    while(i >= 1){
        result = result * 1;
        i--;
    }
    return result;
}


console.log(result); */

/* OUTPUT 
PS C:\javascript> node main.js
14781
PS C:\javascript>  */







// STRING ============================================
/* STRING হল ARRAY এর মতই , তবে ARRAY যেমন বাহিরে থেকে change করা যায় , String টা সেভাবে change করা যায় না / String এর index এর মান টাকে change
করা যায় না , সে জন্য String টাকে বলে (imutable).  */

// /* String টা হল case sensetive ,এটা কে যদি ignore করে চাই ,তাহলে এমন কিছু ব্যবহার করবে variable এর সাথে 

// toLowerCase = ছোট হাতের 
// toUpperCase = বড় হাতের 
// toLocale = লোকেশন অনুযায়ী  Upprecase / toLowerCase অক্ষর হওয়া 
// startsWith = এটা দিয়ে সুরু হয়েছে কিনা
// endsWith = শেষে এটা আছে কিনা   */

// কোন কিছু খুজে পেলে output দিবে true ,আর খুজে না পেলে output দিবে false

// USER NAME AND INPUT CHECK BY STRING 
// const userName = 'blackPink'; /* আমি program য়ে set করেছি 'blackPink' */
// const userInput = 'blackPinK'; /* আর visitore input করেছে 'blackPinK' এখানে শেষের অক্ষর বড় দিয়েছে  */




// if (userName === userInput){/*  আর আমি শর্ত দিয়েছি , আমার program এবং visitore এর input যদি সমান হয় valid user , আর সমান না
//     হলে invalid user , যেহেতু visitore এখানে K বড় হাতের লিখে ভুল করেছে তাই invalid user আসচে . এই সমস্যা থেকে বাচার জন্য 
//      ২ টাকেই  ডট toLowerCase/ (userName.toLowerCase ==== userInput.toLowerCase) করে , এতে করে আমার program এবং visitore এর
//      inpute কে ছোট হাতের অক্ষরে রূপান্তর করে check করবে ,এর পর output দেখাবে valid or invalid  */ 
//     console.log('valid User');
// }
// else{
//     console.log('invalid User')
// }

/* output 
PS C:\javascript> node main.js
invalid User
PS C:\javascript> */



/* const userName = 'blackPink';
const userInput = 'blackPinK';

if (userName.toLowerCase === userInput.toLowerCase){
    console.log('valid User');
}
else{
    console.log('invalid User')
} */

/* output 
PS C:\javascript> node main.js
valid User
PS C:\javascript>  */



// FIND ANYTHING IN STRING 

// const গান = 'তুমি বন্দু কালা পাখি  আমি যেন কি  বসন্তের কুকিল তোমায় ভুলতে পারিনি';

//             // এর থেকে কোন কিছু খোঁজ করব আছে কিনা ,থাকলে তাকে বের করব ,includes এর মানে হল ভিতরে আছে কিনা 
//  const আছেকিনা = গান.includes('পাখি');
//  console.log(আছেকিনা);

/* const lyrics = 'Tome bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini';
        // এর থেকে কোন কিছু খোঁজ করব আছে কিনা
const searchString = lyrics.includes('pakhi');
console.log(searchString); */
        
// এটাকে অন্যভাবে করতে পারি 
/* const lyrics = 'Tome bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini';

const find = ' pakhi'
const searchString = lyrics.includes(find);
console.log(searchString); */

// এবার এটাকে case sensetive করার জন্য toLowercase / toUppercase ব্যবহার করলাম 

// const lyrics = 'Tome bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini';

// const find = ' pakhi'
// const doseExist = lyrics.includes('pahki');
// const doseExist = lyrics.includes('Pahki');
// const doseExist = lyrics.includes(find);
// const searchString = lyrics.includes(find);
// const lyricsCaseChange = lyrics.toLowerCase(); /* গান টার case ignore করলাম  */
// const searchStringCaseChange = find.toLowerCase(); /* variable টার case ignore করলাম  */
// const searchString = lyrics.includes(searchStringCaseChange); /* 2 টাকেই আরেক টা variable এর ভিতরে রাখলাম   */
// const searchStringOneline = lyrics.toLowerCase().includes(find.toLowerCase()); /* উপরে যেই ৩ টা কাজ করলাম , ঐ ৩ টাকে ১ লাইনে নিয়ে আসলাম। */
// console.log(searchString); /* ঐ ২ টার variable টাকে output করলাম */
// console.log(searchStringOneline); /* ঐ ৩ টার variable টাকে output করলাম */

// console.log(lyrics.indexOf('kala'));
// output 
/* PS C:\javascript> node main.js
false
true
PS C:\javascript> */

// // INDEX OF STRING 
//  /* কোন ১ টা item যদি String / Array এর মাজে থাকে তাহলে output দিবে indexOf number আর যদি না
//  থাকে তাহলে output দিবে (-1) , লোকজন এটাকে function নে এই ভাবে করে  */
// if(lyrics.includes('sada') !== -1){ /* শর্ত হল, -1 হবে না ,তার মানে ভিতরে আছে  */
//     console.log('exists inside the string');
// }
// else{
//     console.log('cannot find ');
// }

// STARTSWITH 
// console.log(lyrics.startsWith('Tome')); /* মানে ঐ lyrics টা Tomi দিয়ে শুরু হয়েছে কিনা  */ 

// ENDWITH 
/* const fileName = 'mybiodata.pdf'
const otherFile = 'mypic.png'
fileName.endsWith('.pdf'); */



// SPLIT = আলাদা করা / ভাগ করা 

// const lyrics = 'Tome bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini';

// /* const parts = lyrics.split(' '); /* এখানে খালি speace দিয়ে ভাগ করেছে । word কে আলাদা করা  */
// const sentences = lyrics.split('.'); /* এখানে ডট দিয়ে ভাগ করেছে  */
// const charsDivid = lyrics.split(''); /* এখানে emty string দিয়ে ভাগ করেছে। chars  কে আলাদা করা */
// console.log(parts, sentences, charsDivid); */

// OUTPUT 
/* PS C:\javascript> node main.js
[
  'Tome',    'bondhu',
  'kala',    'pakhi',
  'ami',     'jeno',
  'ki',      '.',
  'bosonto', 'kale',
  'tomai',   'bolte',
  'parini'
] [
  'Tome bondhu kala pakhi ami jeno ki ',
  ' bosonto kale tomai bolte parini'
] [
  'T', 'o', 'm', 'e', ' ', 'b', 'o', 'n', 'd',
  'h', 'u', ' ', 'k', 'a', 'l', 'a', ' ', 'p',
  'a', 'k', 'h', 'i', ' ', 'a', 'm', 'i', ' ',
  'j', 'e', 'n', 'o', ' ', 'k', 'i', ' ', '.',
  ' ', 'b', 'o', 's', 'o', 'n', 't', 'o', ' ',
  'k', 'a', 'l', 'e', ' ', 't', 'o', 'm', 'a',
  'i', ' ', 'b', 'o', 'l', 't', 'e', ' ', 'p',
  'a', 'r', 'i', 'n', 'i'
]
PS C:\javascript> */



// SLICE BY INDEX / slice = কোন ১ টা অংশ কাটা ,আর এটা index এর মাদ্দমে করতে হয়। এটার ২ টা জিনিস থাকে start and end , কথায় থেকে সুরু হবে আর কথায় শেষ হবে তা বলে দিতে হবে ।
// const lyrics = 'Tome bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini';

// const parts = lyrics.slice(5, 8);
// const substringly = lyrics.substring(5, 8); /* substring হল এটা কথায় থেকে সুরু আর কথায় শেষ তা বের করার জন্য  */
// const lTrim = lyrics.trim(5, 8); /* trim হল এটা থেকে সুরু থেকে  শেষ থেকে খালি speace দূর করার জন্য  */
// const lconcat = lyrics.concat(',' , 'another'); /* concat হল জোড়া দেওয়া , কমা দিয়ে জোড়া দিয়ে  */
// console.log(parts);
// console.log(substringly);
// console.log(lTrim );
// console.log(lconcat );

/* output
PS C:\javascript> node main.js
bon
bon
Tome bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini
Tome bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini,another
PS C:\javascript>   */


// const lyrics = ['Tome bondhu kala pakhi ami jeno ki ',
//    ' bosonto kale tomai bolte parini ',
//     ' bosonto kale tomai bolte parini ',
//      'bosonto kale tomai bolte parini']
// const joinAlllyrics = lyrics.join(':'); /* JOIN দারা যে কোন String এর ভিতর যে কোন কিচু কে add করা যায়  */
// console.log(joinAlllyrics);

/* OUTPUT 
PS C:\javascript> node main.js
Tome bondhu kala pakhi ami jeno ki : bosonto kale tomai bolte parini : bosonto kale tomai bolte parini :bosonto kale tomai bolte parini
PS C:\javascript>  */




// MATH ============================================= 

// const result = Math.pow(3,8);/*  pow হল পাওয়ার ,আমরা বলি না (3 দি পাওয়ার 8) */
// console.log(result);

/* OUTPUT 
PS C:\javascript> node main.js
6561
PS C:\javascript>  */

// const num1 = 25;
// const num2 = 45;

// const gap = Math.abs(num1 - num2); /*  abs হল সুদু মান নিবে  এটা positive মান নাকি negative তা নিবে না  */
// console.log(gap);
// // OUTPUT 
// /* PS C:\javascript> node main.js
// 20
// PS C:\javascript> */
// if(gap < 5){
//     console.log('you guys can be fried');
// }
// else(
//     console.log('you guys can not be  fried')
// )

// OUTPUT 
/* PS C:\javascript> node main.js
20
you guys can not be  fried
PS C:\javascript> */



//  ROUND  পুণ্য সংখ্যা 

/* const roundNumber = 2.568484;
const fullRound = Math.round(roundNumber); /*  round হল পুণ্য সংখ্যা  */
/* console.log(fullRound);
output 
PS C:\javascript> node main.js
3
PS C:\javascript>  */ 


//  ceil / ceil হল ভগ্নাংশ সংখ্যা থেকে পুণ্য সংখায় করার সময় ঐ সংখ্যা টাকে (২.৫৬৮৪৮৪) ২ এর উপরের সংখায় দেখাবে
//  floor / floor হল ভগ্নাংশ সংখ্যা থেকে পুণ্য সংখায় করার সময় ঐ সংখ্যা টাকে (২.৫৬৮৪৮৪) ২  সংখায় দেখাবে  উপরে দেখাবে না

// const ceilNumber = 2.568484;
// const fullceil = Math.ceil(ceilNumber); /*  ceil হল ভগ্নাংশ সংখ্যা থেকে পুণ্য সংখায় করার সময় ঐ সংখ্যা টাকে (২.৫৬৮৪৮৪) ২ এর উপরের সংখায় দেখাবে */
// const fullfloor = Math.floor(ceilNumber); /*  floor হল ভগ্নাংশ সংখ্যা থেকে পুণ্য সংখায় করার সময় ঐ সংখ্যা টাকে (২.৫৬৮৪৮৪) ২  সংখায় দেখাবে  উপরে দেখাবে না */

// console.log(fullRound);
// console.log(fullfloor);
// output 
// PS C:\javascript> node main.js
// 3
// PS C:\javascript> 

// output 
// PS C:\javascript> node main.js
// 2
// PS C:\javascript>  


/* REMP  */

// let first = 5 ;
// let second = 7;
// console.log(first, second);
// outout 
/* PS C:\javascript> node main.js
5 7
PS C:\javascript>  */

// মান টাকে variable য়ে অদল ভদল করা 
// first = second;
// second = first;

// const temp = first;
// first = second;
// second = temp;
// console.log(first , second);

// approach : 2 Destructuring মানে  অদল ভদল করা  Object to Object / Array to Array 
// [ first, second ] = [ second , first ];
//   console.log(first , second);
// output 
// PS C:\javascript> node main.js
// 7 7
// PS C:\javascript> 


//MAX ========================== বড় number বের করা 
// const jim = 84;
// const dela = 75;
// const cinko = 65;
//  if(jim > dela){
//     console.log('jim will get the cake ');
//  }
//  else{
//     console.log('dela will get the cake')
//  }

// if(jim > dela && jim > cinko){
//     console.log('jim will get cake ')
// }
// else if ( dela > jim && dela > cinko){
//     console.log('dela will get cake ');
// }
// else{
//     console.log('cinko will get cake ')
// }

// এটাকে Math.max দিয়ে করা যায় max = বড় min = ছোট 
// Math.max(12, 52,78, 45, 58, 48, 796);

// outout 
/* PS C:\javascript> node main.js
jim will get the cake 
PS C:\javascript> */


// hight / সব চেয়ে লম্বা / বড় কে তা বের করা 21 ar 7 number video

/* function maxInArray (numbers){
// console.log(number);
let largest = numbers[0];
for( let i = 0; i < numbers.length; i++ ){
   
    const index = i;
    const element = numbers[index];
    // console.log(element);
    if(element > largest){
        largest = element;
    }
}
return largest;
}

const heights = [ 167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log(tallest);
 */
/* output 
PS C:\javascript> node main.js
190
PS C:\javascript>  */
 
/* function reversString(text){
     for( let i = 0; i < text.length; i++){
        const element = text[i];
        console.log(element);
     }
} */
// const myString = 'I am a good boy';
// const reversed = reversString(myString);

// ঐ  loop টাকে উল্টা করব 8 min
// function reversString(text){
//     for( let i = text.length-1 /* এখানে (i = text.lenght) সমান ছোট না
//      , এটা কে ছোট করার জন্য (-1) ব্যাবহার করা হয়েছে */ ; i >= 0; i--){ 
//        const element = text[i];
//        console.log(element);
//     }
// }

//  loop টাকে যোগ করব

// function reversString(text){
//     let addRebers = '';
//     for( let i = text.length-1; i >= 0; i--){
//        const element = text[i];
//        addRebers = addRebers + element;
//        console.log(element, addRebers);
//     }
//     return addRebers;
// }

// function revrsWord(str){
//     const words = str.split(' ');
//     console.log(words);
// }

// উল্টা করব 
// function revrsWord(str){
//     const words = str.split(' ');
//     const result = [];
//     for(let i = words.length -1; i >= 0; i--){
//         const element = words[i];
//         result.push(element);
//     }
//     const reversed = result.join(' ');
//     console.log(words);
//     console.log(result);
//     console.log(reversed);
//     return reversed;
// }

// const myString = 'I am a good boy';
// const reversed = revrsWord(myString);


// fiboancci 

/* fiboancci হল ২ সংখ্যার যোগ ফল হয়ে ৩ নাম্বার সংখ্যা নির্ণয় করা 
 ০, ১, ১, ২, ৩, ৫, ৮, ১৩, ২১, ৩৪, ৫৫, ৮৯, ১৪৪ 
 এটাও বলা যায় যে কোন সংখ্যার পূর্বের ২ টি সংখার যোগফল ,যদি এখানে যদি ৩ কে দরি তাহলে হবে
  ২ + ১ ,২ এবং টার পূর্বের সংখ্যা ১ মিলে ৩ হয়েছে। এটাকে ইংরেজির মাদ্দমে এই ভাবে লিখা হয় n = (n-1) + (n-2) = 3
  এখানে n টাকে অজানা ১ টা সংখ্যা দরা হয়েছে , (n-1) করে n পূর্বের সংখ্যা বের করেছে, (n-2) করে (n-1) এর পূর্বের সংখ্যা বের করেচে ,
  এভার এই ২ সংখার (n-1 n-2) এর যোগ করা হয়েছে । */

//   আর এই fiboancci এটা বের করতে হলে ২ টি সংখ্যা লাগবে ,২ টি সংখ্যা চাড়া এটা কাজ করতে পারবেনা তাই program মে প্রথমে ২ টি সংখ্যা call করেছি

// const fibo = [0, 1];
// for(let i = 2; i <= 15; i++){ /* এখানে  i = 2 দেওয়ার মানে হল পূর্বের ২ টি সংখার যোগ ফল ২,  */
//     const element = [i];
//     fibo[i] = fibo[ i - 1 ] + fibo[i - 2];/*  এখানে i = 2 এর মান দিয়েছি ,এখন fibo এর ভিতরে i এর জায়গায় হবে ২ ,আর ২ থেকে ১ বাদ দিলে থাকবে ১, আর ২- ২ করলে হবে ০ ,এভার ০ আর ১ যোগ করলে হবে ০
//     এই ভাবে এই i মান টা বাড়তে থাকবে যতক্ষণ ১৫ পজন্ত না যাবে  */
//     console.log( element);
// }
// console.log( fibo);

/* output 

PS C:\javascript> node main.js
[ 2 ]
[ 3 ] এগুলো হল element 
[ 4 ]
[ 5 ]
[ 6 ]
[ 7 ]
[ 8 ]
[ 9 ]
[ 10 ]
[ 11 ]
[ 12 ]
[ 13 ]
[ 14 ]
[ 15 ]
[
    0,   1,   1,   2,  3,  5,
    8,  13,  21,  34, 55, 89, আর এগুলো হল fibo 
  144, 233, 377, 610
]
PS C:\javascript>
 */










// some problem solve ==========================================================================================================
// const country = 'bangladesg ';
// const age = 52;
// const isIndepended = true;
// const student = {id: 121, class: 11, name: 'Agun'};
// const friends = [ 13, 14, 11, 17, 16, 15, 20 ];
// function add (num1, num2){
//     return num1+ num2;
// }

// console.log(typeof country); /* string */
// console.log(typeof age); /* number */
// console.log(typeof isIndepended); /* boolean */
// console.log(typeof student); /* object */
// console.log(typeof friends); /* object */
// // chack array using Array.isArray =====================================
// console.log(Array.isArray (friends)); /* true */
// //find anything in array ==============================================
// console.log( friends.includes(19)); /* false */
// if(friends.indexOf(256) !== -1){

// }
// console.log(typeof add); /* function */

// concat ba join kora =======================================================
//  const newFriends = [12, 13, 11, 13, ];
//  const allfriends = newFriends.concat(friends);
//  console.log(allfriends);

// slice কেটে পেলা / কোন ১ টা অংশ Array থেকে নেওয়া ===================== এটা করার পরও Array ঠিক থাকে  ========================================

//const friends = [12, 45, 32, 44, 62, 29, 69, 87];

//const partial = friends.slice(2, 5);
//splice কোন কিচু Array থেকে remove করা ================ এটা করার পরও Array ঠিক থাকে না এবং এটার মাদ্দমে Array এর মাজে আরও মান insert করা যায়===========================================
// const spliceFrinds = friends.splice(2, 5); /* index এর ২ থেকে ৫ পজন্ত সংখ্যা গুলো চাড়া বাকি গুলো কে remove করে যেই সংখ্যা গুলো ও খানে নাই সেগুলকে এই সংখার সাথে add করে নিবে */
//const spliceFrindsAdd = friends.splice(2, 5, 99, 555, 7777); /* index এর ২ থেকে ৫ পজন্ত সংখ্যা গুলো চাড়া বাকি গুলো কে remove করে যেই সংখ্যা গুলো ও খানে নাই সেগুলকে এই সংখার সাথে add করে নিবে */
// console.log(partial); /* [ 32, 44, 62 ] */
// console.log(friends);/* [12, 45, 32, 44,62, 29, 69, 87] */
// console.log(spliceFrinds); /* [ 32, 44, 62, 29, 69 ] */
// console.log(friends);/* [ 12, 45, 87 ] */
//console.log(spliceFrindsAdd); /* [ 32, 44, 62, 29, 69 ]*/
//console.log(friends);/* [ 12, 45, 99, 555, 7777, 87 ]*/










// duplicate অতিরিক্ত গুলো বের করে পেলে দেওয়া =================================================================
// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'abul', 'cabul', 'babul', 'ebul'];

// function removeDuplicate(names){
//     const unique = [];
//     for(i = 0; i < names.length; i++){
//         const name = names[i];
//         console.log(name);
//         if(unique.includes(name) === false){ /* এখানে শর্ত হল => আমরা খালি ১ টা Array নিয়েচি unique নাম দিয়ে । 
//         এবার এটাকে .includes দিয়ে check করা সুরু করেছি name কে , যদি নাম টা unique Array তে থাকে তাহলে তা true হবে আর true হলে
//          unique কে আর এটা push করবে না , আর যদি unique কে না থাকে নাম টা তাহলে তা false হবে ,এরপর false === false যখন মিলে যাবে 
//          তখন unique য়ে নাম টা push করবে, এভাবে আমরা ১ টা Array থেকে অতিরিক্ত নাম গুলো কে পেল দিতে পারি/  */
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueName = removeDuplicate(names);
// console.log(uniqueName);






// DIBISIBLE =================================
// ১ থেকে ৫০ পজন্ত output দেখাইতে গিয়ে যদি কোন ১ টা সংখ্যা  ৩ দিয়ে ভাগ জায় এবং ভাগশেষ না থাকে তখন ঐ সংখ্যা টা না দেখাইয়া দেখাব foo 
// ১ থেকে ৫০ পজন্ত output দেখাইতে গিয়ে যদি কোন ১ টা সংখ্যা  5 দিয়ে ভাগ জায় এবং ভাগশেষ না থাকে তখন ঐ সংখ্যা টা না দেখাইয়া দেখাব bar 
// ১ থেকে ৫০ পজন্ত output দেখাইতে গিয়ে যদি কোন ১ টা সংখ্যা  5 and 3 উভয়  দিয়ে ভাগ জায় এবং ভাগশেষ না থাকে তখন ঐ সংখ্যা টা না দেখাইয়া দেখাব foobar 

// for(let i =1; i<=50; i++ ){
//     console.log(i);
// }
// for(let i =1; i<=50; i++ ){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('foobar');
//     }
//     else if(i % 3 === 0){
//         console.log('foo');
//     }
//     else if(i % 5 === 0){
//         console.log('bar');
//     }
//     else{
//         console.log(i);
//     }
// }








// কোন কিছু fixed থাকা  = ===============================================================
// এবং change হওয়া = যে গুলো change হবে ঐ গুলো মানুষ থেকে নিয়ে input করে check করা 
// অনেক গুলো জিনিস কয়েক টা করে কিনতে চাই ,কয়েক টা করে কিনার পর সব গুলো টোটাল কত টাকা আসবে তা বের করা 
 /* 
 fixed: per item wood requirments
 1. chair --> 3 cft
 2. table  --> 10 cft
 1. bed --> 50 cft
 vary: quantity
 */

/* function woodCalculator( chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedwood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood  = bedQuantity * perBedwood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);
    const totalWood = chairWood + tableWood+ bedWood; 
    return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood); */






// অনেক গুলো Array থেকে যে কোন ১ টার মান  বের করা ==============================================

/* const phones = [ 
    { name: 'samsung', camera: 12, storage: '32gb', prise: 36000, color: 'silver'},
    { name: 'reami', camera: 25, storage: '64gb', prise: 22000, color: 'red'},
    { name: 'realme', camera: 32, storage: '86gb', prise: 18500, color: 'green'},
    { name: 'iphone', camera: 35, storage: '160gb', prise: 86000, color: 'white'},
    { name: 'walton', camera: 10, storage: '16gb', prise: 8000, color: 'silver'},
    { name: 'oppo', camera: 16, storage: '32gb', prise: 16500, color: 'gray'}
]

// এখন কাজ হল কম দামি মুবাইল টাকে বের করা
function cheapestPhone(phones){
    let cheapestLow = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.prise < cheapestLow.prise){
            cheapestLow = phone;
        }
    }
    return cheapestLow;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
 */





// অনেক গুলো সংখার যোগ ফল বের করা =============================================

/* const shoppingCart = [
    {name: 'shoe', prise: 1200},
    {name: 'shirt', prise: 2200},
    {name: 'pant', prise: 3700},
    {name: 'balt', prise: 600}
];

function totalCost(products){
    let totalSum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        totalSum = totalSum + product.prise;
        console.log(product);
    }
    return totalSum;
}

const expens = totalCost(shoppingCart)
console.log(expens); */





// অনেক গুলো সংখার যোগ ফল বের করা =============================================

/* const shoppingCart = [
    {name: 'shoe', prise: 1200, quantity: 2},
    {name: 'shirt', prise: 2200, quantity: 5},
    {name: 'pant', prise: 3700, quantity: 4},
    {name: 'balt', prise: 600, quantity: 3},
];

function totalCost(products){
    let totalSum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.prise * product.quantity;
        totalSum = totalSum + productTotal;
        console.log(product);
    }
    return totalSum;
}

const expens = totalCost(shoppingCart)
console.log(expens)
 */




/* 
1. দরেন আপনি যদি ২০০ টা টিকিট কিনেন প্রথম ১০০ টা ১০০ টাকা করে দিবেন 
2. বাকি গুলো প্রতিটা ৯০ টাকা করা দিবেন 
    আর যদি
3. ২০০ এর উপরে টিকিট কিনেন সেগুলো প্রতিটা ৭০ টাকা করে দিবেন 
*/
// 22-8 number 

// function ticketPrice(ticketQunatity){
// const first100Ticket = 100; /* প্রথম ১০০ টা ১০০ টাকা করে */
// const second100Ticket = 90; /* প্রথম ১০০ টা ৯০ টাকা করে */
// const restTicket = 70;      /* অতিরিক্ত টিকিটের  গুলো ৭০ টাকা করে */

// if (ticketQunatity <= 100){ /* শর্ত দিলাম প্রথম ১০০ টা ১০০ টাকা করে */
//     const price = ticketQunatity * first100Ticket; /* প্রথম ১০০ টা টিকিট গুন প্রতেক টা টিকিট এর দাম ১০০ টাকা করে */
//     return price;
// }
// else if (ticketQunatity <= 200){ /* শর্ত দিলাম  ২০০ টা টিকিট, প্রথম ১০০ টা ১০০ টাকা করে, অতিরিক্ত টিকিটের  গুলো ৭০ টাকা করে */
//     const first100Price = 100 * first100Ticket; /* প্রথম ১০০ টা টিকিট গুন প্রতেক টা টিকিট এর দাম ১০০ টাকা করে বের করলাম*/
//     const restTickerQuantity = ticketQunatity - 100; /* প্রথম ১০০ টা  বের করার পর বাকি টিকিটের সংখ্যা বের করলাম , */
//     const secondTickerPrice = restTickerQuantity * second100Ticket; /*  বাকি টিকিটের সংখ্যা এর সাথে second100Ticket ৯০ টাকা করে গুন করলাম  */
//     const totalTicketPrice = secondTickerPrice + first100Price; /* প্রথম ১০০ টা এবং অতিরিক্ত টিকিটের  গুলো  যোগ করলাম  */
//     return totalTicketPrice; /*undefined না দেখানোর জন্য return করলাম totalTicketPrice কে  */
//     //console.log( first100Price, restTickerQuantity, secondTickerPrice, totalTicketPrice);
// }
// else{ /* else য়ে এসে বলল্ললা টিকিট যদি ২০০ এর উপরে হয় তাহলে , প্রথম ১০০ টা ১০০ টাকা করে, second100Ticket গুলো ৯০ টাকা করে, অতিরিক্ত টিকিটের  গুলো ৭০ টাকা করে */
//     const first100Price = 100 * first100Ticket; /* প্রথম ১০০ টা টিকিট গুন প্রতেক টা টিকিট এর দাম ১০০ টাকা করে  বের করলাম*/
//     const secondTickerPrice = 100 * second100Ticket;  /* second100Ticket টিকিট গুলোর প্রতেক টা টিকিট এর দাম ৯০ টাকা করে  বের করলাম*/
//     const restTickerQuantity = ticketQunatity - 200; /* প্রথম ২০০ টা  বের করার পর বাকি টিকিটের সংখ্যা বের করলাম , */
//     const restTicketPrice = restTickerQuantity * restTicket; /*  বাকি টিকিটের সংখ্যা এর সাথে restTicket ৭০ টাকা করে গুন করলাম  */
//     const totalCost = first100Price + secondTickerPrice + restTicketPrice; /* প্রথম ২০০ টা টিকিট এবং second100Ticket টিকিট গুলো এবং অতিরিক্ত টিকিটের  গুলো  যোগ করলাম  */
//     console.log(first100Price, secondTickerPrice, restTicketPrice, totalCost); /* সব গুলোর output দেখার জন্য console.log করলাম */

//     /* 
//     PS C:\javascript> node main.js
//     10000 9000 3500 22500
//     undefined [ এখানে  undefined আসার কারন হল function য়ে সব সময় return valu দিতে হয় আর নয় undefined 
//     দেখাবে ,যা আমরা এখানে দেখ্তে পাচ্ছি , এটা solve করার জন্য return করে দিব totalCost কে । ]
//     PS C:\javascript>
//     */
//     // return totalCost;
     
// }



// }

// const totalTicket = ticketPrice(250);
// console.log(totalTicket);



//security check =====================================================================


/* function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        return 'Please enter a number';
    }
    return num1 + num2
}

const result = add( 12, '45');
// console.log(result);

function multiply(num1, num2){
return num1 * num2;
}

const output = multiply( 12,45);
console.log(output) */









