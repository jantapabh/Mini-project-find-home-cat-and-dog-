import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';
import axios from 'axios'


const initialForm = {

    id: 0,
    imgUrl: '',
    strain: '',
    name: '',
    old: 0,
    habits: '',
    because: ''

}

const formReducer = (data = initialForm, action) => {

    switch (action.type) {

        case 'CHANGE_ID':
            return { ...data, id: action.id }

        case 'CHANGE_IMGURL':
            return { ...data, imgUrl: action.imgUrl }

        case 'CHANGE_STRAIN':
            return {...data, strain: action.strain }
    }
}