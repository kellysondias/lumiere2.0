import { baseUrl, key } from "./variables";

export const getMovies = async (page: number) => {
	const url = await fetch(`${baseUrl}/trending/movie/week?api_key=${key}&page=${page}`);
	const json = await url.json();
	return json.results;
};

export const getTopMovies = async (page: number) => {
	const url = await fetch(`${baseUrl}/movie/top_rated?api_key=${key}&language=en-US&page=${page}`);
	const json = await url.json();
	return json.results;
};

export const getMovie = async (id: any) => {
	const url = await fetch(`${baseUrl}/movie/${id}?api_key=${key}`);
	const json = await url.json();
	return json;
};

export const getMovieSearch = async (page: number, search: string) => {
	const url = await fetch(`${baseUrl}/search/movie?api_key=${key}&page=${page}&query=${search}`);
	const json = await url.json();
	return json.results;
};

