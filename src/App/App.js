import React, { useState, useEffect } from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'
import './App.css'
import { getAllIdeas, postIdea, deleteIdeaReq } from "../apiCalls";

function App() {
  const [ideas, setIdeas] = useState([])
  const [error, setError] = useState('An Error has occured')

  const getIdeas = async () => {
    setError('')

    try {
      const ideas = await getAllIdeas()
      setIdeas(ideas)
    } catch(error) {
      setError(error)
    }
  }

  useEffect(() => {
    getIdeas()
  }, [])

  const addIdea = async (newIdea) => {
    try {
      postIdea(newIdea)
      setIdeas([...ideas, newIdea])
    } catch(error) {
      setError(error)
    }
  }

  const deleteIdea = async (id) => {
    try {
      deleteIdeaReq(id)
    } catch(error) {
      setError(error)
    }
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }
  
  return (
    <main className="App">
      <h1>Ideabox</h1>
      <Form addIdea={addIdea}/>
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App
