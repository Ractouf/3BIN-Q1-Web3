import axios from "axios";
const baseUrl = "http://localhost:3001/scores";

const getAll = async () => {
    const response = await axios.get(baseUrl);

    return response.data;
}

const createOne = async (newObject) => {
    const response = await axios.post(baseUrl, newObject);

    return response.data;
}

export default { getAll, createOne };