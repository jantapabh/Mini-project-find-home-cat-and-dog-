import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Carousel } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBView, MDBMask, MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import { firestore } from '../index.js'
import { useSelector, useDispatch } from 'react-redux'






const AnimalCard =  props => {


    //Reduc thunk ส่งผ่าน props


    const form = useSelector(state => state.form)
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animal)

    //Data from firestore 
     
    const [myAnimal, setMyAnimal] = useState([])
    const [id, setId] = useState(0)
    const [imgUrl1, setImgUrl1] = useState('')
    const [imgUrl2, setImgUrl2] = useState('')
    const [imgUrl3, setImgUrl3] = useState('')
    const [strain, setStrain] = useState('')
    const [name, setName] = useState('')
    const [old, setOld] = useState(0)
    const [habits, setHabits] = useState('')
    const [because, setBecause] = useState('')
    const [status, setStatus] = useState('')
    const [imgUrlUser, setImgUrlUser] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [facebook, setFacebook] = useState('')
    const [line, setLine] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    
  

    

    const getAnimal = async () => {

        const result = await axios.get(`http://localhost:80/api/animals`)
        setMyAnimal(result.data)
      
    }

    useEffect(() => {

        getAnimal()
        retriveData()


    }, [])

    const deleteAnimal = async () => {

        const result = await axios.delete(`http://localhost:80/api/animals/${props.id}`)
        dispatch({ type: 'DELETE_ANIMAL', id: props.id })
    }

    const updateAnimal = async () => {
        const result = await axios.put(`http://localhost:80/api/animals/${props.id}`, form)
        dispatch({ type: 'UPDATE_ANIMAL', id: props.id, animals: { ...form, id: props.id } })
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


     const retriveData = () => {

         firestore.collection("animals").onSnapshot(( snapshot) => {

            let myAni =  snapshot.docs.map(d => {

                 const {id , imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip} = d.data()
                 
                
                  console.log(id , imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip)
                   
                  setId(id)
                  setImgUrl1(imgUrl1)
                  setImgUrl2(imgUrl2)
                  setImgUrl3(imgUrl3)
                  setStrain(strain)
                  setName(name)
                  setOld(old)
                  setHabits(habits)
                  setBecause(because)
                  setStatus(status)
                  setImgUrlUser(imgUrlUser)
                  setNameUser(nameUser)
                  setEmail(email)
                  setTelephone(telephone)
                  setFacebook(facebook)
                  setLine(line)
                  setAddress(address)
                  setCity(city)
                  setState(state)
                  setZip(zip)

                
                  return {id , imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip}

             })
             setMyAnimal(myAni);
             //Array ขอข้อมูลที่ดึงมากจาก firestore
   
    
         })
     }



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
                                    STRAIN : {strain} <br />
                                    NAME : {name} <br />
                                    OLD: {old} ปี<br />
                                </strong>
                            </h3>
                            <p>
                                HABIT : {habits} <br />
                                    BECAUSE : {because} <br />
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
                                src={imgUrlUser}
                                style={{ width: 250, height: 180 }}
                            />
                        </div>
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <ListGroup className="d-flex justify-content-center mg-1">
                        <ListGroup.Item>NAME : {name}</ListGroup.Item>
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
    )
}

export default AnimalCard;