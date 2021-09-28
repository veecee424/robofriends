import React from 'react'
import 'tachyons'

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Alien pic' src={`https://robohash.org/${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;