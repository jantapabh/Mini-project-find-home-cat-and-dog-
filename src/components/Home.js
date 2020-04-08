import React, { Component, useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios';



class Home extends Component {

    constructor(props) {

        super(props)

        this.state = {

            email: "",
            password: " "
        }

    }

    render() {
        return (
            <div>
                <div>
                    Home
            </div>
                <button>Logout</button>
            </div>
        )
    }

}



export default Home;