import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloud, faCloudRain, faSmog, faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons';


const WeatherCard = (
    { temperature, city, sunrise, sunset, humidity, icon }) => {
        let weatherIcons = null;
      
        if (icon === 'Haze') {
          weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#7F8C8D" />
        }
        else if (icon === 'Thunderstorm') {
          weatherIcons = <FontAwesomeIcon icon={faBolt} size="lg" color="#FAF619" />
        }
        else if (icon === 'Drizzle') {
          weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#5D6D7E" />
        }
        else if (icon === 'Rain') {
          weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#5D6D7E" />
        }
        else if (icon === 'Snow') {
          weatherIcons = <FontAwesomeIcon icon={faSnowflake} size="lg" color="#D7DBDD" />
        }
        else if (icon === 'Mist') {
          weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#ABB2B9" />
        }
        else if (icon === 'Clear') {
          weatherIcons = <FontAwesomeIcon icon={faSun} size="lg" color="#F7DC6F" />
        }
        else if (icon === 'Clouds') {
          weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#C9DAE9" />
        }

    return (
        <Card className = "weather-card-main">
            <Card.Content className = "weather-card">
            <Card.Header className = "weather-card-child">{city}</Card.Header>
            <div className = "icon-container">
                {weatherIcons}
            </div>
            </Card.Content>
            <Card.Content>
            <Feed>
                <Feed.Event>
                <Feed.Content>
                    <h5 className = "weather-card-child">{moment().format('MMMM Do, h:mm a')}</h5>
                    <div className = "weather-card">
                        <div className = "weather-card-child">
                            Temperature: {Math.floor(temperature)}°F
                        </div>
                        <div className = "weather-card-child">
                            Humidity: {humidity}%
                        </div>

                    </div>
                    <div className = "weather-card">
                        <div className = "weather-card-child"> 
                            Sunrise: {new Date(sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit'})}
                        </div>
                        <div className = "weather-card-child">
                            Sunset: {new Date(sunset * 1000).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit'})}
                        </div> 

                    </div>
                </Feed.Content>
                </Feed.Event>
            </Feed>
            </Card.Content>
        </Card>
    )
}

export default WeatherCard;