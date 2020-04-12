import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Weather.css';

const url = 'http://api.openweathermap.org/data/2.5/weather?q=83000,th&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e';

const Weather = () => {

    const [temp, setTemp] = useState();
    const [humid, setHumid] = useState();

    const getWeather = async () => {
        const { data } = await axios.get(url);
        setTemp(data.main.temp)
        setHumid(data.main.humidity);
    }

    useEffect(() => {
        getWeather();
    }, [])

    return (
        <div className='weather-container'>
            {
                !temp ? 'กำลังโหลด...' : `ตอนนี้ อุณหภูมิ ${temp} องศา ความชื้น ${humid} %`
            }
        </div>
    )
}

export default Weather