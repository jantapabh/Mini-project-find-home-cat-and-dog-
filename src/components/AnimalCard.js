import React from 'react';
import axios from 'axios';
import './AnimalCard.css';
import { animalActions } from '../redux/store'
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, roundedCircle } from 'react-bootstrap';


const AnimalCard = props => {

    const form = useSelector(state => state.form)
    const actions = bindActionCreators(animalActions, useDispatch())


    const deleteAnimal = async () => {

        const result = await axios.delete(`http://localhost:8000/api/animals/${props.id}`)
        actions.deleteAnimal(props.id)
    }

    const updateAnimal = async () => {
        const result = await axios.put(`http://localhost:8000/api/animals/${props.id}`, form)
        actions.updateAnimal(props.id, form)
    }

    return (

        <div className="main">
            <button className="Button2">STATUS : {props.status}</button>
            <div className="blog"> 
                    <img src={props.imgUrl} style={{ width: 200, height: 150 }} /> <br />
                STRAIN : {props.strain} <br />
                NAME : {props.name} <br />
                OLD: {props.old} <br />
                HABIT : {props.habits} <br />
                BECAUSE : {props.because} <br />
            </div>
            <div>
                <button className="Button" >CONTACT</button>
                <button className="Button" onClick={deleteAnimal} >DELETE</button>
            </div>

        </div>
    )
}

export default AnimalCard;