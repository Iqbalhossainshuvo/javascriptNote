//! must important know =>  string , number, boolean, array, function , loop, compare , DOM 
// property key & values //! string , number, boolean, array, function 
//  and method //! method also a function

//! object literal //!important
const myInformation = {}
myInformation.name = 'iqbal'
myInformation.lastName = 'Hossain'
myInformation.play = function(){
    console.log('I play football');
}

// console.log(myInformation );
// myInformation .play();

const myInformation1 = {
    name:'iqbal',
    lastName:'Hossain',
    play: function(){
        console.log('I play football');
    },
}

// console.log(myInformation);
// myInformation.play();

//! object constructor
const newInformation = new Object();
// console.log(newInformation);


//! object create method prototype
const prototypeObject = Object.create(myInformation)
// console.log(prototypeObject);
// console.log(prototypeObject.name);


//! class  Es6  //!important
class Person{
    name ='iqbal';
    lastName ='John';
    constructor(age){
        // console.log('my age is ' + age);
    }
}

const Person1 = new Person(56);
// console.log(Person1);


//! function 
function Car (car,model){
    this.model = model;
    this.car = car;
}

const newCar = new Car('iqbal',31);
// console.log(newCar);



//! example in method 
const student = {
    name:'iqbal',
    lastName:'Hossain',
    age:25,
    study: 'CSE',
    info: function(){
        // console.log(this.name, this.lastName);
        return this.name + ' ' + this.lastName
    },
    upInfo: function(subject){
        this.info();
        return `${this.name} is taken from ${subject}`
    },
    changeAge:function(myAge){
        this.age = this.age - myAge;
        return this.age;
    }

}

// console.log(student);
student.info();
const info = student.info();
// console.log(info);
const upInfo = student.upInfo('upInfo');
// console.log(upInfo);
const changeMyAge = student.changeAge(20)
// console.log(changeMyAge);



//! keys value example 
const details= {firstName:'iqbal', lastName:'John', age:25, isLearning:true, hobby:['play football', 'self cooking', 'traveling', ]}
const keys = Object.keys(details)
// console.log(keys);
const values = Object.values(details)
// console.log(values);
const pair = Object.entries(details)
// console.log(pair);

const toDimensional = [
    [ 'firstName', 'iqbal' ],
    [ 'lastName', 'John' ],
    [ 'age', 25 ],
    [ 'isLearning', true ],
    [ 'hobby', [ 'play football', 'self cooking', 'traveling' ] ]
  ]



//! delete something from object
//   console.log(details);
  //! Object.seal(details) // not remove and new add  existing any properties but update anythings
  Object.freeze(details); // we can't change any properties 
  delete details.lastName
  details.age = 50
//   console.log(details);



//! Loop example 

//! 3 ways to read objects property 
/**
 * details.name,
 * details.['name'] //exactly যদি আমরা নাম টা জেনে থাকি 
 * details.[key] // আমরা জানিনা কিন্তু এই key এর variable এর  ভিতরে object এর value গুলো আসবে
 */

// for of use an array its not use objects
const numbers = [1, 2, 3, 4, 5]
for(const number of numbers){
    // console.log(number);
}

// for of can't use an object 
const details2= {firstName:'iqbal', lastName:'John', age:25, isLearning:true, hobby:['play football', 'self cooking', 'traveling', ]}

const keys2= Object.keys(details2)
// console.log(keys2);

for(const key of keys2){
    // console.log(key, details2[key]);
}
//click on breakPoint  debugging click on Run and debug icon , and click on run debug now select node.js , hit on F10

for(const key in details2){
    const value = details2[key];
    // console.log(key, value);
}
// destructure from array 

const pair2 = Object.entries(details2)
// console.log(pair2);
for (const [key, value] of Object.entries(details2)){
    // console.log(key, value);
}


//! compare example
// === 3 equal mines name value references
const first = 2;
const second = 2;

if(first === second){
    // console.log('they are equal');
}
else{
    // console.log('they are different');
}


const first2 ={a:2,b:3,c:4,d:5};
const second2 ={a:2,b:3,c:4,d:5};

if(first2 === second2){
    // console.log('they are equal 2');
}
else{
    // console.log('they are different 2');
}


// convert object to string
const firstString = JSON.stringify(first2);
const secondString = JSON.stringify(second2);
// console.log(firstString, secondString);

if(firstString === secondString){
    // console.log('same');
}
else{
    // console.log('different');
}

// example with function
function compareObject(first2,second2){
    const firstKey = Object.keys(first2)
    const secondKey = Object.keys(second2)

    // firstkey and secondKey is an array  if we compare arrays of arrays this check also references if reference not same this is show false

    if(firstKey.length === secondKey.length){
        for(const key of firstKey){
            // console.log(key);
            // if(firstKey[key] !== secondKey[key]){
            //     return false;
            // }else{
            //     return true;
            // }

            if(firstKey[key] === secondKey[key]){
                return true;
            }else{
                return false;
            }  
        }
        
        // return true;
    }
    else{
        return false;
    }

}

const isSame = compareObject(first2, second2)
// console.log(isSame);



// example 
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const details3= {firstName:'iqbal', lastName:'John', age:25, isLearning:true, hobby:['play football', 'self cooking', 'traveling', ]}


  const person1 =  person.fullName.call(details3);
  const person2 =  person.fullName.apply(details3);
  const person3 =  person.fullName.bind(details3);
//   console.log(person1, person2, person3);



// second example
const student4 = {
    name: 'Iqbal', 
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
       return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = student4.exam();

const student5 = {
    name: 'good student',
    money: 8000
}

const result2 = student4.exam.call(student5);
const treatMoney = student4.treatDey.call(student5, 400, 40);
const treatMoney2 = student4.treatDey.apply(student5, [1000, 100]);
const student5Treat = student4.treatDey.bind(student5);
const remaining = student5Treat(1000, 100)
// console.log(result2,treatMoney,remaining, treatMoney2);



// this keyword and arrow functions and regular functions
// in a normal function this keyword show access this function but arrow go to level and access window this not access
const student8 = {
    name: 'iqbal', 
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this);
       return this.name + ' is participating in an exam';
    },
    examArrow: () =>{
        console.log(this);
    },
    examNested: () =>{
        const arrow = () => {
            console.log(this);
        }
        arrow();
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
student8.exam();

const student7 = {
    name: 'student7',
    money: 8000
}

student7.exam = student8.exam;
student7.exam();

function clickHandler(){
    console.log('inside click handler', this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})