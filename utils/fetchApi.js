import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "12fae84393msh297997af58e02fbp140267jsnf6c518c3a056",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
