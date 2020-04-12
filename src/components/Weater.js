import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Weater  = () => {


    const GetData = async () => {

        const result = await axios.get('api.openweathermap.org/data/2.5/weather?q=Phuket,TH')
        console.log(result.data)


    }


    return(
        <div>
            </div>
    )
}

export default Weater;