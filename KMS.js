function openNav() {
    document.getElementById("con-portal").style.width = "100vw";
  }
  
function closeNav() {
    document.getElementById("con-portal").style.width = "0";
  }

// console.log("hi")

let countryArray = ["Danmark"]
let countryPick = document.getElementById("country-pick")

for (let i = 0; i < countryArray.length; i++) {
    countryPick.textContent = countryArray[i]
}

function suomiPick() {
    countryArray.push("Suomi")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}
