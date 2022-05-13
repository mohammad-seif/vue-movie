import apiModule, { onResponse, onError } from ".";
import { apiKey, base_URL } from "@/config/axios";

const api_key: string = apiKey
const BASE_URL: string = base_URL;
const q = {
  api_key
};

export const fetchMovies = async (query?: Object) => {
  const apiName = "FETCH_MOVIES"
  try {
    const items = await apiModule.get(`${BASE_URL}/discover/movie/`, { params: { ...q, ...query} });
    return await onResponse(items, apiName)
  } catch(err) {
    return onError(err, apiName);
  }
} 

export const fetchMovieById = async (movie_id: number, query?: Object) => {
  const apiName = "FETCH_MOVIE_BY_ID"
  try {
    const items = await apiModule.get(`${BASE_URL}/movie/${movie_id}`, { params: { ...q, ...query} });
    return await onResponse(items, apiName)
  } catch(err) {
    return onError(err, apiName);
  }
} 

export const fetchMovieGenres = async (query?: Object) => {
  const apiName = "FETCH_MOVIE_GENRE"
  try {
    const items = await apiModule.get(`${BASE_URL}/genre/movie/list`, { params: { ...q, ...query} });
    return await onResponse(items, apiName)
  } catch(err) {
    return onError(err, apiName);
  }
} 

export const fetchMovieCredits = async (movie_id: number, query?: Object) => {
  const apiName = "FETCH_MOVIE_CREDITS"
  try {
    const items = await apiModule.get(`${BASE_URL}/movie/${movie_id}/credits`, { params: { ...q, ...query} });
    return await onResponse(items, apiName)
  } catch(err) {
    return onError(err, apiName);
  }
} 

