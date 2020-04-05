import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';
import axios from 'axios'
import thunk from 'redux-thunk';

axios.defaults.withCredentials = true


// export const userActions = {

// getUSersSuccess: users => ({

//     type: 'GET_USERS_SUCCESS', users


// }),

// getUsersFailed: () => ({

//     type: 'GET_USERS_FAILED'
// }),

// getUsers: () => async (dispatch) => {

//     try {

//         console.log('get User New')
//         const response = await axios.get(`http://localhost:8000/api/users`)
//         const responseBody = await response.data;
//         console.log('response: ', responseBody)
//         dispatch({ type: 'GET_USERS_SUCCESS', users: responseBody });
//     } catch(error){

//         console.error(error);
//         dispatch({ type: 'GET_USERS_FAILED' });
//     }
// },

// addUser: (users, form) => ({

//     type: 'ADD_USER', users: {

//         id: users.length > 0 ? users[users.length - 1].id + 1 : 0,
//         ...form

//     }
// }),

// deleteUSer: (id) => ({

//     type: 'DELETE_USER',
//     id: id
// }),

// updateUser: (id, form) => ({

//     type: 'UPDATE_USER',
//     id: id, 
//     user: {... form, id: id}
// })


// }

// const initialFormUser= {

//     idUser: 0,
//     imgUrlUser: '',
//     nameUser: '',
//     passwordUser: '',
//     emailUser: '',
//     telephoneUser: '',
//     facebookUser: '',
//     lineUser: '',
//     addressUser: '',
//     cityUser: '',
//     stateUser: '',
//     zipUser: 0

// }


// export const formActionsUser = {

//     changeIdUser: (id) => ({

//        type: 'CHANGE_ID_USER', 
//         id:id
//     }),

//     changeImgurlUser: (imgUrlUser) => ({

//         type: 'CHANGE_IMGURL_USER',
//         imgUrlUser: imgUrlUser
//     }),
//     changeNameUser: (nameUser) => ({

//         type: 'CHANGE_NAME_USER',
//         nameUser: nameUser
//     }),
//     changePasswordUser: (passwordUser) => ({

//         type: 'CHANGE_PASSWORD_USER',
//         passwordUser: passwordUser
//     }),
//     changeEmailUser: (emailUser) => ({

//         type: 'CHANGE_EMAIL_USER',
//         emailUser: emailUser
//     }),
//     changeTelephoneUser: (telephoneUser) => ({

//         type: 'CHANGE_TELEPHONE_USER',
//         telephoneUser: telephoneUser
//     }),
//     changeFacebookUser: (facebookUser) => ({

//         type: 'CHANGE_FACEBOOK_USER',
//         facebookUser: facebookUser
//     }),
//     changeLineUser: (lineUser) => ({

//         type: 'CHANGE_LINE_USER',
//         lineUser: lineUser
//     }),
//     changeAddressUser: (addressUser) => ({

//         type: 'CHANGE_ADDRESS_USER',
//         addressUser: addressUser
//     }),
//     changeCityUser: (cityUser) => ({

//         type: 'CHANGE_CITY_USER',
//         cityUser: cityUser
//     }),
//     changeStateUser: (stateUser) => ({

//         type: 'CHANGE_STATE_USER',
//         stateUser: stateUser
//     }),
//     changeZipUser: (zipUser) => ({

//         type: 'CHANGE_ZIP_USER',
//         zipUser: zipUser
//     }),
    

// }


// const formReducerUser = (data = initialFormUser, action) => {

//     switch(action.type)
//     {
//         case 'CHANGE_ID_USER':
//             return {... data, idUser: action.idUser}

//         case 'CHANGE_IMGURL_USER':
//             return {...data, imgUrlUser: action.imgUrlUser}  

//         case 'CHANGE_NAME_USER'   :
//             return {...data, nameUser: action.nameUser} 

//         case 'CHANGE_PASSWORD_USER':
//                 return {...data, passwordUser: action.passwordUser}
                
//         case 'CHANGE_EMAIL_USER':
//                 return {...data, emailUser: action.emailUser}    
                
//         case 'CHANGE_TELEPHONE_USER':
//                 return {...data, telephoneUser: action.telephoneUser}
                
//        case 'CHANGE_FACEBOOK_USER':
//            return {...data, facebookUser: action.facebookUser}

//         case 'CHANGE_LINE_USER': 
//            return {...data, lineUser: action.lineUser}

//         case 'CHANGE_ADDRESS_USER':
//             return {...Date, addressUser: action.addressUser}

//          case 'CHANGE_CITY_USER'  :
//              return {...data, cityUser: action.cityUser} 

//          case 'CHANGE_STATE_USER':
//              return {...data, stateUser: action.stateUser}

//          case 'CHANGE_ZIP_USER':
//              return {...data, zipUser: action.zipUser}

//          default: return data;    

//     }
// }


// const userReducer = (users = [], action) => {

//     switch(action.type){

//         case 'GET_USERS':
//              return action.users;

//         case 'ADD_USER':
//             return [...users, action.users]

//         case 'DELETE_USER':
//             return users.filter((user, index) => +user.id !== +action.id)

//        case 'UPDATE_USER':
//            return users.map((user, index) => {

//             if(+user.id === +action.id){

//                 return action.user;
//             }
//             else {
//                 return user;
//             }

//            })

//            case 'GET_USERS_SUCCESS':
//                console.log('action ', action.users)
//                return action.users

//             case 'GET_USERS_FAILED':
//                 console.log('Failed')   
//                 return action.users
//     }

//     return users;
// }

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

        if (name.length === 10 && pass.length > 6 ) {

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
        case 'LOGIN_PSU': return  { ...data, psuInfo: action.payload };
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
    Auth: AuthReducer,
   
    

})


//เรียกใช้ redux-thunk
export const store = createStore(reducers, applyMiddleware(logger, thunk));