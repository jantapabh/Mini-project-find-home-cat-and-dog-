import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Carousel } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBView, MDBMask, MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import {firestore} from '../index.js'
import { useSelector, useDispatch } from 'react-redux'






const AnimalCard = props => {

   
   //Reduc thunk ส่งผ่าน props
   


    const animals = useSelector(state => state.animal)
    const form = useSelector(state => state.form)
    const dispatch = useDispatch();


    const deleteAnimal = async () => {

        const result = await axios.delete(`http://localhost:80/api/animals/${props.id}`)
        dispatch({ type: 'DELETE_ANIMAL', id: props.id })
    }

    const updateAnimal = async () => {
        const result = await axios.put(`http://localhost:80/api/animals/${props.id}`, form)
        dispatch({ type: 'UPDATE_ANIMAL', id: props.id, animals: {...form, id: props.id}})
    }


    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (

        <div>
            <MDBCard className="my-5 px-5 pb-5" >
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={props.imgUrl1}
                                            style={{ height: 280, width: 330 }}
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={props.imgUrl2}
                                            style={{ height: 300, width: 280 }}
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={props.imgUrl3}
                                            style={{ height: 280, width: 330 }}
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <MDBMask overlay="white-slight" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <a href="#!" className="green-text">
                                <h6 className="font-weight-bold mb-1">
                                    <MDBIcon icon="dog" className="pr-2" /> Animal </h6>
                            </a>
                            <h3 className="font-weight-bold mb-1 p-0">
                                <strong>
                                    STRAIN : {props.strain} <br />
                                    NAME : {props.name} <br />
                                    OLD: {props.old} ปี<br />
                                </strong>
                            </h3>
                            <p>
                                    HABIT : {props.habits} <br />
                                    BECAUSE : {props.because} <br />
                            </p>
                            <MDBBtn color="secondary" size="md" className="waves-light " style={{ padding: 5, margin: 5 }} onClick={handleShow} > CONTACT </MDBBtn>
                            <MDBBtn color="success" style={{ padding: 5, margin: 5 }} onClick={deleteAnimal}> DELETE</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>CONTACT DATA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MDBView className="rounded z-depth-2 mb-lg-0 mb-4 " hover waves>
                        <div className="d-flex justify-content-center mb-5">
                            <img
                                className="img-fluid"
                                src={props.imgUrlUser}
                                style={{ width: 250, height: 180 }}
                            />
                        </div>
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <ListGroup className="d-flex justify-content-center mg-1">
                        <ListGroup.Item>NAME : {props.name}</ListGroup.Item>
                        <ListGroup.Item>EMAIL : {props.email}</ListGroup.Item>
                        <ListGroup.Item>TELEPHONE : {props.telephone}</ListGroup.Item>
                        <ListGroup.Item>FACEBOOK : {props.facebook}</ListGroup.Item>
                        <ListGroup.Item>LINE : {props.line}</ListGroup.Item>
                        <ListGroup.Item>ADDRESS: {props.address}  {props.city}  {props.state} {props.zip}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AnimalCard;