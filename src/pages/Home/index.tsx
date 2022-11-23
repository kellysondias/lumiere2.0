/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import { imgUrl } from "../../services/variables";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
// import { PageMenu } from "../../components/page-menu/page-menu";
import { Movies } from "../../components/movies/movies";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";
import {
	Box,
	Flex,
	Image,
	ListItem,
	Spinner,
	Text,
	Heading } from "@chakra-ui/react";
import { CardList } from "../../components/card-list/card-list";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 5 },
	};

	useEffect(() => {
		store.moviesShelf.fetchPage(1);
	}, [store]);

	// eslint-disable-next-line no-console
	// console.log(store.moviesShelf.items[0].backdrop_path);

	return (
		<Movies>
			{store.moviesShelf.loader.isLoading ? (
				<Spinner />
			) : (
				<>
					<Box
						// bg={`url(${imgUrl}${store.moviesShelf.items[0].backdrop_path}) no-repeat center center`}
						textAlign="center"
					>
						<Heading
							size="2xl"
							fontSize="3.2rem"
							m="2rem auto"
						>
							Movies & TV Shows
						</Heading>

						<Text
							as="p"
							fontSize="xl"
							textAlign="center"
						>
							Movies & TV Shows organized by what&apos;s
							recently trending.
						</Text>
					</Box>

					<Flex
						direction="column"
						justify="center"
					>
						<CardList>
							{store.moviesShelf.items.length === 0 ? (
								<Spinner />
							) : (
								<AliceCarousel
									infinite
									responsive={responsive}
								>
									{
										store.moviesShelf.items.map((movie, index) => {
											const rating = movie.vote_average.toFixed(1);

											return (
												<Link key={index} to={`/movie/${movie.id}`}>
													<ListItem gap={15}>
														<Box>
															<Box
																w={200}
															>
																<Image
																	w={200}
																	height={280}
																	src={`${imgUrl}${movie.poster_path}`}
																	alt={`${movie.title}'s poster`}
																/>
															</Box>
															<Box w={200} bg="rebeccapurple" p="1rem">
																<Box fontSize="1.6rem">
																	<Text>{rating}</Text>
																</Box>
																<Text fontSize={8}>{movie.title}</Text>
															</Box>
														</Box>
													</ListItem>
												</Link>
											);
										})
									}
								</AliceCarousel>
							)}
						</CardList>
					</Flex>

					<Footer />
				</>
			)}
		</Movies>
	);
};

export default observer(Home);
