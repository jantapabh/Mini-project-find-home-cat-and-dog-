import React, { useState, useEffect } from 'react'
import './List.css'
import { firestore } from '../index'
import axios from 'axios'
import AnimalLoss from './AnimalLoss'
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.min.css';




//แสดงรายการที่เพิ่มของหมาและแมว

const ListItemsTwo = props => {


    const [animalLoss, setAnimalLoss] = useState([{}])
    const [id, setId] = useState(0)
    const [imgUrl1, setImgUrl1] = useState('')
    const [imgUrl2, setImgUrl2] = useState('')
    const [imgUrl3, setImgUrl3] = useState('')
    const [strain, setStrain] = useState('')
    const [name, setName] = useState('')
    const [old, setOld] = useState(0)
    const [date, setDate] = useState('')
    const [look, setLook] = useState('')
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


    const retriveData = () => {

        firestore.collection("animalsLoss").onSnapshot(snapshot => {

            console.log(snapshot);

            let myAni = snapshot.docs.map(d => {

                const {id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, date, look,   imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip } = d.data()

                return { id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, date, look,   imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip }

            })

            setAnimal(myAni)

        })
    }

    const deleteAnimal = (id) => {

        firestore.collection("animalsLoss").doc(id + '').delete()

    }

    const editAnimal = (id) => {

        firestore.collection("animalsLoss").doc(id + '').set({ id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip })

    }


    const renderAnimal = () => {

        console.log(animalsLoss)

        if (animalsLoss && animalsLoss.length) {
            return animalsLoss.map((animalsLoss, index) => {
                return (

                    <AnimalLoss key={index} animalsLoss={animalsLoss}

                    />

                )
            })

        }
        else {

            return <li>No Animal</li>

        }
    }


    useEffect(() => {


        retriveData()


    }, [])

    const useStyles = makeStyles((theme) => ({
        icon: {
          marginRight: theme.spacing(2),
        },
        heroContent: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
          marginTop: theme.spacing(4),
        },
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
        },
        card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        cardMedia: {
          paddingTop: '56.25%', // 16:9
        },
        cardContent: {
          flexGrow: 1,
        },
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
        },
      }));
      

    const classes = useStyles();

    return (

        <div>
           
            {renderAnimal()}

        </div>


    );
}

export default ListItemsTwo;