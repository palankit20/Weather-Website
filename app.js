
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "2844050aad5b3136d9f9744a4e03f2dd";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcons =document.querySelector(".weather-icons")


async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "non";
    }
    else{
        

        var data = await response.json();        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    

        if(data.weather[0].main == "Clouds"){
            weatherIcons.src ="image/clouds.jpeg";
        }
    
        else if(data.weather[0].main == "Clear"){
            weatherIcons.src ="image/clears.png";
        }
        
        else if(data.weather[0].main == "Rain"){
            weatherIcons.src ="image/RAin.png";
        }
    
        else if(data.weather[0].main == "Drizzle"){
            weatherIcons.src ="image/Drizzle.png";
        }
    
        else if(data.weather[0].main == "Mist"){
            weatherIcons.src ="image/mist.jpeg";
        }
        
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display ="none";
    
    }

}
checkweather();
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})