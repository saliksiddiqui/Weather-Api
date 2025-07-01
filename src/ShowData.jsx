import React from 'react'
import './App.css'

const ShowData = ( {weatherData} ) => {
    // console.log('insideshowcomp',weatherData);
    const timeZone=weatherData.timezone;
    const getTimeForCity=(timeZone)=>{

    }
  return (
    <>
    <div className="container">
    {weatherData && (
        <div className='container'>
          <h2 className='cityName'>{weatherData.name}</h2>
          <p className='description'>{weatherData.weather[0].description}</p>
          <p className='temprature'>{Math.round(weatherData.main.temp-273)}°C</p>
        </div>
      )}
    </div>
    </>
  )
}

export default ShowData