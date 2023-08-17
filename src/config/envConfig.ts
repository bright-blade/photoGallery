const baseUrl: string = process.env.REACT_APP_BASEURL || "";
const apiKey: string = process.env.REACT_APP_API_KEY || "apiKeyString";

const envVars = {
  baseUrl,
  apiKey,
};

export default envVars;
