import axios from "axios";

// const API_BASE = process.env.REACT_APP_API_BASE;

const API_BASE = process.env.API_URL ||  "http://localhost:4000/api";
const SEARCH_API = `${API_BASE}/search`;


export const search = async (term) => {
    const response = await axios.get(`${SEARCH_API}?term=${encodeURIComponent(term)}`);
    return response.data;

}