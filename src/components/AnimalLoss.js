import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Carousel } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBView, MDBMask, MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import { firestore } from '../index'

export default props => {

   const { animalLoss } = props
    const { id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, date, look,   imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip} = animalLoss

   
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
    


  

    //Reduc thunk ส่งผ่าน props





    return (
        <li>
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
                                                src={imgUrl1}
                                                style={{ height: 280, width: 330 }}
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={imgUrl2}
                                                style={{ height: 300, width: 280 }}
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={imgUrl3}
                                                style={{ height: 330, width: 330 }}
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
                                        STRAIN : {strain} <br />
                                        NAME : {name} <br />
                                        OLD: {old} ปี<br />
                                        วันที่หาย: {date} <br />
                                        ลักษณะเพิ่มเติม: {look} <br />
                                        
                                    </strong>
                                </h3>
            
                                <MDBBtn color="secondary" size="md" className="light" gradient="peach" style={{ padding: 5, margin: 5 }} onClick={handleShow} > CONTACT </MDBBtn>
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
                                    src={imgUrlUser}
                                    style={{ width: 250, height: 180 }}
                                />
                            </div>
                            <MDBMask overlay="white-slight" />
                        </MDBView>
                        <ListGroup className="d-flex justify-con  tent-center mg-1">
                            <ListGroup.Item>NAME : {nameUser}</ListGroup.Item>
                            <ListGroup.Item>EMAIL : {email}</ListGroup.Item>
                            <ListGroup.Item>TELEPHONE : {telephone}</ListGroup.Item>
                            <ListGroup.Item>FACEBOOK : {facebook}</ListGroup.Item>
                            <ListGroup.Item>LINE : {line}</ListGroup.Item>
                            <ListGroup.Item>ADDRESS: {address}  {city}  {state} {zip}</ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            OK
      </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </li>
    )


}

