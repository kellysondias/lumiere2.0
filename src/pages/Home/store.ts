import { makeAutoObservable } from "mobx";
import { AttributeShelf, PaginatedListShelf } from "@startapp/mobx-utils";
import { IMovies } from "../../interfaces/interfaces";
import { getMovies, getMovieSearch, getTopMovies } from "../../services/endpoints";

export class Store {
	constructor() {
		makeAutoObservable(this);

		this.popularMoviesShelf = new PaginatedListShelf(getMovies);

		this.topMoviesShelf = new PaginatedListShelf(getTopMovies);

		this.searchShelf = new PaginatedListShelf((page) => getMovieSearch(page, this.search.value));
	}

	public popularMoviesShelf: PaginatedListShelf<IMovies>;
	public topMoviesShelf: PaginatedListShelf<IMovies>;
	public searchShelf: PaginatedListShelf<IMovies>;

	public search = new AttributeShelf("");
}
