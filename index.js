

const d = new Date();

let hours = d.getHours();
let min = d.getMinutes();
let day = d.getDay();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayString = days[day];
let date = d.getDate();
let month = d.getMonth();
let Year = d.getFullYear() % 100;
let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let monthString = months[month];
let Time = hours + ":" + min + "-" + dayString + "," + date + monthString + "'" + Year;

document.getElementById('date').innerHTML = Time;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '60324d844emsh21cb2af213f841ep1df41ejsnf04d3a32a779',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    document.getElementById('city-name').innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            wind_speed.innerHTML = response.wind_speed
            temp.innerHTML = response.temp
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp

            if(response.temp < 0 && response.humidity < 60 && response.wind_speed < 64){
                document.getElementById('main-image').style.backgroundImage = "url(img/snowy.jpg)";
                document.getElementById('w-image').src = "img/Snowy.png";
                document.getElementById('weather-name').innerHTML = "Snowy";
            } else if (response.temp > 0 && response.temp < 20 && response.humidity < 60 && response.wind_speed < 64){
                document.getElementById('main-image').style.backgroundImage = "url(img/cloudy.jpg)";
                document.getElementById('w-image').src = "img/Snowy.png";
                document.getElementById('weather-name').innerHTML = "Cloudy";
            } else if (response.temp >= 20 && response.humidity > 60 && response.wind_speed < 64) {
                document.getElementById('main-image').style.backgroundImage = "url(img/sunny.jpeg)";
                document.getElementById('w-image').src = "img/Sunny.png";
                document.getElementById('weather-name').innerHTML = "Sunny";
            } else if (response.temp < 20 && response.humidity > 60 && response.wind_speed < 64) {
                document.getElementById('main-image').style.backgroundImage = "url(img/rainy.jpg)";
                document.getElementById('w-image').src = "img/Rainy.png";
                document.getElementById('weather-name').innerHTML = "Rainy";
            } else if (response.wind_speed > 64){
                document.getElementById('main-image').style.backgroundImage = "url(img/tornado.jpeg)";
                document.getElementById('w-image').src = "img/Tornado.png";
                document.getElementById('weather-name').innerHTML = "Tornado";
            }

        })
        .catch(err => console.error(err));
}

document.getElementById('submit').addEventListener("click", (e) => {
    getWeather(document.getElementById('searchbar').value)
})

getWeather("Delhi");

document.getElementById('Mumbai').onclick = function() {
    getWeather("Mumbai")
}
document.getElementById('Kolkata').onclick = function() {
    getWeather("Kolkata")
}
document.getElementById('Chennai').onclick = function() {
    getWeather("Chennai")
}
document.getElementById('Bangalore').onclick = function() {
    getWeather("Bangalore")
}
