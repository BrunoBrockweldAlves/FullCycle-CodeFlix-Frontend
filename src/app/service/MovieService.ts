import { Movie, Movies } from '../types/Movie';
import { apiRequest, RequestOptions } from './ApiRequest';

export const getMovieById = async (id: string):Promise<Movie> => {
    return await apiRequest(`movies/${encodeURIComponent(id)}`);
}

export const getFeaturedMovies = async ():Promise<Movies> => {
    return await apiRequest('movies/featured');
}

export const getFeaturedMovie = async (id: string):Promise<Movie> => {
    return await apiRequest(`featured/${id}`);
}

export const getMoviesByGenre = async (
    genre: string,
    options?: RequestOptions
):Promise<Movies> => {
    return await apiRequest(
        `movies/`, 
        {
            genres_like: encodeURIComponent(genre),
        },
        options);
}

export const searchMovies = async(
    title: string = '',
    genre: string = '',
    options?: RequestOptions
):Promise<Movies> =>{
    return await apiRequest(
        `movies/`, 
        {
            title_like: encodeURIComponent(title),
            genres_like: encodeURIComponent(genre),
        },
        options);
}