import { useEffect, useState } from "react"
import weatherService from "../services/weather"


const CountryWeather = ({ capital }) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        weatherService.getWeather(capital)
            .then(weatherOfCapital => {
                setWeather(weatherOfCapital)
                console.log("weather: ", weather)
                console.log("weatherOfCapital: ", weatherOfCapital)
            })
    }, [capital])

    const getWeatherIcon = (id) => {
        console.log("id: ", id)
        const iconUrl = `https://openweathermap.org/img/wn/${id}@2x.png`
        return <img src={iconUrl} alt="Weather icon" width="100"></img>
    }
    

    if (!weather) {
        return (
            <div>
                <h2>Weather in {capital}</h2>
                <i>weathet not yet downloaded</i>
            </div>
        )
    }

    if (weather) {
        return (
            <div>
                <h2>Weather in {capital}</h2>
                <div>temperature {weather.main.temp} Celcius</div>
                <div>{getWeatherIcon(weather.weather[0].icon)}</div>
                <div>wind {weather.wind.speed} m/s</div>
            </div>
        )
    }

}

export default CountryWeather