import axios from "axios";
const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  withCredentials: false,
});

export const getAllMovies = () => instance.get("").then((res) => res.data);
