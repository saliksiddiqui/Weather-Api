import React from 'react'
import './App.css'

const ShowData = ( {weatherData} ) => {
    console.log('insideshowcomp',weatherData);
    if (!weatherData) return null; 
    const timeZone=weatherData.timezone;
    const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    // const getTimeForCity=(timeZone)=>{

    // }
  return (
    <>
    <div className="head-container">
    {weatherData && (
        <div className='container'>
          <h2 className='cityName'>{weatherData.name}</h2>
          <img src={iconUrl} alt="weather icon" className="weather-icon" />
          <p className='description'>{weatherData.weather[0].description}</p>
          <p className='temprature'>{Math.round(weatherData.main.temp-273)}°C</p>
        </div>
      )}
    </div>
    </>
  )
}

export default ShowData