import axios from "axios";
import envVars from "../config/envConfig";

const baseUrl = envVars.baseUrl;
export const getPhotos = (page: string = baseUrl) => {
  const config = {
    headers: {
      authorization: envVars.apiKey,
    },
  };
  return axios.get(page, config);
};
