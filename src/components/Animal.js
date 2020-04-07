import React from 'react'



export default props => {

    const { animal } = props
    const { id, imgUrl1, imgUrl2, imgUrl3, strain, name, old, habits, because, status, imgUrlUser, nameUser, email, telephone, facebook, line, address, city, state, zip } = animal

     

    
    return (
        <div>
            <li>
                <div className="id">
                    {id}
                    {imgUrl1}
                    {imgUrl2}
                    {imgUrl3}
                    {strain}
                    {name}
                    {old}
                    {habits}
                    {because}
                    {status}
                </div>
                <div className="name">
                    {imgUrlUser}
                    {nameUser}
                    {email}
                    {telephone}
                    {facebook}
                    {line}
                    {address}
                    {city}
                    {state}
                    {zip}
                </div>

            </li>
        </div>
    )


}

