var val1=50;
var val2=2;

//arithmetic operator
document.write("Sum="+(val1+val2)+"<br>");
document.write("Sub=",val1-val2+"<br>");
document.write("Mult=",val1*val2+"<br>");
document.write("Div=",val1/val2+"<br>");
document.write("Mod=",val1%val2+"<br>");
document.write("expo=",val1**val2+"<br>");

//assignment operator
//override
var a=40;
console.log(a);
a=20;
console.log(a);

//append
var b=30;
console.log(b);
b+=10;
console.log(b);

//comparison operator
document.write(val1>val2,"<br>");
document.write(val1<val2,"<br>");
document.write(val1>=val2,"<br>");
document.write(val1<=val2,"<br>");
document.write(val1==val2,"<br>");
document.write(val1!=val2,"<br>");
document.write(5=="5","<br>");
document.write(5==="5","<br>");

//logical operator
console.log((val1>val2)&&(val1>val2));
console.log((val1>val2)||(val1>val2));
console.log(!(val1>val2)||(val1>val2));