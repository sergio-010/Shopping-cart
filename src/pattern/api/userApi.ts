import axios from "axios";

export const clothesApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/products",
});
