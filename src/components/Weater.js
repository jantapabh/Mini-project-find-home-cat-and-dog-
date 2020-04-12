import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Weater  = () => {


    const GetData = async () => {

        const result = await axios.get('https://data.tmd.go.th/api/WeatherToday/V1/?type=json')
        console.log(result)


    }

  useEffect(() => {

    GetData()

  }, [])


    return(
        <div>
            </div>
    )
}

export default Weater;