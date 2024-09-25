//4 types of function

//IIFE Function
(function(){
    console.log("IIFE Function");
    })();

//Simple Function
function show(){
    console.log("Simple Function");
}
show();

//Anomoyous Function
var show1 = function(){
    console.log("Anomoyous Function");
}
show1();

//Arrow Function
var show2 = () => {
    console.log("Arrow Function");
}
show2();