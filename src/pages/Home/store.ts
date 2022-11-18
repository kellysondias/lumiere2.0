import { makeAutoObservable } from "mobx";
import { PaginatedListShelf } from "@startapp/mobx-utils";
import { IMovies } from "../../interfaces/interfaces";
import { getMovies, getMovieSearch } from "../../services/endpoints";

export class Store {
	constructor() {
		makeAutoObservable(this);

		this.moviesShelf = new PaginatedListShelf((page) => {
			if (this.search !== "") {
				return getMovieSearch(page, this.search);
			}

			return getMovies(page);
		});
	}

	public search= "";

	public moviesShelf: PaginatedListShelf<IMovies>;
}
