import React, { useEffect, useState } from 'react'
import Animal from './Animal'
import { firestore } from './index'

const AnimalTest = () => {

    const [name, setName] = useState('')
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
            console.log(myAnimal)

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
                <h1>To do</h1>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <button onClick={addAnimal}>ADD</button>
                <ul style={{ display: 'flex', listStyle: 'none' }}>{renderTask()}</ul>
            </div>



        </div>

    )
}

export default AnimalTest;