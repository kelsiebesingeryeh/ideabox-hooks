export const getAllIdeas =  async () => {
    const response = await fetch("http://localhost:3001/api/v1/ideas")
    return response.json()
  }

export const postIdea = async (newIdea) => {
    const post = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...newIdea})
    }
    const response = await fetch("http://localhost:3001/api/v1/ideas", post)
    return response.json()
}