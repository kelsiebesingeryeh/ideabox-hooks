import React from 'react'
import Card from '../Card/Card'
import './Ideas.css'

const Ideas = ({ideas, deleteIdea}) => {
    const displayIdeas = ideas?.map(idea => {
        return <Card 
        id={idea.id}
        key={idea.id}
        title={idea.title}
        description={idea.description}
        deleteIdea={deleteIdea}
        />
    })

    return (
        <div className='ideasContainer'>
            {displayIdeas}
        </div>
    )
}

export default Ideas