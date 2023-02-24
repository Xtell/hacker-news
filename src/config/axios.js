import { baseApiUrl } from "../constants";
import axios from "axios";

const instance = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default instance