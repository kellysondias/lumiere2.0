import React, { useEffect } from "react";
import { imgUrl } from "../../services/variables";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { MovieCard } from "./styles";
import "../../css/font-awesome-min.css";
import { PageMenu } from "../../components/page-menu/page-menu";
import { Movies } from "../../components/movies/movies";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";
import { Flex, List, SimpleGrid, Spinner } from "@chakra-ui/react";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());

	useEffect(() => {
		store.moviesShelf.fetchPage(1);
	}, [store]);

	return (
		<Movies>
			{store.moviesShelf.loader.isLoading ? (
				<Spinner />
			) : (
				<>
					<PageMenu
						page={store.moviesShelf.page}
						onNextPage={store.moviesShelf.nextPage}
						onPreviousPage={store.moviesShelf.previousPage}
					/>

					<Flex
						// direction="column"
						justify="center"
					>
						<List
							w="100%"
							bg="red"
							display="grid"
							gridTemplateRows="repeat(auto-fit, minmax(250px, 1fr))"
						>
							{store.moviesShelf.items.length === 0 ? (
								<Spinner />
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
						</List>
					</Flex>

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
