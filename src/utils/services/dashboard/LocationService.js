import axios from "axios";

export const getLocations = async() => {
    try{
        const response = await axios.get('/location')
        return response.data.items;
    }
    catch(error){
        console.log(`Error: ${error}`);
        throw error;
    }
}