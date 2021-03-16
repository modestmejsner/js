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


let myFunc = function (x,y) { //fuction expression vs function declaration before
    let total = 1;
    for (let index = 0; index < y; index++) {
        total *=x;
    }
    return total;
}

console.log(myFunc(3,3));

}  

