var old_password = "meet";
        var password = prompt("Enter your Password:");
       if(password !=""){
            if(old_password == password){
                var new_password = prompt("Enter Your New Password:");
                if(new_password != ""){
                  if(new_password != old_password ){
                    var conform_password = prompt("Enter The Conform Password:")
                    if(conform_password !=""){
                        if(new_password == conform_password){
                            alert("Your Password Has been changed");
                        }
                        else{
                            alert("Your conform password is not matched to the new password");
                        }
                    }else("Enter the Conform password");
                  }else{
                    alert("Enter the New Password");
                  }
                }else{
                    alert("Enter the new password");
                }
            }else{
                alert("Your password is not matching to your old password");
            }
       }
    else{
        alert("Enter your correct password");
    }