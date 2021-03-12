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
    

    let position = {
        x: 10,
        y: 20
    }
    let k = "string";
    let l = k;
    //primitives copied its values to the next variable

    let myPosition = position; //point to the same object any changes reflect in both
    console.log(position);
    console.log(myPosition);

    position.x = 100;
    console.log(position);
    console.log(myPosition);
}


