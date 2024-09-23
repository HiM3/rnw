var i;
// var a=5;//=prompt("Enter value: ");
var ans;
// for(i=1;i<=10;i++){
//     ans=a*i
//     console.log(a+"*"+i+"="+ans);
// }
/*for(i=1;i<=10;i++)
            {
                ans=n*i;
                 System.out.println(+n+"*"+i+"="+ans);
            }*/
function table(){
    let n=document.getElementById("no").value;
    for(i=1;i<=10;i++)
    {
        ans = n*i;
        console.log(n+"*"+i+"="+ans);
    }
    return false;
}
// console.clear();

//while loop
// function table(){
//     // let n=document.getElementById("no1").value;
//     let n=document.getElementById("no1").value;
//     i=1;
//     while(i<=10)
//     {
//         ans = n*i;
//         document.write(n+"*"+i+"="+ans,"<br>");
//         i++;
//     }
//     return false;
// }