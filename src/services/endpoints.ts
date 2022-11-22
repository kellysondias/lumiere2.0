import { baseUrl, key } from "./variables";

export const getMovies = async (page: number) => {
	const url = await fetch(
		`${baseUrl}/trending/movie/week?api_key=${key}&page=${page}`,
	);
	const json = await url.json();
	return json.results;
};

export const getMovie = async (id: number) => {
	const url = await fetch(`${baseUrl}/movie/${id}?api_key=${key}`);
	const json = await url.json();
	return json;
};

export const getMovieSearch = async (page: number, search: string) => {
	const url = await fetch(`${baseUrl}/search/movie?api_key=${key}&page=${page}&query=${search}`);
	const json = await url.json();
	return json;
};

export const getTVShows = async(id: number, page: number) => {
	const url = await fetch(`${baseUrl}/tv/popular?api_key=${key}en-US&page=${page}`);
	const json = await url.json();
	return json;
};
