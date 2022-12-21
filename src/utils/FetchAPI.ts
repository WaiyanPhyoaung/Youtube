import axios from "axios";

export const BASE_URL = "https://youtube138.p.rapidapi.com";

export const options = {
  url: BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchSearchApi = async (params: string) => {
  const response = await axios.get(`${BASE_URL}/${params}`, options);
  return response.data;
};
