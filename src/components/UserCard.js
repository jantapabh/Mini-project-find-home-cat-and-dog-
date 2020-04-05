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


    return (
             <div>
                <ListGroup>
                    <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves >
                        <div class="d-flex justify-content-center mb-5">
                            <img
                                className="img-fluid"
                                src={props.imgUrl}
                                style={{ width: 250, height: 180 }}
                            />
                        </div>
                    </MDBView>
                    <ListGroup.Item>NAME : {props.name}</ListGroup.Item>
                    <ListGroup.Item>FACEBOOK : {props.facebook}</ListGroup.Item>
                    <ListGroup.Item>LINE : {props.line}</ListGroup.Item>
                    <ListGroup.Item>EMAIL : {props.email}</ListGroup.Item>
                    <ListGroup.Item>ADDRESS : {props.address}  {props.city}  {props.state}  {props.zip}</ListGroup.Item>
                </ListGroup>
            </div>
    )
}

export default UserCard;