import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';
import axios from 'axios'
import thunk from 'redux-thunk';

axios.defaults.withCredentials = true




//ส่วนการยืนยันตัวตน

const initAuthData = {

    accessToken: null,
    psuInfo: null

}


export const AuthActions = {

    getLoginStatus: () => async (dispatch) => {
        const res = await axios.get(`http://localhost/api/auth`)
        dispatch({ type: 'GET_LOGIN_STATUS', payload: res.data });
    },
    loginPSU: (username, password) => async (dispatch) => {

        const name = username + ''
        const pass = password + ''

        if (name.length === 10 && pass.length > 6) {

            const res = await axios.post('http://localhost/api/auth/psu', { username, password })

            const { stdId, firstname, lastname, id, type } = res.data;
            if (type == ' ') {

                return alert('username or password incorrect');
                // alert('username or password incorrect');

            }
            else {

                dispatch({ type: 'LOGIN_PSU', payload: res.data })
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
        case 'LOGIN_PSU': return { ...data, psuInfo: action.payload };
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
            const respone = await axios.get(`http://localhost:80/api/animals`)
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
    imgUrl1: '',
    imgUrl2: '',
    imgUrl3: '',
    strain: '',
    name: '',
    old: 0,
    habits: '',
    because: '',
    status: '',
    imgUrlUser: '',
    nameUser: '',
    email: '',
    telephone: '',
    facebook: '',
    line: '',
    address: '',
    city: '',
    state: '',
    zip: 0


}

export const formActions = {

    changeId: (id) => ({
        type: 'CHANGE_ID',
        id: id
    }),
    changeImgurl1: (imgUrl1) => ({
        type: 'CHANGE_IMGURL1',
        imgUrl1: imgUrl1
    }),
    changeImgurl2: (imgUrl2) => ({
        type: 'CHANGE_IMGURL2',
        imgUrl2: imgUrl2
    }),
    changeImgurl3: (imgUrl3) => ({
        type: 'CHANGE_IMGURL3',
        imgUrl3: imgUrl3
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
    }),
    changeImgurlUser: (imgUrlUser) => ({

        type: 'CHANGE_IMGURL_USER',
        imgUrlUser: imgUrlUser
    }),
    changeNameUser: (nameUser) => ({

        type: 'CHANGE_NAME_USER',
        nameUser: nameUser
    }),
    changeEmailUser: (email) => ({

        type: 'CHANGE_EMAIL_USER',
        email: email
    }),
    changeTelephoneUser: (telephone) => ({

        type: 'CHANGE_TELEPHONE_USER',
        telephone: telephone
    }),
    changeFacebookUser: (facebook) => ({

        type: 'CHANGE_FACEBOOK_USER',
        facebook: facebook
    }),
    changeLineUser: (line) => ({

        type: 'CHANGE_LINE_USER',
        line: line
    }),
    changeAddressUser: (address) => ({

        type: 'CHANGE_ADDRESS_USER',
        address: address
    }),
    changeCityUser: (city) => ({

        type: 'CHANGE_CITY_USER',
        city: city
    }),
    changeStateUser: (state) => ({

        type: 'CHANGE_STATE_USER',
        state: state
    }),
    changeZipUser: (zip) => ({

        type: 'CHANGE_ZIP_USER',
        zip: zip

    }),

}

const formReducer = (data = initialForm, action) => {

    switch (action.type) {

        case 'CHANGE_ID':
            return { ...data, id: action.id }

        case 'CHANGE_IMGURL1':
            return { ...data, imgUrl1: action.imgUrl1 }

        case 'CHANGE_IMGURL2':
            return { ...data, imgUrl2: action.imgUrl2 }


        case 'CHANGE_IMGURL3':
            return { ...data, imgUrl3: action.imgUrl3 }


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
            return { ...data, status: action.status }

        case 'CHANGE_IMGURL_USER':
            return { ...data, imgUrlUser: action.imgUrlUser }

        case 'CHANGE_NAME_USER':
            return { ...data, nameUser: action.nameUser }

        case 'CHANGE_EMAIL_USER':
            return { ...data, email: action.email }

        case 'CHANGE_TELEPHONE_USER':
            return { ...data, telephone: action.telephone }

        case 'CHANGE_FACEBOOK_USER':
            return { ...data, facebook: action.facebook }

        case 'CHANGE_LINE_USER':
            return { ...data, line: action.line}

        case 'CHANGE_ADDRESS_USER':
            return { ...data, address: action.address }

        case 'CHANGE_CITY_USER':
            return { ...data, city: action.city }

        case 'CHANGE_STATE_USER':
            return { ...data, state: action.state }

        case 'CHANGE_ZIP_USER':
            return { ...data, zip: action.zip }

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
    Auth: AuthReducer,



})


//เรียกใช้ redux-thunk
export const store = createStore(reducers, applyMiddleware(logger, thunk));