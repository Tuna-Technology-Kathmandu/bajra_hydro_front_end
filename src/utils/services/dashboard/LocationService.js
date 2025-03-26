import axios from "axios";

export const getLocations = async () => {
  try {
    const response = await axios.get("/location");
    return response.data.items;
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};

export const createLocation = async (data) => {
  try {
    const response = await api.post("/location", data);
    return response.data;
  } catch (error) {
    console.error(`Error creating blogs: ${error}`);
    throw error;
  }
};
