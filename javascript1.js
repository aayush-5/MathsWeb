function formValidation()
{
var uname = document.registration.Name;
var uemail = document.registration.Email;
var inputtxt = document.registration.Number;

if(allLetter(uname))
{
if(ValidateEmail(uemail))
{
if(PhoneNumber(inputtxt))
{	
}	
} 
}
return false;
}

//code for name validation
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

//code for email validation

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

//code for number validation

function PhoneNumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }
