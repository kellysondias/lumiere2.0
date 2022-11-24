import { makeAutoObservable } from "mobx";
import { PaginatedListShelf } from "@startapp/mobx-utils";
import { IMovies } from "../../interfaces/interfaces";
import { getMovies, getMovieSearch, getTopMovies } from "../../services/endpoints";

export class Store {
	constructor() {
		makeAutoObservable(this);

		this.popularMoviesShelf = new PaginatedListShelf((page) => {
			if (this.search !== "") {
				return getMovieSearch(page, this.search);
			}

			return getMovies(page);
		});

		this.topMoviesShelf = new PaginatedListShelf((page) => {
			if (this.search !== "") {
				return getMovieSearch(page, this.search);
			}

			return getTopMovies(page);
		});
	}

	public popularMoviesShelf: PaginatedListShelf<IMovies>;
	public topMoviesShelf: PaginatedListShelf<IMovies>;

	public search= "";

	public setSearch(e: string) {
		this.search = e;
	}
}
