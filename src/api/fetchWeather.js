import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = '46eb4ae28bfc6dcec239ac78870153a8' // Feel free to use my api key amogus but if you don't want to use my api key then go to https://home.openweathermap.org/api_keys and create a new account

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: api_key,
        }
    });

    return data;
}