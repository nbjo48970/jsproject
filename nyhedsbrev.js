//Nicoline//
function ValidateEmail(input)
{

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailError = document.getElementById("email-error");
  let formInput = document.getElementById("email-input");


if (inArray(input.value)) {
  emailError.innerHTML = "Din e-mail er allerede registreret";
  return false;
}
  if (input.value.match(validRegex)){
    emailError.innerHTML = "Din e-mail er nu registreret";
    emailError.style.color = "green";
    formInput.style.borderColor = "rgb(249, 247, 240)";
    formInput.value = '';
    document.form1.text1.focus();
    return false;
  }
    else {
    emailError.innerHTML = "Indtast gyldig e-mailadresse";
    emailError.style.color = "red";
    formInput.style.borderColor = "red";
    document.form1.text1.focus();
    return false;
  }
}

let regUsers = ["pede@gmail.com", "thomas@mail.dk", "nicoline@mail.com"];
function inArray(inVal){
    for( var i=0, len=regUsers.length; i < len; i++){
        if (regUsers[i] == inVal) return true;
    }
    return false;
}
