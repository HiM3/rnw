function calc(choice){
    var value1=document.getElementById('value1').value;
    var value2=document.getElementById('value2').value;
    var operation;
    var output;
    switch(choice){
        case 1:
            operation="Addition";
            output=Number(value1)+Number(value2);
            break;
        case 2:
            operation="Subtraction";
            output=(value1-value2);
            break;
        case 3:
            operation="Multiplication";
            output=(value1*value2);
            break;
        case 4:
            operation="Divison";
            output=(value1/value2).toFixed(2);
            break;
        default:
            alert("Invalid choice");
    }
    var result=`The ${operation} of ${value1} & ${value2} = ${output}`;
    document.getElementById('ans').innerHTML=result;
}