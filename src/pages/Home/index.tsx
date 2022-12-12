
import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Text,
	Image,
	Flex,
	Spinner,
	Heading,
	Box,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { imgUrl, backdropUrl } from "../../services/variables";
import { CardInfo } from "../../components/card-info/card-info";
import { CardList } from "../../components/card-list/card-list";
import UseImageColor from "use-image-color";
import Header from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Button } from "../../components/button/button";

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
		store.searchShelf.fetchPage(1);
	}, [store]);

	const wallpaper = (store.popularMoviesShelf.items[0] ? (backdropUrl + store.popularMoviesShelf.items[0].backdrop_path) : "");

	const { colors } = UseImageColor(
		store.popularMoviesShelf.items[0] ? (wallpaper) : "",
		{ cors: true, colors: 5},
	);

	return (
		<>
			<Header
				searchAttributeShelf={store.search}
				onSearchClick={() => store.searchShelf.fetchPage(1)}
			/>

			{store.popularMoviesShelf.items[0] &&
				<Box
					bg={colors && `linear-gradient(to bottom, ${colors[0]}, ${colors[1]}, ${colors[2]})`}
				>
					<Box
						p="30rem 5rem"
						bg={`url(${wallpaper}) no-repeat center center`}
						position="relative"
						backgroundSize="cover"
					>
						<Flex color="#fff"  direction="column">
							<Heading size="3xl" pb="1.5rem">
								{store.popularMoviesShelf.items[0].title}
							</Heading>
							<Text fontWeight={500} fontSize="2xl" w="50%">
								{store.popularMoviesShelf.items[0].overview}
							</Text>
							<Link
								to={`/movie/${store.popularMoviesShelf.items[0].id}`}
							>
								<Button
									text="SEE MOVIE"
									background="#000"
									marginTop="1.5rem"
									fontSize="md"
									variant="outline"
									w="72px"
									p="1.5rem 5rem"
									color="#ffffffbf"
									borderColor="#ffffffbf"
								/>
							</Link>
						</Flex>
					</Box>

					<Flex
						justify="center"
						align="center"
						direction="column"
					>
						<Heading
							p="30px 0"
							fontSize="6xl"
							fontWeight={500}
						>
							The best of Cinema
						</Heading>
						<Text
							fontSize="4xl"
							w="80%"
							textAlign="center"
						>
							Watch thousands of movies online or on your Smart TV, game console, PC, Mac, mobile phone, tablet and more. Start your free trial today.
						</Text>
					</Flex>

					{store.popularMoviesShelf.items[0] &&
						<Flex
							pt="5rem"
							justify="center"
							direction="column"
						>
							{store.searchShelf.items.length !== 0 ?
								<>
									<Flex
										m="2rem"
									>
										{store.searchShelf.loader.isLoading ? (
											<Flex
												m="auto"
												align="center"
												justify="center"
											>
												<Spinner color="#fff" />
											</Flex>
										) : (
											<Flex
												wrap="wrap"
												justify="center"
												align="center"
											>
												{store.searchShelf.items.map((movie, index) => (
													<Link
														style={{width:"200px"}}
														key={index}
														to={`/movie/${movie.id}`}
													>
														<CardList key={index}>
															<Image
																src={`${imgUrl}${movie.poster_path}`}
																alt={movie.title}
																boxSize={300}
															/>
															<CardInfo>
																<Text
																	fontWeight={500}
																	mb={3}
																>
																	{movie.title}
																</Text>
																<Text>
																	{movie.release_date.slice(0, 4)}
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
													</Link>
												))}
											</Flex>
										)}
									</Flex>
								</>
								:
								<>
									<Text
										textAlign="center"
										fontSize="4xl"
										fontWeight={500}
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
										) : (
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
																	{movie.release_date.slice(0, 4)}
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
										fontWeight={500}
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
										) : (
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
																	{movie.release_date.slice(0, 4)}
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
								</>}
						</Flex>}
					<Footer />
				</Box>}
		</>
	);
};

export default observer(Home);
