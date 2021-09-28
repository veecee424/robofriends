import React from 'react'
import Card from './Card'


const CardList = (props) => {
    const { robots } = props;
    return (
        <div>
            {
                robots.map((robot)=> {
                    return (
                        <Card key={robot.id} name={`${robot.name}`} email={`${robot.email}`} id={`${robot.id}`}/>
                    )
                })
            }
        </div>
    )
}

export default CardList;