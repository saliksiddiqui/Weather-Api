import React, { useState, useEffect } from "react";
import FetchWeather from "./FetchWeather";
import ShowData from "./ShowData";
import skyBg from './assets/skyBg.jpg'

export default function App() {
  const [data, setData]=useState(null);
  const [error, setError]=useState(null)

  const fetchData = async (city) => {
    console.log('city',city);
    const apiKey = "75f2e7c8aa33c78e1424a3c15b2166b6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      // fetch(url)
      //   .then((response) => {
      //     if (!response.ok) {
      //     throw new Error('Failed to fetch weather data');
      //     }
      //     return response.json();
      //   })
      //   .then((data) => {
      //     setData(data);
      //   });
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setData(data);
      setError(null)
      console.log('data',data);
    } catch(error) {
  setData(null);
  setError(error.message);
}
  };
  // useEffect(() => {
  //   // console.log('updatedData',data)
  // }, [data]);
  return (
    <>
      <FetchWeather onFetchData={fetchData}/>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <ShowData weatherData={data} />
    </>
  );
}
