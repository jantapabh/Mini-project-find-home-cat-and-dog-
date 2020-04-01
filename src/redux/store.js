import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';
import axios from 'axios'
import thunk from 'redux-thunk';

axios.defaults.withCredentials = true

const initAuthData = {

    accessToken: null,
    psuInfo: null

}

const initialForm = {

    id: 0,
    imgUrl: '',
    strain: '',
    name: '',
    old: 0,
    habits: '',
    because: ''

}

export const formActions = {

    changeId: (id) => ({
        type: 'CHANGE_ID',
        id: id
    }),
    changeImgurl: (imgUrl) => ({
        type: 'CHANGE_IMGURL',
        imgUrl: imgUrl
    }),
    changeStrain: (strain) => ({
        type: 'CHANGE_STRAIN',
        strain: strain
    }),
    changeName: (name) => ({
        type: 'CHANGE_NAME',
        name: name
    }),
    changeOld: (old) => ({
        type: 'CHANGE_OLD',
        old: old
    }),
    changeHabit: (habits) => ({
        type: 'CHANGE_HABIT',
        habits: habits
    }),
    changeBecause: (because) => ({
        type: 'CHANGE_BECAUSE',
        because: because
    })

}

const formReducer = (data = initialForm, action) => {

    switch (action.type) {

        case 'CHANGE_ID':
            return { ...data, id: action.id }

        case 'CHANGE_IMGURL':
            return { ...data, imgUrl: action.imgUrl }

        case 'CHANGE_STRAIN':
            return { ...data, strain: action.strain }

        case 'CHANGE_NAME':
            return { ...data, name: action.name }

        case 'CHANGE_OLD':
            return { ...data, old: action.old }

        case 'CHANGE_HABIT':
            return { ...data, habits: action.habits }

        case 'CHANGE_BECAUSE':
            return { ...data, because: action.because }

        default: return data;
    }
}


const animalReducer = (animals = [], action) => {

    switch (action.type) {

        case 'GET_ANIMALS':
            return action.animals;

        case 'ADD_ANIMAL':
            return [...animals, action.animals]

        case 'DELETE_ANIMAL':
            return animals.filter((animal, index) => +animal.id !== +action.id)

        case 'UPDATE_ANIMAL':
            return animals.map((animal, index) => {
                if(+animalid === +action.id){
                    return action.animal;
                }
                else{
                    return animal;
                } 
            })
    }

    return animals;
}


const reducers = combineReducers({

    animal: animalReducer,
    form: formReducer

})


//เรียกใช้ redux-thunk
export const store = createStore(reducers, applyMiddleware(logger, thunk));