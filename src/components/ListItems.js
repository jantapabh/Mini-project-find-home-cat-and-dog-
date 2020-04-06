import React, { useState, useEffect } from 'react'
import './List.css'
import { useSelector, useDispatch } from 'react-redux'
import AnimalCard from './AnimalCard'
import axios from 'axios'


//แสดงรายการที่เพิ่มของหมาและแมว

const ListItems = props => {

    const animals = useSelector(state => state.animal)
    const dispatch = useDispatch()

    const getAnimals = async () => {

        const result = await axios.get(`http://localhost:80/api/animals`)
        const action = { type: 'GET_ANIMALS', animals: result.data };
        console.log(result.data)
        dispatch(action)
    }

    useEffect(() => {

        getAnimals()
        // console.log(getAnimals())


    }, [])
   

    if (!animals || !animals.length)

        return (
            
            <h1>Not Animals Now </h1>
        )

    return (

        <div>
            <div>
                {
                    animals.map((animal, index) => (
                        <div key={index} style={{ margin: 5 }}>
                            <AnimalCard {...animal} />
                        </div>

                    ))
                }

            </div>
        </div>

    );
}

export default ListItems;