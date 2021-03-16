import React, { useState, useEffect } from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'
import './App.css'
import { getAllIdeas } from '../apiCalls'

function App() {
  const [ideas, setIdeas] = useState([])
  const [error, setError] = useState([])

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
    const post = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...newIdea})
    }

    try {
      const response = await fetch("http://localhost:3001/api/v1/ideas", post);
      const ideas = await response.json();
      setIdeas([...ideas, newIdea])
    } catch(error) {
      setError(error)
    }
  }

  const deleteIdea = async (id) => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
    try {
      await fetch(`http://localhost:3001/api/v1/ideas/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
        })
    } catch(error) {
      setError(error)
    }
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
