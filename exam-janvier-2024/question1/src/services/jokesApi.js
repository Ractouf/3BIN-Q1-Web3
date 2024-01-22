import axios from "axios";
const baseUrl = "http://localhost:3000/famous-jokes";

const getAll = async () => {
    const response = await axios.get(baseUrl);

    return response.data;
}

const patchOne = async (id, imageUrl) => {
  const response = await axios.patch(`${baseUrl}/${id}`, { imageUrl });

  return response.data;
};

export default { getAll, patchOne };
