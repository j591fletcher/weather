import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import WeatherCard from './components/WeatherCard'
import Forecast from './components/forecast'

const URL = 'https://api.openweathermap.org/data/2.5/onecall'
const API_KEY = '2610178a7047cabec34d20c67dce4d2e'

function App() {
    
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState('');
  const [humidity, setHumidity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [icon, setIcon] = useState('');
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude); 
    });

    axios.get(URL + '?lat=' + latitude + '&lon=' + longitude + '&appid=' + API_KEY + '&units=imperial')
    .then((weatherData) => {
      console.log(weatherData.data);
      setTemperature(weatherData.data.current.temp);
      setSunset(weatherData.data.current.sunset)
      setSunrise(weatherData.data.current.sunrise)
      setHumidity(weatherData.data.current.humidity)
      setCity(weatherData.data.timezone)
      setIcon(weatherData.data.current.weather[0].main)
      setForecast(weatherData.data.daily)
    })
  }, [latitude, longitude])
  
  return (
    <div className="main">
      <Header/>
      <WeatherCard 
      temperature = {temperature}
      sunset = {sunset}
      sunrise = {sunrise}
      humidity = {humidity}
      city = {city}
      icon = {icon}
      />
      
      <Forecast forecast = {forecast}/>

    </div>
      
  );
}

export default App;
