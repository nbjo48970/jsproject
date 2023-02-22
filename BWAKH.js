function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function myDrop() {
  document.getElementById("myDropdown").classList.toggle("lookatmenow");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('lookatmenow')) {
        openDropdown.classList.remove('lookatmenow');
      }
    }
  }
}

var help = ["Produkter", "Brands", "FAQ", "Fragt", "Smiley-ordning"];

function helpMe()  {
  var p = document.getElementById
}
