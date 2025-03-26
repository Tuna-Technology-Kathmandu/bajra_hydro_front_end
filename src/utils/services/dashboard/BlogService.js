import axios from "axios";

export const getBlogs = async() => {
    try{
        const response = await axios.get('/blogs')
        return response.data.items;
    }
    catch(error){
        console.log(`Error: ${error}`);
        throw error;
    }
}