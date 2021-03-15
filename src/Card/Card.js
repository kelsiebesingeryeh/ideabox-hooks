import React from 'react'
import './Card.css'

const Card = ({id, title, description, deleteIdea}) => {
    return (
        <div className='card'>
            <p>{title}</p>
            <p>{description}</p>
            <button onClick={() => deleteIdea(id)}>🗑</button>
        </div>
    )
}

export default Card