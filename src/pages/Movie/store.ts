import { makeAutoObservable } from "mobx";
import { FetchModelShelf } from "@startapp/mobx-utils";
import { IMovie } from "../../interfaces/interfaces";
import { getMovie, getMovieSearch } from "../../services/endpoints";
import { IMovies } from "../../interfaces/interfaces";
import { AttributeShelf, PaginatedListShelf } from "@startapp/mobx-utils";

export class Store {
  	constructor(id?: string) {
    	makeAutoObservable(this);
    	this.movieShelf = new FetchModelShelf(id, getMovie);
		this.searchShelf = new PaginatedListShelf((page) => getMovieSearch(page, this.search.value));
  	}

	public movieShelf: FetchModelShelf<IMovie, string | undefined>;
	public searchShelf: PaginatedListShelf<IMovies>;
	public search = new AttributeShelf("");
	public isMovie = true;
	public setIsMovie() {
		this.isMovie=false;
	}
}
