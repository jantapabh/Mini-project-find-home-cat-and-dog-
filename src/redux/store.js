import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';
import axios from 'axios'


axios.defaults.withCredentials = true


//ส่วนการยืนยันตัวตน

const initAuthData = {

    accessToken: null,
    psuInfo: null

}

//ส่วนแบบฟอร์ม


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


const reducers = combineReducers({

    // animal: animalReducer,
    // form: formReducer,
    Auth: AuthReducer,



})


//เรียกใช้ redux-thunk
export const store = createStore(reducers, applyMiddleware(logger));