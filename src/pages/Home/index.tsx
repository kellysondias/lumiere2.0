/* eslint-disable no-console */

import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Text,
	Image,
	Flex,
	Spinner,
	Heading,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { imgUrl } from "../../services/variables";
import { CardInfo } from "../../components/card-info/card-info";
import { CardList } from "../../components/card-list/card-list";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const responsive = {
		0: {items: 1},
		568: {items: 2},
		1024: {items: 5},
	};

	useEffect(() => {
		store.popularMoviesShelf.fetchPage(1);
		store.topMoviesShelf.fetchPage(1);
	}, [store]);

	// console.log("Filmes populares:",store.popularMoviesShelf.items);
	console.log("Top filmes:",store.topMoviesShelf.items);

	return (
		<>

			<Flex
				justify="center"
				align="center"
				direction="column"
			>
				<Heading
					p="30px 0"
					fontSize="4xl"
					fontWeight={500}
				>
					The best of Cinema
				</Heading>
				<Text
					pb="1.5rem"
					fontSize="xl"
					color="#979394de"
				>
					Watch thousands of movies online or on your Smart TV, game console, PC, Mac, mobile phone, tablet and more. Start your free trial today.
				</Text>
			</Flex>

			<Flex
				justify="center"
				direction="column"
			>
				<Text
					textAlign="center"
					p="1rem"
					fontSize="4xl"
				>
					Trending Movies
				</Text>
				<Flex
					m="2rem"
				>
					{store.popularMoviesShelf.loader.isLoading ? (
						<Flex
							m="auto"
							align="center"
							justify="center"
						>
							<Spinner />
						</Flex>
					): (
						<>
							<AliceCarousel
								responsive={responsive}
								keyboardNavigation
								disableDotsControls
								infinite
							>
								{store.popularMoviesShelf.items.map((movie, index) => (
									<CardList key={index}>
										<Link to={`/movie/${movie.id}`}>
											<Image
												src={`${imgUrl}${movie.poster_path}`}
												alt={movie.title}
												boxSize={300}
											/>
										</Link>
										<CardInfo>
											<Text
												fontWeight={500}
												mb={3}
											>
												{movie.title}
											</Text>
											<Text>
												{movie.release_date.slice(0,4)}
											</Text>
											<Text
												position="absolute"
												left={15}
												bottom="20px"
											>
												<StarIcon color="#979394" m="0 0.4rem 0.4rem 0" />
												{movie.vote_average.toFixed(1)}
											</Text>
										</CardInfo>
									</CardList>
								))}
							</AliceCarousel>
						</>
					)}
				</Flex>

				<Text
					textAlign="center"
					p="1rem"
					fontSize="4xl"
				>
					Top Rated Movies
				</Text>
				<Flex m="2rem">
					{store.topMoviesShelf.loader.isLoading ? (
						<Flex
							m="auto"
							align="center"
							justify="center"
						>
							<Spinner />
						</Flex>
					): (
						<>
							<AliceCarousel
								responsive={responsive}
								keyboardNavigation
								disableDotsControls
								infinite
							>
								{store.topMoviesShelf.items.map((movie, index) => (
									<CardList key={index}>
										<Link to={`/movie/${movie.id}`}>
											<Image
												src={`${imgUrl}${movie.poster_path}`}
												alt={movie.title}
												boxSize={300}
											/>
										</Link>
										<CardInfo>
											<Text
												fontWeight={500}
												mb={3}
											>
												{movie.title}
											</Text>
											<Text>
												{movie.release_date.slice(0,4)}
											</Text>
											<Text
												position="absolute"
												left={15}
												bottom="20px"
											>
												<StarIcon color="#979394" m="0 0.4rem 0.4rem 0" />
												{movie.vote_average.toFixed(1)}
											</Text>
										</CardInfo>
									</CardList>
								))}
							</AliceCarousel>
						</>
					)}
				</Flex>
			</Flex>
		</>
	);
};

export default observer(Home);
