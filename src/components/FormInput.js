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
                    <div className="text-center">
                        <button className="btn btn-primary my-1" type="submit" onClick={addAnimal}>ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormInput;

