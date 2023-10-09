import axios from 'axios';

const ApiService = (
  () => {

    const endpoint = {
      characters: "https://rickandmortyapi.com/api/character/"
    }

    const getAll = async () => {
      const response = await axios.get(endpoint.characters)
      return response.data
    }

    return {
      getAll
    }
  }
)()

export default ApiService;