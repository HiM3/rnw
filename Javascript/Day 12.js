function  outer (){
    document.write("outer function <br>")
    return function (){
        document.write("inner function <br>")
        return function (){
            document.write("nested function <br>")
        }
    }
  }
  const function1=outer()
  const function2=function1()
  const result=function2()
  console.log(result);
  ///closure function with arguments
  function add (a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
  }
  const sum1=add (11);
  const sum2=sum1 (2);
  const output=sum2(3);
  console.log("sum= "+output);
  ///curyying
  const finaloutput=add(1)(2)(3)
  console.log("sum= "+finaloutput);
  
  function out(){
        document.write("outer function <br>");
        function inner(){
            document.write("inner function <br>");
            function inner2(){
                document.write("nested function")
            }
            inner2()
        }
        inner()
    }
    out()