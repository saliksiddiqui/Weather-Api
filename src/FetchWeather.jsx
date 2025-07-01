import React, { useState } from 'react'
import './App.css'
const FetchWeather = ( {onFetchData} ) => {
    const [city, setCity]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        // onFetchData(city)
        if (city.trim()) {
            onFetchData(city);
            setCity('');
        }else{
          alert('enter city name')
        }
    }
    
  return (
    <>
    <div className="mainContainer">
       <h1>WEATHER APP</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="city">ENTER CITY NAME:</label>
        <input type="text" className='inputCity' name='city' value={city} placeholder=' Enter city...' onChange={(e)=>setCity(e.target.value)} />
        <button type='submit' className='getButton'>Get Weather</button>
    </form>
    </div>
    </>
  )
}

export default FetchWeather