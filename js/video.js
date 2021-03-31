// // document.getElementById("button").onclick = function() {
// //     document.getElementById("confirm").innerHTML = "Order placed. Check email for confirmation";
// //     document.getElementById("button").style.display = "none";
// // }
// var username = prompt();
// alert(username);
// console.log(username);
// /* 
// Line1
// Line2
// */
// console.log(username);

// (function () {
//     //IIFE Inmidiete invoke function expression
//     // age = 5 without var szuka w 1 lini wyżej i nie znajduje to tworzy w 1 wyzej czyli global
//     function test() {
//         var age = 1;
//         function test1() {
//             age = 5   
//            } 
//            test1();
//     } 
// test();
// })();

// (function (params) {
    
// })();

// var y = 10; //global but in window
// let x = 10; //global without window better to use let

// {
// //block
//     let z = 10;
//     console.log(z*z);
//     var k = 10000;
//     let x = 5;
//     console.log(x);
// }
// console.log(x);

// {
//  let x = 5;
//  let b = "10";
//  x = x + b;
//  console.log(x);

// }

// //primitives
// //object

// let tacos = null; //null when we decide to be null
// // undefined when computer knows about it

// let person  = {

// name: "Modest", //key:value
// age: 40, //key:value
// favFood: "Herbalife...", //key:value
// fun: function() {
//     console.log("Yeh");
//     }
// }

// // person.fun();
// // person.age;

// let now = new Date;
// let grades = ["A","B","C",'D','E','F'];
// {

//     let myName = "Modest"; //primitives

//     myName = new String(myName); //seriosly? WOW- BOXING
//     myName = myName.toUpperCase(); //boxed to object
//     myName = myName.valueOf(); //bierze tylko value i przenosi czyli UNBOXING
    
//     console.log(typeof(myName));


//     let yourName = new String("Pati");
//     yourName = yourName.valueOf();
//     console.log(typeof(yourName));


// //     console.log(typeof(myName.toUpperCase())); // object
// //     myName = myName.toUpperCase(); //back to primitives
// //     console.log(typeof(myName)); // string
    
// //     let yourName = new String("Patrycja"); //object creation
// //   //  yourName.valueOf(); //returns object type
// //     let youPrimitiveName = yourName.toUpperCase();
// //     console.log(typeof(youPrimitiveName));
// //     console.log(typeof(yourName)); //write to console object


// }

{
    // let number = 9007199254740991;
    // console.log(Number.isSafeInteger(number))

    // let number =  -9007199254740991;
    // console.log(Math.pow(number,101)); 
    // console.log(1/0); 
    // number = 5.5;
    // console.log(number); 


    // let slicesPizza = 10;
    // // console.log(slicesPizza % 4.25); //WOW feature modulo decimal value
    // // slicesPizza++;     
    // // console.log(slicesPizza); 
    // // ++slicesPizza;
    // // console.log(slicesPizza);

    // // let newSliecesPizza = --slicesPizza; //++sliecesPizza jest najpierw zincrementowana a pozniej przypisana
    // // let newnewSliecesPizza = slicesPizza--; //sliecesPizza++ jest najpierw przypidana ze starą wartością do nowej a pozniej zincrementowana w sobie samej jedynie
    
    // // console.log(newSliecesPizza);
    // // console.log(newnewSliecesPizza);
    // slicesPizza *= 5;
    // console.log(slicesPizza)

    // let x =5;
    // let y ="10.9999 plus something";
    // //y = Number(y); //.parseInt(y)
    // x = Number.parseInt(y) //gives a 10
    // z= Number.parseFloat(y) //gives a 10.999
    // console.log(x+z);

    // let input = prompt("Put any number");
    // console.log("Decimal: " + input);
    // console.log("Binary: " + Number.parseInt(input,2));
    // console.log("Octal: " + Number.parseInt(input,8));
    // console.log("Hex: " + Number.parseInt(input,16));

    // let input = Number(prompt("Put decimal number"));
    // console.log("Binary: " + input.toString(2));
    // console.log("Octal: " + input.toString(8));
    // console.log("Hex: " + input.toString(16));

    // let myname = "Modest";
    // console.log(`My name is  ${myname}`);

    // let test = "Very long string adhlasdhlakshdl laksdl ksdljk lakjsdlaksjd lajsjdl akjsdlkajdlasdjkla." //or toggle word wrap

    // console.log(test);

    // var favFood = "tackos";
    // console.log(favFood.concat(" los pornox"));
    // console.log(favFood);

    // let content = " bla bla number bla bla";
    // search1 = "number";
    // search2 = "string";

    // console.log(content.includes(search2));

    //     let content = " bla bla number bla bla number";
    // search1 = "number";
    // search2 = "string";

    // console.log(content.indexOf(search1,10));
    // console.log(content.lastIndexOf(search1,10));

    // console.log(content.split(" "));
    

    // let position = {
    //     x: 10,
    //     y: 20,
    //     print: function () {
    //         console.log(`X: ${this.x}, Y: ${this.y}`);
    //     },
    //     myObject : {
    //         sweetProperty: "Hello"
    //     }
    // }
    // let k = "string";
    // let l = k;
    // //primitives copied its values to the next variable

    // let myPosition = position; //point to the same object any changes reflect in both
    // console.log(position);
    // console.log(myPosition);

    // position.x = 100;
    // console.log(position);
    // console.log(myPosition);

    // function print() {
    //     'use strict';
    //     console.log(this);
    //    // console.log(`X: ${this.x}, Y: ${this.y}`);
    // }
    // print();
    // console.log(position.myObject.sweetProperty);
    // position.print();


    // let name = prompt();
    // if(name === 12) //3 jest najbezpieczniejsze
    // //
    // {

    //         console.log("Welcome");
    // }
    // else 
    // if(name ==="Sally") {}
    // else 
    // if(name ==="Pati") {}
    // //else //optional 
    // //{}

    // //    5 różne od "5" sprawdza typy danych

//   let age = prompt("Age?");
//   let name = prompt("Name?");
//     if (age<13) //&&  !(name ==="Caleb")) //better to put it below
//     {
//         if ((name ==="Caleb")) {
//             console.log("Welcome"); 
//         }
// }

// let name = prompt("What is your name?");
// switch (name) {
//     case "Caleb":
//         console.log("Welcome");
//         break;
//     case "Claire":
//         console.log("Get out here");
//         break;
//     default:
//         console.log("I guess your are welcome...");
//         break;
// }

// let name = prompt("What is your name?");
// switch (name) {
//     default:
//         console.log("I guess your are welcome...");
//         break; //without this next is called any way regardless of switch
//     case "Caleb":
//     case "Claire":
//         console.log("Get out here");
//         break;
//}

// if (name === "Claire") {console.log('Hello');}
// console.log('This is everytime ');

// let name = prompt("What is my name?");
// //let points = name === "Modest" ? 10 : 0; //Ternary Operator
// //console.log(points);
// let points = name === "Modest" ? console.log("10") : console.log("0"); //Ternary Operator

// let i =0; //initialiozation
// while (i<10) { //condition
//     console.log(i);
//     //update
//     i++;
// }

// let i = 1000; //init
// do { //executed at least ONES
//     console.log(i);
//     i++; //update
// } while (i<10); //condition

// for (let index = 0; index < 6; index++) {
//     console.log(index);  
// }

// let password;
// do {
//     password = prompt("What is the passcode?");
// } while (password.toLowerCase() !== "let me in");
//     console.log("in");
// // 

// let list = [1,2,3,4,5,6];
// let myString = "Search this c string cc baby c";
// let chatToSearch = "c";
// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     if (myString[index]==='c') {
//         console.log(element + " is found at index " + index);
//         break;
//     }
// }
//break breaks the loop


// let myString = "Search this c string cc baby c";
// let chatToSearch = "c";
// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     if (myString[index]==='a') {
//      continue;
//     }
//     console.log(myString[index]);
// }

// for (let i = 0; i < 10; i++) {
//     for (let k = 0; k < 10; k++) {
//         console.log(i,k);
//     }
// }

// for (let i = 0; i < 10; i++) {
//     for (let k = i; k < 10; k++) {
//         console.log(i,k);
//     }
// }
// let d = document.getElementById("destination");
// for (let i = 0; i < 10; i++) {
//     for (let k = i; k >= 0; k--) {
//         d.append(k + " ");
//     }
//     let br = document.createElement('br');
//     d.appendChild(br);
// }

// let ages = [12,34,15];
// ages.length = 10;
// ages[9] = 9;
// console.log(ages);
// ages[11] = 11;
// console.log(ages);


// let stuff = [12, "string", function doSomething() {    },[1,2,3] ]

// let grades = [
// [36,12,44], [100,100,100],[12,13,14]
// ]
// console.log(grades[2][1])

// let grades = [12, "c", {}, function () {
//     console.log("hello");
// }]
// grades[3]();

// let grades = [];
// grades[0] = 12;
// grades[1] = 122;
// grades[40] = 123;
// grades.length = 2;
// console.log(grades);

// let grades = [15, 4, 4, 15, 12, 15, 65, 34];
// grades.length = 30;
// grades[50] = 50;

// let found = false;
// let largest = grades[0];

// for (let i = 0; i < grades.length; i++) {
//     if (grades[i]!== undefined) {
//         found = true
//         console.log(grades[i]);        
//     }
// }


// for (let i = 0; i < grades.length; i++) {
//     if (grades[i]> largest) {
//         largest = grades[i]    
//         found = true;
//     }
// }

// if (found) {
//     console.log(largest);
// }
// let total = 0;
// let count = 0;
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] !== undefined) {
//         //legit value
//         count++;
//         total += grades[i];
//     }
// }
// let avg = total/count;
// console.log(avg);


// let grades = [];

// while (true) {
//     let input = prompt("Add a grade");
//     if (input === "q" || input === null) {
//         break;
//     }
//     grades.push(input);
//     console.log(grades);

grades = [
    [ 0, 1, 11, 2, 32 ],
    [ 0, 1, 11, 2, 32, 21, 45, 56, 5, 8],
    [ 0, 10, 1, 21, 3, 2, 3, 1, 3, 2]
    ]; 

// //console.log(grades.sort());
// //console.log(grades.sort(function (a,b) {return a - b} ));
// // console.log(grades);
// // console.log(grades.reverse());
// // console.log(grades);
// // grades.fill(-1,0, grades.length);
// // console.log(grades);
// // grades.copyWithin();
// gradesB = ["df","adsad","adadsa"]

// console.log(grades.concat(gradesB)); //Does NOT Change the array
// console.log(grades)

// console.log(grades.push(13)); //changes the array
// console.log(grades)

// console.log(grades + gradesB); //returns string with ',' between

// console.log(grades.includes(13)); //true/false
// console.log(grades.indexOf(11)); //number
// console.log(grades.join()); 
// console.log(grades.join(" ")); 
// console.log(grades.join("/")); 

// gradess = [12, 123, 123, 123, 123 ,123 ,123 ,123 ,123 ,11134, 13134245234525234234];
// grades.slice(3,5) //3 is included but 5 is excluded

// total = 0;
// grades.forEach(element => {
//     total += element;
// });

// console.log(Number.isSafeInteger(total));
// console.log(total);

// grades.forEach(function(element, i, array) {
//     console.log(element, i, array);
// })


// grades.forEach(

//     function(row) {
//         row.forEach(function(column) {
//         console.log(column);
//         });
//         console.log("~~~~~~~~~~~~~~~~~");
//     }
// )


// outerLoop: for (let i = 0; i < grades.length; i++) {
//     for (let k = 0; k < grades[i].length; k++) {
//         console.log(grades[i][k]);
//         if (grades[i][k] === 56) {
//              console.log("Found it")
//         //continue outerLoop;  //goes to outerloop
//         break outerLoop; //end of the outerLoop          
//         }
      
//     }~
//     console.log("~ ~~~~~~~~~~") //this code is ignore with continue outerLoop
//     //this code is not ignored with a break
// }


// var valentine = new Date(); // <- this is constructor special function to return object
// var valentine1 = new Date(1990, 11 ); //11 os zero based so it is December
// //UNIX Epoch Jan 1 1970
// var valentine2 = new Date(0); //11 os zero based so it is December


// console.log(valentine2); 


//let myDate = new Date(2020,12); //January 2021
// let myDate = new Date(10000); ///10  sekund 10 000 milisekund to 10 sekund
// let time = Date.now(); //1615816933366
// console.log(time);

// let start = Date.now();
// let x = 0;
// for (let index = 0; index < 10000000000; index++) {
//     x=x+index;
    
// }
// let end = Date.now();
// let total = end - start;

// console.log(total + "in milisekunds");

// let before = new Date(2020,10,15);
// let after = new Date(2020,10,20);

// let oneDay = 1000* 60 * 60 * 24;

// let days = (after - before)/oneDay;
// console.log(days);



// let myDate = new Date("12 Januarry 1995 00:15:54 GMT");
// console.log(myDate);

// let myDate = new Date("1997-10-01");
// console.log(myDate);

// let myDate = new Date(1997,10,01,10,10,10);
// let myDate1 = new Date(Date.UTC(1997,10,01,10,10,10));

// // console.log(myDate, myDate1);
// // console.log(myDate.getMonth());

// console.log(window);



// function dispName(x) {
//     x = {}; //new object created; // więc tworzymy nowy object bez tego jest przekazywanie przez referencje czyli zmieniamy object 
//     return x.name = "Modest"
// }
// let myObject = {name: "Pati"}
// console.log(dispName(myObject)); //przekazujemy object wiec przez referencje
// console.log(myObject.name);

// function doSomething(x) {
//         return x();
// }

// let myFunc = () => 5 * 5;
// let y = doSomething(myFunc); // no need to () because it is invoked inside doSomething
// console.log(y);

// //a function expression
// function doSomething(x) {
//         console.log('Done');
// }


// setTimeout(doSomething, 2000); //a synchronized // after 2sec setTimeout calls doSomething
// //ajax asynchronized

// //calllback is call back function os a result of function


// let myFunc = function (x,y) { //fuction expression vs function declaration before
//     let total = 1;
//     for (let index = 0; index < y; index++) {
//         total *=x;
//     }
//     return total;
// }

// console.log(myFunc(3,3));

// var x;
// console.log(x);
// x = 10;

//doStuff(); nie możemy użyć wcześniej w function expression

// function doStuff() { //function declaration //body is hoisted as well
//     console.log('hej');
// }

// var doStuff = function() { //function expression //body is NOT hoisted
//     console.log('hej');
    
// }

// doStuff(); //a tutaj już możemy

//     function pow(x,y) { //function expression is ones we assigned the function into variable!
//     let total = 1;
//     for (let index = 0; index < y; index++) {
//         total *=x;
//     }
//     return total;
// }

// let coolFunctions = [pow]
// console.log(coolFunctions[0](3,3));

// let mathFunctions  = {power: pow};
// console.log(mathFunctions.power(3,3));

// pow.description = "WIll raise numbers to power "; //dodanie propertasa do funkcji - WOW WOW
// console.log(pow.description);

// function callbackExpression(callback){
//     return callback(3,5);
// }

// console.log(callbackExpression(pow));

// function returnAFunction() {
//     return pow;
// }

// console.log(returnAFunction()(10,3));


//     pow.calculated = [];
//     function pow(x,y) {
//         let total = 1;
//         for (let index = 0; index < y; index++) {
//         total *=x;
//         }
//     pow.calculated.push(total);
//     console.log(pow.calculated);
//     return total;
// }


// pow(3,3);
// pow(3,3);
// pow(10,3);



// pow.calculated = {}; //object is a key: value pair
// function pow(x,y) {
//     let stringVersion = x + '^' + y;
//     console.log(stringVersion);

// if (stringVersion in pow.calculated) {
//     console.log("found it!");
//     return pow.calculated[stringVersion];
// }

//     let total = 1;
//     for (let index = 0; index < y; index++) {
//     total *=x;
//     }
// //pow.calculated.push(total);
// pow.calculated[stringVersion] = total;
// console.log(pow.calculated);
// return total;
// }


// pow(3,3);
// pow(3,3);
// pow(10,3);


// function pow(x,y, ...extra) {

//     console.log(extra);

//     //if (y == undefined) { y=2}
    
//     y = typeof y ==="undefined" ? 2 : y;
//     let total = 1;
//     for (let index = 0; index < y; index++) {
//     total *=x;
//     }
//     return total;
// }

// // console.log(pow());
// // console.log(pow(4,2,3,4));

// console.log(pow(3,2, 2, 45,67));


// function largestFunction(x, ...extra) {
//     console.log(arguments);
//     console.log(this);
//     let largest = x;
//     for (let i = 0; i < extra.length; i++) {
//         if (largest < extra[i]) {
//             largest = extra[i];
//         }
//     }
//     return largest;
// }
// console.log(largestFunction(10,2,3,4,50,1000, 10, 123));


// function x(a,b) {
//     console.log(this);
// }

// x(1,2);

// let me = {
//     name: "modest",
//     outputMe: function() {
//         console.log(this);
//         console.log(this.name); //only inside the function
//     }
// };

// me.outputMe();

// }  

// let me = {
//     name: "modest",
//     outputMe: outputMe
// };

// function outputMe() { 
//     "use strict"; //when we call it as a function working //when we call it as a method not working <undefinded>
//     console.log(this);
// };

// function outputMeStrict() {
//     'use strict';
//     console.log(this);
// ;}

// function Person() {
//     this.name = "Modest";
//     console.log(this);
// }

// me.outputMe(); //method
// outputMe(); //function - "this" point to window object
// outputMeStrict(); //undefined

// let person = new Person(); ///working inside constructor



// function doStuff(input, input1) {
//     console.log(input, input1);
//     console.log(this);
// }

// doStuff.call("Modest",5, 10); //call methods takes first parameter to modyfie this and parameters are not arrays but seperate arguments



// function doStuff(input, input1) {
//     console.log(input, input1);
//     console.log(this);
// }
// let args = [5,10];
// doStuff.apply("Modest", args); //apply methods takes first parameter to modyfie this and parameter are array


// function doStuff(input, input1) {
//     console.log(input, input1);
//     console.log(this);
// }
// let me = {name: "Modest"}
// let newFunction = doStuff.bind(me, 5, 10); //bind method creates new function so we need to assing it to something
// newFunction();

// // "this" is named also function contekst

// function cube(x) {
// return x*x*x;
// }
// console.log(cube(5));    


// let cubArray = (x) =>  x*x*x;
// console.log(cubArray(5));    

// cubArray = (x) => {
//     console.log(x);
//     return x*x*x;
// };

// console.log(cubArray(5));    



// let arrow = () => this;
// function normal() {
//     return this;
// }
// console.log(arrow());
// console.log(normal());

// let functions = {
//     arrow: arrow,
//     normal: normal
// }

// console.log(functions.arrow());
// console.log(functions.normal());




// let arrow = () => this;
// function normal() {
//     return this;
// }
// console.log(arrow());
// console.log(normal());

// let functions = {
//     this: this,
//     arrow: arrow,
//     normal: normal,
//     arrowTest: () => this
// }

// console.log(functions.arrow());
// console.log(functions.normal());
// console.log(functions.arrowTest());
// console.log(functions.this);

// function normal() {
//     return this;
// }
// let arrow = () => this;
// let newFunc = arrow.bind("hello"); //we were not able to override this by hello 
// console.log(newFunc()); //returns still "this" so binding the arrow fuction is useless,

// console.log(normal.bind("this")()); //binding creates the new function and it usefull for non-arrow fucntions





// function fact(x) {
//     let total = x;
//     for (let index = x-1; index > 1; index--) {
//         //console.log(total);
//        total *= index;
//     };
//     return total;
// }

//console.log(fact(5));

//document.getElementById("lemons")
//.onclick = () => {console.log("Clicked")};

//document.getElementById("lemons")
//onmouseover = () => {console.log("onmauseover")};



// try {
//     doensotexist;
    
// } catch (e) {
//     console.log(e, "error");
// }
// finally {

//     console.log("zawsze się wykona");
// } 

// console.log("a tutaj dalszy krok");


// function doSthng() {
//     throw {error: "This broke, code: -1"}
// }

// try {
//     doSthng();
// } catch (error) {
//     console.log(error);
//     console.log("error");
// }
//  finally {
//     console.log("Wrapping this up");
     
//  }

// function doSthng() {
//     throw {error: "This broke, code: -1"}
// }

// // doSthng();

// function doSthng() {
//     throw new Error();
// }
// doSthng();



//============================= object oriented programming ============================================

// function User(name, interests) { //capital U as User //the best way to create a constructor
//     //console.log(this);
//     this.name = name;
//     this.interests = interests;
//     //this.method = nie poleca się wrzucać metod do konstruktora 

//     //console.log(this);

//     this.outputStuff = function() { 
//         console.log("My name is : ", this.name, this.interests);
//     } //every time when we create object we create an method -- it is NOT efficient
// }

// User.prototype.greet = function() { 
//     console.log("My name is : ", this.name, this.interests)
// } //this is available for every User and it is created only ONES //MEMORY Efficiency

// function newUser(name, interests) { //Factory Function //old way to do this/ we can see it but no need to use it
//     let person = {
//     name: name,
//     interests: interests
//     };
//     return person;
// }

// let me = new User("Modest", ["eating","cooking","walking"]);
// let you = new User("Caleb", ["driving","running"]);
// me.membership = "Gold";
// console.log(me);
// console.log(you);


//============================= inharitance ============================================

// let me = { 
//     name: "Modest" 
// };

// let x = new Object()
// console.log(Object.getPrototypeOf(x));

// {
//     let user = {
//         active: false,
//         sayHello: function() {
//             return this.name + " says hi!";
//         }
//     };

//     let student = {
//         name: "Peasant student",
//         major: "English"
//     };

//     let teacher = {
//         name: "Caleb",
//         teaching: ["math", "science"]
//     }

//     Object.setPrototypeOf(teacher,user);
//     Object.setPrototypeOf(student,user);

//     student.active = true;

//     console.log("teacher",teacher.sayHello()); //we can see it and its set to true
    
//     console.log("student",student.sayHello());

// }


//============================= polimorphism ============================================


// {
//     let user = {
//         active: false,
//         sayHello: function() {
//             return this.name + " says hi!";
//         }
//     };

//     let student = {
//         name: "Peasant student",
//         major: "English"
//     };

//     let teacher = {
//         name: "Caleb",
//         teaching: ["math", "science"],
//         sayHello: function() {
//             let message = this.name + " teaches ";
//             this.teaching.forEach(function(e) {
//                 message += e + ",";
//             })
//             return message;
//         }
//     }

//     Object.setPrototypeOf(teacher,user);
//     Object.setPrototypeOf(student,user);

//     student.active = true;

//   //  console.log("teacher",teacher.sayHello()); //we can see it and its set to true
    
//   //  console.log("student",student.sayHello());

//     let newMember = [teacher, student];

//     newMember.forEach(function(e) {
//         console.log(e.sayHello());
//     })
//     console.log("Teacher hasOwnProperty? ", teacher.hasOwnProperty("active") );//checking only for its own property but no inherited properties
//     console.log("Name in teacher? ", "active" in teacher ); //check the property in object using in keyword // with inherited properties too
//     console.log("Name in teacher? ", teacher.name  !== undefined);
//     console.log(teacher);

//     let properties = [];
//     for (let prop in teacher) {
//         if (teacher.hasOwnProperty(prop)) {
//             properties.push(prop);
//         }
//     }
//     console.log(properties);
// }




    function User() {
        this.active = false;
        }
    User.prototype.sayHello = function() {
                   return this.name + " says hi!";
        }
   function Student(name, major) {
        this.name = name ;
        this.major = major ;
        }    
    Student.prototype = new User();

    function Teacher(name, teaching) {
        this.name = name;
        this.teaching = teaching;
        }
    Teacher.prototype = new User();
    Teacher.prototype.sayHello = function() {
        return "Teacher says hi!";
    }

        let student = new Student("Peasant student","English");
        let teacher = new Teacher( "Caleb", ["math", "science"]);
        console.log(student,teacher);
        
        console.log(teacher instanceof Teacher);
        console.log(teacher instanceof User);
        console.log(teacher instanceof Student);

        if (teacher instanceof Student) {
            console.log("yep");
        }
        else 
        {
            console.log("nope"); 
        }
         function doSthng(user) {
            if (user instanceof User) {
                return 5;
            }
            return -1;
    }
        console.log(doSthng("teacher"));

    //     Object.setPrototypeOf(teacher,user);
    //     Object.setPrototypeOf(student,user);
    
    //     student.active = true;
    
    //   //  console.log("teacher",teacher.sayHello()); //we can see it and its set to true
        
    //   //  console.log("student",student.sayHello());
    
    //     let newMember = [teacher, student];
    
    //     newMember.forEach(function(e) {
    //         console.log(e.sayHello());
    //     })
    //     console.log("Teacher hasOwnProperty? ", teacher.hasOwnProperty("active") );//checking only for its own property but no inherited properties
    //     console.log("Name in teacher? ", "active" in teacher ); //check the property in object using in keyword // with inherited properties too
    //     console.log("Name in teacher? ", teacher.name  !== undefined);
    //     console.log(teacher);
    
    //     let properties = [];
    //     for (let prop in teacher) {
    //         if (teacher.hasOwnProperty(prop)) {
    //             properties.push(prop);
    //         }
    //     }
    //     console.log(properties);

    // let list = document.childNodes[1].childNodes[2].childNodes[7];
    // console.log(list);
    // console.log(list.parentElement);
    // console.log(list.nextSibling.nextSibling);
    // // }

// let list = document.getElementsByTagName("li");
// console.log(list);

// let list = document.getElementsByClassName("border");
// console.log(list);

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// console.log(paragraphs[1].childNodes[0].childNodes[0].nodeValue = 'llamas');

// let list = document.getElementsByTagName("ol");
// console.log(list);
// let ourList = list[0];
// console.log(ourList);

// ourList.onmouseover = function() {
//     console.log("mouse over");
//     //ourList.childNodes[1].childNodes[0].nodeValue = "House";
//     document.getElementById("home").innerHTML = "House";
// }

// let button = document.getElementById("clickme");
// button.onmouseenter = function() {
//     button.innerHTML = "revealed";
//     ourList.hidden = false;
// }
// button.onmouseleave = function() {
//     button.innerHTML = "hover me over";
//     ourList.hidden = true;
// }

// document.getElementById("input").value = "!!!!!";
// console.log(document.getElementById("input").hasAttribute("tacos"));
// console.log(document.getElementById("input").getAttribute("TaCoS"));

let button = document.getElementById("clickme");
button.onclick = function() {
    let node = document.createElement("li");
    console.log(node);
    node.appendChild(document.createTextNode(
        document.getElementById("input").value
    ));
    document.getElementById("items").appendChild(node);
}





























































































}
