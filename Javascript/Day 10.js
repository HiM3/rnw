function add() {
    var v1 = document.getElementById('v1').value;
    var v2 = document.getElementById('v2').value;
    v1 = Number(v1);
    v2 = Number(v2);
    console.log(v1 + v2);
    var result = `Addition of ${v1} and ${v2} = ${v1 + v2}`;
    document.getElementById('a').innerHTML = result;
}
function sub() {
    var v1 = document.getElementById('v1').value;
    var v2 = document.getElementById('v2').value;
    console.log(v1 - v2);
    var result = `Subtraction of ${v1} and ${v2} = ${v1 - v2}`;
    document.getElementById('a').innerHTML = result;
}
function multi() {
    var v1 = document.getElementById('v1').value;
    var v2 = document.getElementById('v2').value;
    console.log(v1 * v2);
    var result = `Multiplication of ${v1} and ${v2} = ${v1 * v2}`;
    document.getElementById('a').innerHTML = result;
}
function div() {
    var v1 = document.getElementById('v1').value;
    var v2 = document.getElementById('v2').value;
    console.log(v1 / v2);
    var div =(v1/v2).toFixed(4);
    var result = `Division of ${v1} and ${v2} = ${div}`;
    document.getElementById('a').innerHTML = result;
}