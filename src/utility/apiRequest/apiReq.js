import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

const ApiRequest = axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 10 * 1000,
    headers,
  });
  
  export default ApiRequest;