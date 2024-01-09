import dotenv from 'dotenv'
import axios from 'axios'


const api_key = import.meta.env.VITE_OW_API_KEY
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='

const getWeather = (capital) => {
    console.log(`api_key: ${api_key}`)
    console.log(`kokeilu: ${baseUrl}${capital}&appid=${api_key}&units=metric`)
    const request = axios.get(`${baseUrl}${capital}&appid=${api_key}&units=metric`)
    return request.then(response => response.data)
}

export default { getWeather }