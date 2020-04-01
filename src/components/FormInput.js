import React, {useState, useEffect }from 'react'
import './Form.css'
import { formActions } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { animalActions } from '../redux/store'
import { bindActionCreators } from 'redux';
import axios from 'axios'


const FormInput = props => {

    const actionsAnimal = bindActionCreators(animalActions, useDispatch())
    const actionForm = bindActionCreators(formActions, useDispatch())
    const form = useSelector(state => state.form)
    const animals = useSelector(state => state.animal)

    const addAnimal = async () => {

        await axios.post(`http://localhost:8000/api/animals`, form)

        actionsAnimal.addAnimal(animals, form)
    }

    return (
        <div>
            <div className="Footer">
            </div>
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <h1 className="Topic">ADD CAT OR DOG</h1>
                    <h2 className="Topic">" Please enter the truth "</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Image : รูปภาพ</label>
                        <input type="file"
                            name="username"
                            className="form-control"
                            id="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Strain : สายพันธ์</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Name : ชื่อ</label>
                        <input type="password"
                            name="password"
                            className="form-control"
                            id="password"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Old : อายุ</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Habits : นิสัย</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Because : เหตุผลที่หาบ้านใหม่</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary my-1" type="submit" onClick={addAnimal}>ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormInput;

