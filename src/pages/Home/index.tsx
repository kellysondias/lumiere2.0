import React, { useEffect } from "react";
import { imgUrl } from "../../services/variables";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { PageMenu } from "../../components/page-menu/page-menu";
import { Movies } from "../../components/movies/movies";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";
import { Box, Flex, Image, ListItem, Spinner, Text } from "@chakra-ui/react";
import { CardList } from "../../components/card-list/card-list";

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
						direction="column"
						justify="center"
					>
						<CardList>
							{store.moviesShelf.items.length === 0 ? (
								<Spinner />
							) : (
								store.moviesShelf.items.map((movie, index) => {
									const rating = movie.vote_average.toFixed(1);

									return (
										<Link key={index} to={`/movie/${movie.id}`}>
											<ListItem>
												<Box>
													<Box
														maxW={200}
														w="100%"
													>
														<Image
															w={200}
															height={280}
															src={`${imgUrl}${movie.poster_path}`}
															alt={`${movie.title}'s poster`}
														/>
													</Box>
													<Box bg="rebeccapurple" p="1rem">
														<Box fontSize="1.6rem">
															<span>{rating}</span>
														</Box>
														<Text>{movie.title}</Text>
													</Box>
												</Box>
											</ListItem>
										</Link>
									);
								})
							)}
						</CardList>
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
