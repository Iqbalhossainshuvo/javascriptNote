
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

var moneyGiven = 1000;
var orange = 400;
var apple = 300;

var totalPrice = orange + apple;
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


var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80; 
var Physics = 35.45;
var Bangla = 99.50;

var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
// console.log(totalMarks);
var average = totalMarks /5;
// console.log(average);
var averageTwoDeciml = average.toFixed(2);
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


var number = 199;
var remainder = number % 5;
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

var fruits = ['Apple', 'Banana', 'Orange' ]
var bananaIndex = fruits.indexOf('Banana');
// console.log(bananaIndex);

// OUTPUT INDEX OF BANANA 
/* PS C:\javascript> node main.js
1
PS C:\javascript>  */


// replace ‘Banana’ with ‘Mango’

var fruits = ['Apple', 'Banana', 'Orange' ]
fruits[1] = 'Mango'
// console.log(fruits);


// OUTPUT REPLACE 'BANANA' WITH 'MANGO'

/* PS C:\javascript> node main.js
[ 'Apple', 'Mango', 'Orange' ]
PS C:\javascript>  */


// Remove ‘Orange’ 

var fruits = ['Apple', 'Banana', 'Orange' ]
fruits.pop();
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


var num1 = 13;
var num2 = 79;
var num3 = 45;

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

var side1 = 9;
var side2 = 8;
var side3 = 9;
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

var number = Math.random() * 100000;
var result = Math.round(number);

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

var mobile = {
    brand : 'iPhone',
    price : 79000,
    storage : '64gb',
    camera : '50MP'
}

var myComputer = {
    brand : 'Hp',
    price : 85000,
    color : 'silver',
    processor : 'i5'

}

// console.log(myComputer , mobile);
//  আর নির্দিষ্ট কোন property বের করতে হলে object এর Name ডট ঐ property এর নাম 
// console.log(myComputer.price);
// console.log(mobile.price);
// আবার কোন কিছু change করতে চাইলে Object এর Name ডট propert এর নাম সমান যা change করতে চায় তা লিখবে ।
 
myComputer.color = 'green';

// Object এর কোন ১ টা property এর নাম পেতে চাই তাহলে এটা পাওয়ার জন্য ৩ ভাবে করতে পারি, আবার এই  ৩ বাবে property এর নাম change করতে পারি।

// var findePropertyname = myComputer.brand;
// var findePropertyname = myComputerp['brand'];
//  var propertyNmae = 'color'
//  var propertyValue = myComputer[propertyNmae];

//  console.log(propertyNmae, propertyValue);
// console.log(findePropertyname);

// Object এর সব গুলো property/ value কে পাইতে চাইলে Object এর Name ডট keys (তার পর এটার ভিতরে ঐ Object এর নাম দিতে হবে ,জার সব গুলো value পাইতে চায়)

// var properties = Object.keys(myComputer); আর keys দারা Object এর properties গুলো দিবে 
const keys = Object.keys(myComputer);
// console.log(properties);
/* PS C:\javascript> node main.js
[ 'brand', 'price', 'color', 'processor' ]
PS C:\javascript> */ 

// var propertiesValue = Object.values(myComputer); values এর দারা Object এর value গুলো দিবে
const values = Object.values(myComputer);
/* console.log(propertiesValue);

PS C:\javascript> node main.js
[ 'Hp', 85000, 'green', 'i5' ]
PS C:\javascript>  */


// property আর value ২ টা একসাথে পেতে চাইলে loop চালাইতে পারি

var myComputer = {
    brand : 'Hp',
    price : 85000,
    color : 'silver',
    processor : 'i5'
}

for (var i = 0; i < keys.length; i++ ){
    // console.log(keys[i]);
}

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
}

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

































































































