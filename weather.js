function displayTemperature(response){
    console.log(response.data);
    let temperature =document.querySelector("#temp-value");
    let apiTemp=response.data.temperature.current
    temperature.innerHTML=Math.round(apiTemp);

    let cityDisplay=document.querySelector(".weather-app-city");
    cityDisplay.innerHTML=response.data.city

}


function searchApi(city) {
    let key = "t48f904c37f90502d04b44aabcf03oaf";
    let url  =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(url).then(displayTemperature);
}


function search(event){
    event.preventDefault();
    let userCity = document.querySelector("#searchInput");
    // let cityDisplay=document.querySelector(".weather-app-city");
    // cityDisplay.innerHTML=userCity.value
    searchApi(userCity.value);
}


let form = document.querySelector("#formElement");
form.addEventListener("submit",search);