import React from 'react';
import { Card } from 'semantic-ui-react';

export default function Forecast({forecast}){

    return(
        <div style = {{marginTop: 20}}>
            <Card.Group itemsPerRow = {4}>
                {forecast.map((data) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Header className = "forecast-temp">
                                {new Date(data.dt*1000).toLocaleString("en-US", {weekday: "long"})}
                                </Card.Header>
                                <Card.Meta>
                                    <p>High:{Math.floor(data.temp.max)}°F</p>
                                    <p>Low: {Math.floor(data.temp.min)}°F</p>
                                    </Card.Meta>
                                <Card.Description className = "weather-desc">
                                    <p>{data.weather[0].description}</p>
                                    <p>Humidity: {data.humidity}%</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
                
            </Card.Group>
        </div>

    )

}