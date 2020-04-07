import React, { useEffect, useState } from 'react'
import Animal from './Animal'
import { firestore } from '../index'

const AnimalTest = () => {

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

    useEffect(() => {

        retriveData()


    }, [])


    const retriveData = () => {

        firestore.collection("animals").onSnapshot(snapshot => {

            console.log(snapshot);

            let myAnimal = snapshot.docs.map(d => {
                const { id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip } = d.data()
                console.log(id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip)
                return { id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip }
            })

            setAnimal(myAnimal)
          

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

    const addAnimal = () => {

        let id = (animal.length === 0) ? 1 : animal[animal.length - 1].id + 1
        firestore.collection("animals").doc(id + '').set({ id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip })

    }


    return (

        <div>

            <div>
                
                <button onClick={addAnimal}>ADD</button>
               
            </div>
        </div>

    )
}

export default AnimalTest;