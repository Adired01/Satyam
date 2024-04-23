import React from 'react'  
import './WeatherApp.css'

import search_icon from "../Asset Folder/search.png";
import clear_icon  from  "../Asset Folder/cloud_9766189.png";
import snow_icon from "../Asset Folder/snow.png";
import drizzle_icon from "../Asset Folder/rainy_7226910.png";
import humidity_icon from "../Asset Folder/humidity.png";
import wind_icon from "../Asset Folder/wind.png";
import cloud_icon from "../Asset Folder/weather_11356921.png"

const WeatherApp = () => {

    let api_key = "a4266452db5f661bc2fad660985ec2ed";

    const search = async () => {
        const element =document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
        let responce = await fetch(url);
        let data = await responce.json();

        const humidity =document.getElementsByClassName("humidity-percentage");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" km/h";
        temprature[0].innerHTML = data.main.temp+" ºC";
        location[0].innerHTML = data.name;

    }
    return (
         <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search'/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src="{search_icon}" alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src="{cloud_icon}" alt=""/>
            </div>
            <div className="weather-temp"> 24ºC</div>
            <div className="weather-location">Ohio</div>
            <div className="data-container">
                <div className="element">
                    <img src="{humidity_icon}" alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percentage">84%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src="{wind_icon}" alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default WeatherApp
    

