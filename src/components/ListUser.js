import React, { useState, useEffect } from 'react'
import './List.css'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { userActions } from '../redux/store'
import UserCard from './UserCard';

//แสดงรายการที่เพิ่มของหมาและแมว

const ListUser= props => {


    const users = useSelector(state => state.user)
    const actionUser = bindActionCreators(userActions, useDispatch())

    useEffect(() => {

     
        actionUser.getUsers()
        
    }, [])

    if (!users || !users.length)

        return (
            <h1>Not users Now </h1>
        )

    return (

        <div>
            <div>
                {
                    users.map((user, index) => (
                        <div key={index} style={{ margin: 5 }}>
                            <UserCard {...user} />
                        </div>

                    ))
                }

            </div>
        </div>

    );
}

export default ListUser;