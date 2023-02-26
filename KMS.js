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

function osterreichPick() {
    countryArray.pop()
    countryArray.push("Österreich")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function belgiquePick() {
    countryArray.pop()
    countryArray.push("Belgique")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function belgiePick() {
    countryArray.pop()
    countryArray.push("België")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function schweizPick() {
    countryArray.pop()
    countryArray.push("Schweiz")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function suissePick() {
    countryArray.pop()
    countryArray.push("Suisse")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function denmarkPick() {
    countryArray.pop()
    countryArray.push("Danmark")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function deutschlandPick() {
    countryArray.pop()
    countryArray.push("Deutchland")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function suomiPick() {
    countryArray.pop()
    countryArray.push("Suomi")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function francePick() {
    countryArray.pop()
    countryArray.push("France")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function ukPick() {
    countryArray.pop()
    countryArray.push("United Kingdom")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function irelandPick() {
    countryArray.pop()
    countryArray.push("Ireland")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function nederlandPick() {
    countryArray.pop()
    countryArray.push("Nederland")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function norgePick() {
    countryArray.pop()
    countryArray.push("Norge")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}

function sverigePick() {
    countryArray.pop()
    countryArray.push("Sverige")
    for (let i = 0; i < countryArray.length; i++) {
        countryPick.textContent = countryArray[i]
    }
}