import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './Form.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalLoss from './AnimalLoss'
import { firestore } from '../index'
import { Table } from 'reactstrap';
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



//ใช้ firebase กับ Hook

const FormInputTwo = props => {

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
    const [animalLoss, setAnimalLoss] = useState([{}])

    useEffect(() => {

        retriveData()


    }, [])


    const retriveData = () => {

        firestore.collection("animalsLoss").onSnapshot(snapshot => {

            console.log(snapshot);

            let myAnimal = snapshot.docs.map(d => {
                const { id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, date, look,   imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip } = d.data()
                console.log(id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, date, look,   imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip)
                return {id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, date, look,   imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip}
            })

            setAnimal(myAnimal)
          

        })
    }

    const renderAnimal = () => {
        console.log(animalLoss)
        if (animalLoss && animalLoss.length) {
            return animalLoss.map((animalLoss, index) => {
                return (

                    <AnimalLoss key={index} animalLoss={animalLoss}

                    />

                )
            })

        }
        else {

            return <li>No Animals</li>

        }
    }

    const addAnimal = () => {

        let id = (animalLoss.length === 0) ? 1 : animalLoss[animalLoss.length - 1].id + 1
        firestore.collection("animalsLoss").doc(id + '').set({ id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, date, look,   imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip})
        alert("You Add Finish")
    }


    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
 
    
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
                <React.Fragment>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon className={classes.icon} />
                        <Typography variant="h6" color="inherit" noWrap>
                           กรอกข้อมูล
          </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
            <Nav tabs style={{ margin: 15}}>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        ADD DOG OR CAT
            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        ADD YOUR DATA
            </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div>
                                <div>
                                    <div className="col-6 mt-5 mx-auto card">
                                    
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl1">Image 1 : รูปภาพ</label>
                                                <input type="text"
                                                    name="imgUrl1"
                                                    className="form-control"
                                                    id="imgUrl1"
                                                    onChange={(e) => setImgUrl1(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl2">Image 2 : รูปภาพ</label>
                                                <input type="text"
                                                    name="imgUrl2"
                                                    className="form-control"
                                                    id="imgUrl2"
                                                    onChange={(e) => setImgUrl2(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl3">Image 3  : รูปภาพ</label>
                                                <input type="text"
                                                    name="imgUrl3"
                                                    className="form-control"
                                                    id="imgUrl3"
                                                    onChange={(e) => setImgUrl3(e.target.value)}  
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="strain">Strain : สายพันธ์</label>
                                                <input type="text"
                                                    name="strain"
                                                    className="form-control"
                                                    id="strain"
                                                    onChange={(e) => setStrain(e.target.value)} 
                                                />

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Name : ชื่อ</label>
                                                <input type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    onChange={(e) => setName(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="old">Old : อายุ</label>
                                                <input type="text"
                                                    name="old"
                                                    className="form-control"
                                                    id="old"
                                                    onChange={(e) => setOld(e.target.value)}  
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="date">Date : วันที่หาย</label>
                                                <input type="text"
                                                    name="date"
                                                    className="form-control"
                                                    id="date"
                                                    onChange={(e) => setDate(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="look">DETAILS : รายละเอียดเพิ่มเติม</label>
                                                <input type="text"
                                                    name="look"
                                                    className="form-control"
                                                    id="look"
                                                    onChange={(e) => setLook(e.target.value)} 
                                                />
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12" >
                            <div className="col-6 mt-5 mx-auto card">
                             
                                <div className="form-group">
                                    <label htmlFor="imgUrlUser">IMAGE</label>
                                    <input type="text"
                                        name="imgUrlUser"
                                        className="form-control"
                                        id="imgUrlUser"
                                        onChange={(e) => setImgUrlUser(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nameUser">USER NAME</label>
                                    <input type="text"
                                        name="nameUser"
                                        className="form-control"
                                        id="nameUser"
                                        onChange={(e) => setNameUser(e.target.value)}  
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">Telephone</label>
                                    <input type="text"
                                        name="telephone"
                                        className="form-control"
                                        id="telephone"
                                        onChange={(e) => setTelephone(e.target.value)}  

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="facebook">Facebook</label>
                                    <input type="text"
                                        name="facebook"
                                        className="form-control"
                                        id="facebook"
                                        onChange={(e) => setFacebook(e.target.value)}  

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="line">Line</label>
                                    <input type="text"
                                        name="line"
                                        className="form-control"
                                        id="line"
                                        onChange={(e) => setLine(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text"
                                        name="address"
                                        className="form-control"
                                        id="address"
                                        onChange={(e) => setAddress(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input type="text"
                                        name="city"
                                        className="form-control"
                                        id="city"
                                        onChange={(e) => setCity(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input type="text"
                                        name="state"
                                        className="form-control"
                                        id="state"
                                        onChange={(e) => setState(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text"
                                        name="zip"
                                        className="form-control"
                                        id="zip"
                                        onChange={(e) => setZip(e.target.value)} 
                                    />
                                </div>
                                <div className="text-center">
            <Button color="primary" style={{ margin:20, padding: 10}} onClick={addAnimal}>ADD DOG OR CAT AND YOUR DATA</Button>
            </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
           
            
        </div>

    );
}

export default FormInputTwo;

