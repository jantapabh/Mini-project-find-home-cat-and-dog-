import React, { useEffect, useState} from 'react'
import fire from '../config/fire';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Form, Card } from 'react-bootstrap';

const FacebookLogin = props => {

    const actions = bindActionCreators({ ...AuthActions }, useDispatch())
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
             <Card style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card.Body>
                                <Card.Title className="topic">Facebook LOGIN</Card.Title>
                                <br />
                                <br />
                        
                                <Button href={facebookLink}>LOGIN</Button>
                                <br />
                                <br />
                            </Card.Body>
                        </Card>
        </div>
    )
}

export default FacebookLogin;