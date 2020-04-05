import React, { useState, useEffect } from 'react'
import './Form.css'
import { formActions } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { animalActions } from '../redux/store'
import { bindActionCreators } from 'redux';
import axios from 'axios'
import { Button, Form, Col } from 'react-bootstrap';


const FormInput = props => {

    const actionsAnimal = bindActionCreators(animalActions, useDispatch())
    const actionForm = bindActionCreators(formActions, useDispatch())
    const form = useSelector(state => state.form)
    const animals = useSelector(state => state.animal)

    const addAnimal = async () => {

        await axios.post(`http://localhost:80/api/animals`, form)

        actionsAnimal.addAnimal(animals, form)
    }


    return (
        <div>
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <h1 className="Topic">" ADD CAT OR DOG "</h1>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="imgUrl">Image : รูปภาพ</label>
                        <input type="text"
                            name="imgUrl"
                            className="form-control"
                            id="imgUrl"
                            onChange={(e) => actionForm.changeImgurl(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="strain">Strain : สายพันธ์</label>
                        <input type="text"
                            name="strain"
                            className="form-control"
                            id="strain"
                            onChange={(e) => actionForm.changeStrain(e.target.value)}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name : ชื่อ</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            onChange={(e) => actionForm.changeName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="old">Old : อายุ</label>
                        <input type="number"
                            name="old"
                            className="form-control"
                            id="old"
                            onChange={(e) => actionForm.changeOld(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="habit">Habits : นิสัย</label>
                        <input type="text"
                            name="habit"
                            className="form-control"
                            id="habit"
                            onChange={(e) => actionForm.changeHabit(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="because">Because : เหตุผลที่หาบ้านใหม่</label>
                        <input type="text"
                            name="because"
                            className="form-control"
                            id="because"
                            onChange={(e) => actionForm.changeBecause(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl">Status : สถานะ</label>
                        <input type="text"
                            name="status"
                            className="form-control"
                            id="status"
                            onChange={(e) => actionForm.changeStatus(e.target.value)}
                        />
                    </div>

                </form>
            </div>

            <div>
                <div className="row">
                    <div className="col-sm-3 mt-5"></div>
                    <div className="col-sm-6 mt-5 card">
                        <div className="card-body ml-3 mr-3 mt-5 mb-1">
                            <form>
                                <h1 className="Topic">ADD YOUR DATA</h1>
                                <div className="form-group">
                                    <label htmlFor="username">IMAGE</label>
                                    <input type="text"
                                        name="imgUrlUser"
                                        className="form-control"
                                        id="imgUrlUser"
                                        onChange={(e) => actionForm.changeImgurlUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">USER NAME</label>
                                    <input type="text"
                                        name="username"
                                        className="form-control"
                                        id="username"
                                        onChange={(e) => actionForm.changeNameUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        onChange={(e) => actionForm.changeEmailUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">Telephone</label>
                                    <input type="text"
                                        name="telephone"
                                        className="form-control"
                                        id="telephone"
                                        onChange={(e) => actionForm.changeTelephoneUser(e.target.value)}

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">Facebook</label>
                                    <input type="text"
                                        name="facebook"
                                        className="form-control"
                                        id="facebook"
                                        onChange={(e) => actionForm.changeFacebookUser(e.target.value)}

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Line</label>
                                    <input type="text"
                                        name="line"
                                        className="form-control"
                                        id="line"
                                        onChange={(e) => actionForm.changeLineUser(e.target.value)}

                                    />
                                </div>
                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor"   onChange={(e) => actionForm.changeAddressUser(e.target.value)}/>
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control  onChange={(e) => actionForm.changeCityUser(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control  onChange={(e) => actionForm.changeStateUser(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control  onChange={(e) => actionForm.changeZipUser(e.target.value)} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <div className="text-center">
                                    <button className="btn btn-primary my-1" type="submit" onClick={addAnimal}>ADD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 mt-5"></div>
                </div>
            </div>
        </div>
    );
}

export default FormInput;

