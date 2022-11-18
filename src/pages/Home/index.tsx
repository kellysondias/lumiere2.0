import React, { useEffect } from "react";
import { imgUrl } from "../../services/variables";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { MoviesSection, MovieCard } from "./styles";
import "../../css/font-awesome-min.css";
import { PageMenu } from "../../components/page-menu/page-menu";
import { Movies } from "../../components/movies/movies";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());

	useEffect(() => {
		store.moviesShelf.fetchPage(1);
	}, [store]);

	return (
		<Movies>
			{store.moviesShelf.loader.isLoading ? (
				<span>Loading</span>
			) : (
				<>
					<PageMenu
						page={store.moviesShelf.page}
						onNextPage={store.moviesShelf.nextPage}
						onPreviousPage={store.moviesShelf.previousPage}
					/>

					<MoviesSection>
						<ul>
							{store.moviesShelf.items.length === 0 ? (
								<span>Loading</span>
							) : (
								store.moviesShelf.items.map((movie, index) => {
									const rating = movie.vote_average.toFixed(1);

									return (
										<Link key={index} to={`/movie/${movie.id}`}>
											<MovieCard>
												<div>
													<div>
														<img
															src={`${imgUrl}${movie.poster_path}`}
															alt={`${movie.title}'s poster`}
														/>
													</div>
													<div>
														<div>
															<i className="fa-solid fa-star" />
															<span>{rating}</span>
														</div>
														<span>{movie.title}</span>
													</div>
												</div>
											</MovieCard>
										</Link>
									);
								})
							)}
						</ul>
					</MoviesSection>

					<PageMenu
						page={store.moviesShelf.page}
						onNextPage={store.moviesShelf.nextPage}
						onPreviousPage={store.moviesShelf.previousPage}
					/>

					<Footer />
				</>
			)}
		</Movies>
	);
};

export default observer(Home);
