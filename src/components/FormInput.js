import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './Form.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {firestore} from '../index.js'




const FormInput = props => {

    const form = useSelector(state => state.form)
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animal)

    const addAnimal = async () => {

        await axios.post(`http://localhost:80/api/animals`, form)

        dispatch({
            
            type: 'ADD_ANIMAL', animal: {
                id: animals.length > 0 ? animals.id : 0,
                ...form

            
            }

            
        })

    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const [myAnimal, setMyAnimal] = useState([])
    

    const retriveData = () => {

        firestore.collection("animals").onSnapshot(( snapshot) => {

           let myAni =  snapshot.docs.map(d => {

                const {id , imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip} = d.data()
                console.log(id , imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip)
                return {id , imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip}

            })

            setMyAnimal(myAni);
           //  console.log(myAni)
        })

        
    }
    
    const getAnimal = async () => {

        const result = await axios.get(`http://localhost:80/api/animals`)
        setMyAnimal(result.data)
      
    }

    useEffect(() => {

        getAnimal()
        retriveData()

    }, [])

    

    return (

        <div>
            <Nav tabs>
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
                                        <div className="card-body">
                                            <h1 className="Topic">" ADD CAT OR DOG "</h1>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl1">Image 1 : รูปภาพ</label>
                                                <input type="text"
                                                    name="imgUrl1"
                                                    className="form-control"
                                                    id="imgUrl1"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_IMGURL1', imgUrl1: e.target.value })} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl2">Image 2 : รูปภาพ</label>
                                                <input type="text"
                                                    name="imgUrl2"
                                                    className="form-control"
                                                    id="imgUrl2"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_IMGURL2', imgUrl2: e.target.value })} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl3">Image 3  : รูปภาพ</label>
                                                <input type="text"
                                                    name="imgUrl3"
                                                    className="form-control"
                                                    id="imgUrl3"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_IMGURL3', imgUrl3: e.target.value })} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="strain">Strain : สายพันธ์</label>
                                                <input type="text"
                                                    name="strain"
                                                    className="form-control"
                                                    id="strain"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_STRAIN', starin: e.target.value })} 
                                                />

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Name : ชื่อ</label>
                                                <input type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="old">Old : อายุ</label>
                                                <input type="number"
                                                    name="old"
                                                    className="form-control"
                                                    id="old"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_OLD', old: e.target.value })} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="habit">Habits : นิสัย</label>
                                                <input type="text"
                                                    name="habit"
                                                    className="form-control"
                                                    id="habit"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_HABIT', habits: e.target.value })} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="because">Because : เหตุผลที่หาบ้านใหม่</label>
                                                <input type="text"
                                                    name="because"
                                                    className="form-control"
                                                    id="because"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_BECAUSE', because: e.target.value })} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl">Status : สถานะ</label>
                                                <input type="text"
                                                    name="status"
                                                    className="form-control"
                                                    id="status"
                                                    onChange={(e) => dispatch({ type: 'CHANGE_STATUS', status: e.target.value })} 
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
                                <div>
                                    <h1 className="Topic">" ADD YOUR DATA"</h1>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imgUrlUser">IMAGE</label>
                                    <input type="text"
                                        name="imgUrlUser"
                                        className="form-control"
                                        id="imgUrlUser"
                                        onChange={(e) => dispatch({ type: 'CHANGE_IMGURL_USER', imgUrlUser: e.target.value })} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nameUser">USER NAME</label>
                                    <input type="text"
                                        name="nameUser"
                                        className="form-control"
                                        id="nameUser"
                                        onChange={(e) => dispatch({ type: 'CHANGE_NAME_USER', nameUser: e.target.value })} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        onChange={(e) => dispatch({ type: 'CHANGE_EMAIL_USER', email: e.target.value })} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">Telephone</label>
                                    <input type="text"
                                        name="telephone"
                                        className="form-control"
                                        id="telephone"
                                        onChange={(e) => dispatch({ type: 'CHANGE_TELEPHONE_USER', telephone: e.target.value })} 

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="facebook">Facebook</label>
                                    <input type="text"
                                        name="facebook"
                                        className="form-control"
                                        id="facebook"
                                        onChange={(e) => dispatch({ type: 'CHANGE_FACEBOOK_USER', facebook: e.target.value })} 

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="line">Line</label>
                                    <input type="text"
                                        name="line"
                                        className="form-control"
                                        id="line"
                                        onChange={(e) => dispatch({ type: 'CHANGE_LINE_USER', line: e.target.value })} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text"
                                        name="address"
                                        className="form-control"
                                        id="address"
                                        onChange={(e) => dispatch({ type: 'CHANGE_ADDRESS_USER', address: e.target.value })} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input type="text"
                                        name="city"
                                        className="form-control"
                                        id="city"
                                        onChange={(e) => dispatch({ type: 'CHANGE_CITY_USER', city: e.target.value })} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input type="text"
                                        name="state"
                                        className="form-control"
                                        id="state"
                                        onChange={(e) => dispatch({ type: 'CHANGE_STATE_USER', state: e.target.value })} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text"
                                        name="zip"
                                        className="form-control"
                                        id="zip"
                                        onChange={(e) => dispatch({ type: 'CHANGE_ZIP_USER', zip: e.target.value })} 
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
            <div className="text-center">
            <Button color="primary" onClick={addAnimal} style={{ margin: 15, padding: 10}}>ADD DOG OR CAT AND YOUR DATA</Button>
            </div>
        </div>

    );
}

export default FormInput;

