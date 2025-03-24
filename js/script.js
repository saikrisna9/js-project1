
var data = window.localStorage.getItem("userinfo")
var user = JSON.parse(data)
if (data) {
    document.getElementsByClassName("log-user")[0].innerText = user[0]["name"]
}


document.getElementsByClassName("admin")[0].addEventListener("click", () => {
    window.location.assign("adminlogin.html")
})


var packageData = [
    {
        image: "./images/images/united state.png",
        place: "United States",
        description: "Explore the diverse landscapes and vibrant cities of the United States. From the bustling streets of New York City to the breathtaking beauty of the Grand Canyon, there's something for everyone in the USA.",
        price: 999
    },
    {
        image: "./images/images/china.png",
        place: "China",
        description: "Experience the rich history and culture of China. Visit iconic landmarks such as the Great Wall and the Forbidden City, Imperial Palace, The Summer Palace, and sample delicious Chinese cuisine.",
        price: 999
    },
    {
        image: "./images/images/Greece.png",
        place: "Greece",
        description: "Immerse yourself in the ancient history and stunning landscapes of Greece. Explore the ruins of Athens, relax on the beautiful beaches of the Greek Islands, and indulge in delicious Mediterranean cuisine.",
        price: 999
    },
    {
        image: "./images/images/Italy.png",
        place: "Italy",
        description: "Discover the art, culture, and cuisine of Italy. Visit historic cities such as Rome, Florence, and Venice, and sample world-renowned Italian dishes like pasta and gelato.",
        price: 999
    },
    {
        image: "./images/images/france.png",
        place: "France",
        description: "Experience the romance and charm of France. Explore the iconic landmarks of Paris, such as the Eiffel Tower and the Louvre, and indulge in French cuisine and wine.",
        price: 999
    },
    {
        image: "./images/images/jordan.png",
        place: "Jordan",
        description: "Explore the ancient wonders of Jordan. Visit the rock-cut city of Petra, float in the Dead Sea, explore the desert landscapes of Wadi Rum, Ajloun Castle, Karak Castle and Dana Nature Reserve.",
        price: 999
    },
    {
        image: "./images/images/Mexico.png",
        place: "Mexico",
        description: "Experience the vibrant culture and rich history of Mexico. Visit ancient Mayan ruins, relax on the beautiful beaches of Cancun, and sample delicious Mexican cuisine.",
        price: 999
    },
    {
        image: "./images/images/Spain.png",
        place: "Spain",
        description: "Discover the vibrant culture and stunning architecture of Spain. Visit historic cities such as Barcelona and Madrid, explore beautiful beaches, and enjoy delicious Spanish tapas.",
        price: 999
    }
];



var package = document.getElementById("package")

var packageText = document.createElement("div")
packageText.setAttribute("class", "package-text")
package.appendChild(packageText)

var h1tag = document.createElement("h1")
h1tag.innerText = "Packages"
packageText.appendChild(h1tag)

var packageBody = document.createElement("div")
packageBody.setAttribute("class", "package-body")
package.appendChild(packageBody)

for (let i = 0; i < packageData.length; i++) {
    var packageCard = document.createElement("div")
    packageCard.setAttribute("class", "package-card")
    packageBody.appendChild(packageCard)

    var imgg = document.createElement("img")
    imgg.setAttribute("src", packageData[i].image)
    packageCard.appendChild(imgg)

    var packageCardBody = document.createElement("div")
    packageCardBody.setAttribute("class", "package-card-body")
    packageCard.appendChild(packageCardBody)

    var h3tag = document.createElement("h3")
    h3tag.innerText = packageData[i].place
    packageCardBody.appendChild(h3tag)

    var ptag = document.createElement("p")
    ptag.innerText = packageData[i].description
    packageCardBody.appendChild(ptag)

    var rating = document.createElement("div")
    rating.setAttribute("class", "rating")
    packageCardBody.appendChild(rating)

    for (var j = 0; j < 5; j++) {
        var itag = document.createElement("i")
        itag.setAttribute("class", "fa-solid fa-star checked")
        rating.appendChild(itag)
    }

    var h4tag = document.createElement("h4")
    h4tag.innerText = "Price: $" + packageData[i].price
    packageCardBody.appendChild(h4tag)

    var btn = document.createElement("button")
    btn.innerText = "Book Now"
    packageCardBody.appendChild(btn)

    btn.addEventListener("click", () => {
        window.localStorage.setItem("packageInfo", JSON.stringify(packageData[i]))
        window.location.assign("#book")
        window.location.reload();
    })
}


var a = window.localStorage.getItem("packageInfo")
var data = JSON.parse(a)
console.log(data)
document.getElementById("where").value = data.place

bookingArray = []
document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
    var bookingData = {
        name: e.target[0].value,
        mobile: e.target[1].value,
        destination: e.target[2].value,
        members: e.target[3].value,
        startDate: e.target[4].value,
        EndDate: e.target[5].value,
        MemberInfo: e.target[6].value
    }

    bookingArray.push(bookingData)
    window.localStorage.setItem("bookinginfo", JSON.stringify(bookingArray));
    alert("Booking is Sucessfully")
    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
    e.target[3].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
    e.target[3].value = ""


})

contactArray = []
document.forms[1].addEventListener("submit", (e) => {
    e.preventDefault();
    contactData = {
        name: e.target[0].value,
        mobile: e.target[1].value,
        email: e.target[2].value,
        message: e.target[3].value
    }

    contactArray.push(contactData)
    window.localStorage.setItem("contactInfo", JSON.stringify(contactArray))
    alert("Submitted SucessFully")

    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
    e.target[3].value = ""
})