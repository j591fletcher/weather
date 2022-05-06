import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import WeatherCard from './components/WeatherCard'


const URL = 'https://api.openweathermap.org/data/2.5/weather'
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude); 
    });

    axios.get(URL + '?lat=' + latitude + '&lon=' + longitude + '&appid=' + API_KEY + '&units=imperial')
    .then((weatherData) => {
      console.log(weatherData.data);
      setTemperature(weatherData.data.main.temp)
      setSunset(weatherData.data.sys.sunset)
      setSunrise(weatherData.data.sys.sunrise)
      setHumidity(weatherData.data.main.humidity)
      setCity(weatherData.data.name)
      setIcon(weatherData.data.weather[0].main)
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
    </div>
      
  );
}

export default App;
