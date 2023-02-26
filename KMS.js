function openNav() {
    document.getElementById("con-portal").style.width = "100vw";
  }
  
function closeNav() {
    document.getElementById("con-portal").style.width = "0";
  }

// console.log("hi")

let countryArray = ["Sweden", "Finland", "Norway", "Denmark"]
let countryPick = document.getElementById("country-pick")

for (let i = 0; i < countryArray.length; i++) {
    countryPick.textContent = countryArray[i]
}