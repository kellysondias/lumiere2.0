export interface IMovies {
	id: string;
	poster_path: string;
	title: string;
	vote_average: number;
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
}

export interface IGenres {
  	id: string;
  	name: string;
}
