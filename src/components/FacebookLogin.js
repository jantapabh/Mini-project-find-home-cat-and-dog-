import React, { useEffect, useState } from 'react'
import fire from '../config/fire';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios'

const FacebookLogin = props => {

    const [facebookLink, setFacebookLink] = useState('');
    const getFacebookLink = async () => {

        const res = await axios.get(`http://localhost/api/auth/facebook`);

        setFacebookLink(res.data);

    }

    useEffect(() => {

        getFacebookLink()

    }, []);


    return (

        <div>
            <Button href={facebookLink} >LOGIN</Button>
            <br />
            <br />
        </div>
    )
}

export default FacebookLogin;