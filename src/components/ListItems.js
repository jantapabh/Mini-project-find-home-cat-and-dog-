import React, { useState, useEffect } from 'react'
import './List.css'
import { useSelector, useDispatch } from 'react-redux'
import AnimalCard from './AnimalCard'
import { firestore } from '../index'
import axios from 'axios'
import Animal from './Animal'


//แสดงรายการที่เพิ่มของหมาและแมว

const ListItems = props => {


    const [id, setId] = useState(0)
    const [imgUrl1, setImgUrl1] = useState('')
    const [imgUrl2, setImgUrl2] = useState('')
    const [imgUrl3, setImgUrl3] = useState('')
    const [strain, setStrain] = useState('')
    const [name, setName] = useState('')
    const [old, setOld] = useState(0)
    const [habits, setHabits] = useState('')
    const [because, setBecause] = useState('')
    const [status, setStatus] = useState('')
    const [imgUrlUser, setImgUrlUser] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [facebook, setFacebook] = useState('')
    const [line, setLine] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [animal, setAnimal] = useState([{}])


    const retriveData = () => {

        firestore.collection("animals").onSnapshot(snapshot => {

            console.log(snapshot);

            let myAni = snapshot.docs.map(d => {
                const { id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip } = d.data()
                console.log(id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip)
                return { id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip }
            })

            setAnimal(myAni)

        })
    }


    const renderAnimal = () => {

        console.log(animal)

        if (animal && animal.length) {
            return animal.map((animal, index) => {
                return (

                    <Animal key={index} animal={animal}

                    />

                )
            })

        }
        else {

            return <li>No Animal</li>

        }
    }





    const animals = useSelector(state => state.animal)
    const dispatch = useDispatch()


    useEffect(() => {

        getAnimals()
        retriveData()


    }, [])


    const getAnimals = async () => {

        const result = await axios.get(`http://localhost:80/api/animals`)
        const action = { type: 'GET_ANIMALS', animals: result.data };
        dispatch(action)
    }


    return (

        <div>

            <ul>{renderAnimal()}</ul>

        </div>


    );
}

export default ListItems;