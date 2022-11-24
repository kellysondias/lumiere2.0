/* eslint-disable no-console */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../../services/variables";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import {
	Box,
	Flex,
	Spinner,
	Heading,
	Image,
	Text,
	List,
	ListItem,
	Link,
} from "@chakra-ui/react";
import { Button } from "../../components/button/button";
import { BsPlay } from "react-icons/bs";

const Movie: React.FC = () => {
	const { id } = useParams();
	const store = useLocalObservable(() => new Store(id));

	useEffect(() => {
		store.movieShelf.fetchModel();
	}, [store.movieShelf]);

	if (store.movieShelf.hasModel) {
		console.log(store.movieShelf.fetchedModel);
	}

	return (
		<Flex
			direction="column"
			m="0 auto"
			w="90%"
		>
			{store.movieShelf.loader.isLoading ? (
				<Spinner
					m="5rem auto"
				/>
			) : !store.movieShelf.hasModel ? (
				<Spinner
					m="5rem auto"
				/>
			) : (
				<>
					<Flex
						wrap="wrap"
						justify="space-evenly"
						p="5rem 0 1rem 0"
					>

						<Flex
							direction="column"
							textAlign="left"
							w="50%"
							// bg="red"
						>
							<Text
								fontSize="2.5rem"
								mb="0.5rem"
								color="#ff0000"
							>
								{store.movieShelf.fetchedModel.vote_average.toFixed(1)}
							</Text>

							<Flex wrap="wrap" align="center">
								<Heading
									fontWeight="500"
									size="4xl"
									mr="1.9rem"
								>
									{store.movieShelf.fetchedModel.title}
								</Heading>
								<Text
									as="span"
									fontSize="6xl"
									color="#979394c2"
								>
									{store.movieShelf.fetchedModel.release_date.slice(0,4)}
								</Text>
							</Flex>

							<Box
								as="header"
								color="#979394c2"
								p="0.5rem 0 1.5rem 0"
							>
								<Flex
									wrap="wrap"
									align="center"
								>
									<List
										display="flex"
										textAlign="center"
										flexWrap="wrap"
									>
										{store.movieShelf.fetchedModel.genres.map((genre, index) => (
											<ListItem
												pr="1.5rem"
												key={index}
											>
												{genre.name.toUpperCase()}
											</ListItem>
										))}
									</List>
								</Flex>
							</Box>

							<Flex
								direction="column"
								justify="center"
								align="center"
							>
								<Text
									color="#979394c2"
									fontSize="2xl"
									mb="2.5rem"
								>
									{store.movieShelf.fetchedModel.overview}
								</Text>
							</Flex>

							<Link
								color="#000"
								pb="1.5rem"
								isExternal
								href={`https://www.youtube.com/results?search_query=${store.movieShelf.fetchedModel.title} Official Trailer`}
							>
								<Button
									leftIcon={<BsPlay fontSize="1.8rem" />}
									text="TRAILER"
									fontSize="md"
									variant="outline"
									w="72px"
									p="1.5rem 5rem"
									color="#ffffffbf"
									borderColor="#ffffffbf"
								/>
							</Link>

						</Flex>

						<Box
							w="100%"
							maxW="250px"
						>
							<Image
								src={`${imgUrl}${store.movieShelf.fetchedModel.poster_path}`}
								alt={`${store.movieShelf.fetchedModel.title}'s image`}
							/>
						</Box>
					</Flex>
				</>
			)}
		</Flex>
	);
};

export default observer(Movie);
