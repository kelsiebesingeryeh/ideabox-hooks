export const getAllIdeas =  async () => {
    console.log('hello')
    const response = await fetch("http://localhost:3001/api/v1/ideas")
    return response.json()
  }
