import React, { useState, useEffect } from 'react'
import './List.css'
import { useSelector, useDispatch } from 'react-redux'
import AnimalCard from './AnimalCard'
import { userActions } from '../redux/store'

//แสดงรายการที่เพิ่มของหมาและแมว

const ListItems = props => {

    const animals = useSelector(state => state.animal)
   



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