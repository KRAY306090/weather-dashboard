var searchBoxEl = document.querySelector("#searchBar");
var cityNameEl = document.querySelector("#city");
var tempEl = document.querySelector("#temp");

var getWeather = function() {
    var city = searchBoxEl.value.trim();
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6f5e2eac18b62704a90a174201285a8`
    )
    .then(response => response.json())
    .then(data => {
        var nameVal = data["name"]
        var tempVal = data["main"]["temp"]

        cityNameEl.innerHTML = nameVal;
        tempEl.innerHTML = tempVal;
    })
    .catch(err => alert("City not found"))
      
};

