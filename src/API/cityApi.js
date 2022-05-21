import axios from "axios";

export const cityApi = async (city) => {
  const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=`;
  const apiKey = "9995ad9e9c273c0c3114083c55d0ccaf";
  const url = `${apiUrl}${apiKey}`;

  return await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
};




