var password = document.getElementById("pwd").value;
var address = document.getElementById("address").value;
var country = document.getElementById("countries").value;
var zipCode = document.getElementById("zipCode").value;
var uEmail = document.getElementById("uEmail").value;
var mgen = document.getElementById("male");
var fgen = document.getElementById("female");
var flag = false;

function onClickHandler() {
   var letters = /^[A-Za-z]+$/;
   var numbers = /^[0-9]+$/;
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var uId = document.getElementById("userId").value;
   var uName = document.getElementById("uName").value;
   if (uId == ""){
      document.getElementById("userIdAlert").innerHTML = "*This field is mandatory";
    }
    if (password == ""){
      document.getElementById("pwdAlert").innerHTML = "*This field is mandatory";
    }
    if (uName == ""){
      document.getElementById("nameAlert").innerHTML = "*This field is mandatory";
    }
    if (zipCode == ""){
      document.getElementById("zipAlert").innerHTML = "*This field is mandatory";
    }
    if (uEmail == ""){
      document.getElementById("emailAlert").innerHTML = "*This field is mandatory";
    }
  
 for (let index = 0; index < uId.length; index++) {
    if(uId.slice(index,index + 1) == " ", uId.length > 12 || uId.length < 5)
    {
      document.getElementById("userIdAlert").innerHTML = "*User Id must between 5 to 8 and did not contain Space";
      document.getElementById("userId").value = "";  
    }
    if(password.slice(index,index + 1) == " ", password.length > 12 || password.length < 7)
    {
      document.getElementById("pwdAlert").innerHTML = "*Password must between 7 to 12 and did not contain Space";
      document.getElementById("pwd").value = "";  
    }
  }
    if (uName.match(letters) && uName != "") {
      return true; 
      }
      else {
          document.getElementById("nameAlert").innerHTML = "*Name not be empty and only contain Alphabets"
      }
    if (zipCode.match(numbers)) {
      return true;
    }
    else {
      document.getElementById("zipAlert").innerHTML = "*ZIP Code not be empty and only contain numbers"
    }
    }