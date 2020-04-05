import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalCard.css';
import { animalActions } from '../redux/store'
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBView, MDBMask, MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { userActions } from '../redux/store'



const AnimalCard = props => {


    const form = useSelector(state => state.form)
    const actions = bindActionCreators(animalActions, useDispatch())
    const dispatch = useDispatch();


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
                            <MDBBtn color="secondary" size="md" className="waves-light " style={{ padding: 5, margin: 5 }}  onClick={handleShow} > CONTACT </MDBBtn>
                            <MDBBtn color="success" style={{ padding: 5, margin: 5 }} onClick={deleteAnimal}> DELETE</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AnimalCard;