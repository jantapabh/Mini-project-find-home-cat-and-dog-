import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalCard.css';
import { animalActions } from '../redux/store'
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBView, MDBMask, MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { userActions } from '../redux/store'


const AnimalCard = props => {

    const [users, setUsers] = useState({});
    const [id, setId] = useState(0)
    const [imgUrl, setImgurl] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [facebook, setFacebook] = useState('')
    const [line, setLine] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState(0)


    const form = useSelector(state => state.form)
    const actions = bindActionCreators(animalActions, useDispatch())
    const dispatch = useDispatch();

    useEffect(() => {

        getUser();
        console.log('UseEffect is running');

    }, [])

    const getUser = async () => {

        const result = await axios.get(`http://localhost:8000/api/users`)
        console.log(result);
        setUsers(result.data)

    }

    const getUsers = async () => {

        const result = await axios.get(`http://localhost:8000/api/users/${id}`)
        setId(result.data.id)
        setImgurl(result.data.imgUrl)
        setName(result.data.name)
        setPassword(result.data.password)
        setEmail(result.data.email)
        setTelephone(result.data.telephone)
        setFacebook(result.data.facebook)
        setLine(result.data.line)
        setAddress(result.data.address)
        setCity(result.data.city)
        setState(result.data.state)
        setZip(result.data.zip)
    }

    const deleteAnimal = async () => {

        const result = await axios.delete(`http://localhost:80/api/animals/${props.id}`)
        actions.deleteAnimal(props.id)
    }

    const updateAnimal = async () => {
        const result = await axios.put(`http://localhost:80/api/animals/${props.id}`, form)
        actions.updateAnimal(props.id, form)
    }


    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const printUsers = () => {

        if (users && users.length)
            return users.map((user, index) => {
                return (
                    <div class="d-flex justify-content-center">
                        <ListGroup key={index}>
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves >
                                <img
                                    className="img-fluid"
                                    src={user.imgUrl}
                                    style={{ width: 250, height: 180 }}
                                />
                            </MDBView>
                            <ListGroup.Item>NAME : {user.name}</ListGroup.Item>
                            <ListGroup.Item>FACEBOOK : {user.facebook}</ListGroup.Item>
                            <ListGroup.Item>LINE : {user.line}</ListGroup.Item>
                            <ListGroup.Item>EMAIL : {user.email}</ListGroup.Item>
                            <ListGroup.Item>ADDRESS : {user.address}  {user.city}  {user.state}  {user.zip}</ListGroup.Item>
                        </ListGroup>
                    </div>
                )
            })
        else {
            return (<h2> No User </h2>)
        }
    }


    return (

        <div>
            <MDBCard className="my-5 px-5 pb-5" >
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src={props.imgUrl}
                                    alt=""
                                    style={{ width: 250, height: 180 }}
                                />

                                <MDBMask overlay="white-slight" />

                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <a href="#!" className="green-text">
                                <h6 className="font-weight-bold mb-1">
                                    <MDBIcon icon="dog" className="pr-2" /> Animal </h6>
                            </a>
                            <h3 className="font-weight-bold mb-1 p-0">
                                <strong>  STRAIN : {props.strain} <br />
                                    NAME : {props.name} <br />
                                    OLD: {props.old} ปี<br />
                                </strong>
                            </h3>
                            <p>
                                HABIT : {props.habits} <br />
                                    BECAUSE : {props.because} <br />
                            </p>
                            <MDBBtn color="secondary" size="md" className="waves-light " style={{ padding: 5, margin: 5 }} onClick={showModal}> CONTACT </MDBBtn>
                            <MDBBtn color="success" style={{ padding: 5, margin: 5 }} onClick={deleteAnimal}> DELETE</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>CONTACT THIS USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {printUsers()}
                </Modal.Body>
                <Modal.Footer>
                    <MDBBtn color="secondary" size="md" className="waves-light " style={{ padding: 5, margin: 5 }} onClick={hideModal}>OK </MDBBtn>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AnimalCard;