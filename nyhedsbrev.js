function ValidateEmail(input) {

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailError = document.getElementById("email-error");

  if (input.value.match(validRegex)){
    emailError.innerHTML = "Din e-mail er nu registreret";
    emailError.style.color = "green";
    document.form1.text1.focus();
    return false;
  }
    else {
      emailError.innerHTML = "Indtast gyldig e-mailadresse";
      emailError.style.color = "red";
    document.form1.text1.focus();
    return false;
  }

}
