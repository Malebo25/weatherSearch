function displayTemperature(response){
    console.log(response.data);
    let temperature =document.querySelector("#temp-value");
    let apiTemp=response.data.temperature.current
    temperature.innerHTML=Math.round(apiTemp);

    let cityDisplay=document.querySelector(".weather-app-city");
    cityDisplay.innerHTML=response.data.city

    let date =new Date(response.data.time*1000);

    let dayTime=document.querySelector("#dayTime");

    dayTime.innerHTML=formatDate(date);
    

   
    let humidity =document.querySelector("#humidity");
    let apiHumidity=response.data.temperature.humidity;

    humidity.innerHTML=`${apiHumidity}%`;

    let windSpeed=document.querySelector("#wind");
    let apiWindSpeed =response.data.wind.speed;
    windSpeed.innerHTML=`${apiWindSpeed}km/h`;

    let description =document.querySelector("#description");
    let apiDescription =response.data.condition.description;
    
    description.innerHTML=`${apiDescription}`;
    let weatherIcon =document.querySelector("#weatherIcon");

    weatherIcon.innerHTML =`<img class="icon" src="${response.data.condition.icon_url}" alt="" ></img>`;



}
function formatDate(date){
    let day = date.getDay();
    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let chosenday=days[day];

    let hour  = date.getHours();
    let minutes  =date.getMinutes()

    return `${chosenday} ${hour}:${minutes}, `;
}

function searchApi(city) {
    let key = "t48f904c37f90502d04b44aabcf03oaf";
    let url  =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(url).then(displayTemperature);
}


function search(event){
    event.preventDefault();
    let userCity = document.querySelector("#searchInput");
   
    searchApi(userCity.value);
}


let form = document.querySelector("#formElement");
form.addEventListener("submit",search);