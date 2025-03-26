import axios from "axios";

export const getDesigners = async() => {
    try{
        const response = await axios.get('/designer')
        return response.data.items;
    }
    catch(error){
        console.log(`Error: ${error}`);
        throw error;
    }
}