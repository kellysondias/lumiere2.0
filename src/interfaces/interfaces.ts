export interface IMovies {
	id: string;
	poster_path: string;
	title: string;
	vote_average: number;
	backdrop_path: string;
	release_date: string;
	overview: string;
}

export interface IMovie {
	genres: IGenres[];
	overview: string;
	poster_path: string;
	vote_average: number;
	release_date: string;
	tagline: string;
	title: string;
	original_title: string;
	backdrop_path: string;
}

export interface IGenres {
  	id: string;
  	name: string;
}
