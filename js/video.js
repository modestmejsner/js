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
{

    let myName = "Modest"; //primitives

    myName = new String(myName); //seriosly? WOW- BOXING
    myName = myName.toUpperCase(); //boxed to object
    myName = myName.valueOf(); //bierze tylko value i przenosi czyli UNBOXING
    
    console.log(typeof(myName));


    let yourName = new String("Pati");
    yourName = yourName.valueOf();
    console.log(typeof(yourName));


//     console.log(typeof(myName.toUpperCase())); // object
//     myName = myName.toUpperCase(); //back to primitives
//     console.log(typeof(myName)); // string
    
//     let yourName = new String("Patrycja"); //object creation
//   //  yourName.valueOf(); //returns object type
//     let youPrimitiveName = yourName.toUpperCase();
//     console.log(typeof(youPrimitiveName));
//     console.log(typeof(yourName)); //write to console object


}