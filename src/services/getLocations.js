//specific code
import axios from 'axios'

const getLocations = async () =>{
    const locations = await axios.get(`/locations`)
    return locations.data
}

export default getLocations