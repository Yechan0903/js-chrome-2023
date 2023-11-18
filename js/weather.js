const API_KEY = "e48c9cedd3b904ce3d80f88a33babc08";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:nth-child(1)");
        const city = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:nth-child(3)");
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        temp.innerText = `${data.main.temp}'C`;
    });
}
function onGeoError() {
    alert("can't find you");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);