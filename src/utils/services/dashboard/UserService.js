import axios from "axios";

export const getUsers = async() => {
    try{
        const response = await axios.get('/user')
        return response.data.items;
    }
    catch(error){
        console.log(`Error: ${error}`);
        throw error;
    }
}