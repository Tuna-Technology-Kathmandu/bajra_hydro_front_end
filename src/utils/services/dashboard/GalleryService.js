import axios from "axios";

export const getGalleries = async() => {
    try{
        const response = await axios.get('/gallery')
        return response.data.items;
    }
    catch(error){
        console.log(`Error: ${error}`);
        throw error;
    }
}