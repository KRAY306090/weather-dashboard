var searchBoxEl = document.querySelector("#searchBar");
var cityNameEl = document.querySelector("#city");
var tempEl = document.querySelector("#temp");
var humidityEl = document.querySelector("#humidity");
var windEl = document.querySelector("#wind");
var now = moment().format("(MM/DD/YYYY)");
var forecastContainerEl = document.querySelector("#forecast");
var getForecast = function(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a6f5e2eac18b62704a90a174201285a8`
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
    
    for (i = 1; i <= 5; i++) {
        var date = data["list"][i]["dt_txt"];
        var description = data["list"][i]["weather"]["0"]["description"];
        var temp = data["list"][i]["main"]["temp"];
        var humidity = data["list"][i]["main"]["humidity"];

        var newCard = document.createElement("div");
        newCard.setAttribute("class", "card bg-primary text-white");
        newCard.innerHTML =  "<div class='card-body'><h5 class='card-title'>" + date + "</h5><i class='fa fa-sun-o' aria-hidden='true'></i><p class='card-text'>Temp: " + temp + "</p><p class='card-text'>Humidity: " + humidity + "%</p></div>";
        forecastContainerEl.appendChild(newCard);
    }
})
};

var getWeather = function() {
    
    var city = searchBoxEl.value.trim();
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6f5e2eac18b62704a90a174201285a8`
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var nameVal = data["name"]
        var tempVal = data["main"]["temp"]
        var humidityVal = data["main"]["humidity"]
        var windVal = data["wind"]["speed"]
        //var UV = data[]
    
        //var iconVal = data["weather"]["0"]["icon"]
        

        cityNameEl.innerHTML = nameVal + " " + now; //+ " " + iconVal;
        tempEl.innerHTML = "Temperature: " + tempVal + "\u00B0" ;
        humidityEl.innerHTML ="Humidity: " + humidityVal + "%";
        windEl.innerHTML = "Wind Speed: " + windVal + "mph";
        //document.querySelector("#card").style.display = "block";
    })
    .catch(err => alert("City not found"));
    getForecast(city);
};

