import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';
import axios from 'axios'
import thunk from 'redux-thunk';

axios.defaults.withCredentials = true

//ส่วนการยืนยันตัวตน

const initAuthData = {

    accessToken: null,

}

//ค้าง

export const AuthActions = {

    getLoginStatus: () => async (dispatch) => {
        const res = await axios.get(`http://localhost/api/auth`)
        dispatch({ type: 'GET_LOGIN_STATUS', payload: res.data });
    },
    loginForm: (username, password) => async (dispatch) => {

        const name = username + ''
        const pass = password + ''

        if (name.length === 10 && pass.length > 6 && username == '6035512034') {

            const res = await axios.post('http://localhost/api/auth', { username, password })

            const { stdId, firstname, lastname, id, type } = res.data;
            if (type == ' ') {

                return alert('username or password incorrect');
                // alert('username or password incorrect');

            }
            else {
                
                dispatch({ type: 'LOGIN_FORM', payload: res.data })
            }
        }
    },
    logout: () => async (dispatch) => {
        const res = await axios.get(`http://localhost/api/auth/logout`)
        dispatch({ type: 'LOGOUT' })
    }
}

const AuthReducer = (data = initAuthData, action) => {
    switch (action.type) {
        
        case 'GET_LOGIN_STATUS': return action.payload;
        case 'LOGIN_FORM': return action.payload
        case 'LOGOUT': return initAuthData
        default: return data
    }
}
// ทำต่อ

export const animalActions = {

    getAnimalsSuccess: animals => ({

        type: 'GET_ANIMALS_SUCCESS', animals
    }),

    getAnimalsFailed: () => ({
        type: 'GET_ANIMALS_FAILED'
    }),

    getAnimals: () => async (dispatch) => {

        try {

            console.log('Get Animal New')
            const respone = await axios.get(`http://localhost:8000/api/animals`)
            const responeBody = await respone.data;
            console.log(responeBody)
            dispatch({
                type: 'GET_ANIMALS_FAILED', animals: responeBody
            });

        }

        catch (error) {

            console.log(error);

            dispatch({

                type: 'GET_ANIMALS_FAILED'

            });
        }
    },

    addAnimal: (animals, form) => ({
        type: 'ADD_ANIMAL', animals: {

            id: animals.length > 0 ? animals[animals.length - 1].id + 1 : 0,
            ...form
        }
    }),

    deleteAnimal: (id) => ({

        type: 'DELETE_ANIMAL',
        id: id
    }),
    updateAnimal: (id, form) => ({

        type: 'UPDATE_ANIMAL',
        id: id,
        animals: {
            ...form, id: id
        }

    })
}

//ส่วนแบบฟอร์ม

const initialForm = {

    id: 0,
    imgUrl: '',
    strain: '',
    name: '',
    old: 0,
    habits: '',
    because: '',
    status: ''

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
    }),
    changeStatus: (status) => ({
        type: 'CHANGE_STAUTUS',
        status: status
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
        
        case 'CHANGE_STATUS':
            return {...data, status: action.status}

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
                if (+animal.id === +action.id) {
                    return action.animal;
                }
                else {
                    return animal;
                }
            })

            case 'GET_ANIMALS_SUCCESS':
                console.log('action: ', action.animals)
                return action.animals

            case 'GET_ANIMALS_FAILED':
                console.log('action Failed !')
                return action.animals

    }

    return animals;
}


const reducers = combineReducers({

    animal: animalReducer,
    form: formReducer,
    Auth: AuthReducer

})


//เรียกใช้ redux-thunk
export const store = createStore(reducers, applyMiddleware(logger, thunk));