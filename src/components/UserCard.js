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


const UserCard = props => {

    const form = useSelector(state => state.form)
    const actions = bindActionCreators(animalActions, useDispatch())
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

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
                            <strong>  
                                NAME : {props.name} <br />
                                EMAIL : {props.email} <br />
                                ADDRESS : {props.address}  {props.city}  {props.state} {props.zip} <br />
                            </strong>
                        </h3>
                        <MDBBtn color="secondary" size="md" className="waves-light " style={{ padding: 5, margin: 5 }} onClick={showModal}> CONTACT </MDBBtn>
                     
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
        <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
            <div class="d-flex justify-content-center">
                <Modal.Title>CONTACT THIS USER</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
            <h3 className="font-weight-bold mb-1 p-0">
                            <strong>  
                                FACEBOOK : {props.facebook} <br />
                                LINE : {props.line} <br />
                                TELEPHONE: {props.telephone} <br />
                            </strong>
                        </h3>
            </Modal.Body>
            <Modal.Footer>
                <MDBBtn color="secondary" size="md" className="waves-light " style={{ padding: 5, margin: 5 }} onClick={hideModal}>OK </MDBBtn>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default UserCard;