import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../../services/variables";
import { Footer } from "../../components/footer/footer";
import { MovieSection, MoviePage } from "./styles";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";

const Movie: React.FC = () => {
	const { id } = useParams();
	const store = useLocalObservable(() => new Store(id));

	useEffect(() => {
		store.movieShelf.fetchModel();
	}, [store.movieShelf]);

	return (
		<MovieSection>
			{store.movieShelf.loader.isLoading ? (
				<span>Loading</span>
			) : !store.movieShelf.hasModel ? (
				<span>Loading</span>
			) : (
				<>
					<MoviePage>
						<div className="poster">
							<img
								src={`${imgUrl}${store.movieShelf.fetchedModel.poster_path}`}
								alt={`${store.movieShelf.fetchedModel.title}'s poster`}
							/>
						</div>

						<div className="info">
							<header>
								<div>
									<h1>{store.movieShelf.fetchedModel.title}</h1>
									<span>
										<i className="release-date">
											({store.movieShelf.fetchedModel.release_date})
										</i>
									</span>
								</div>

								<div className="rate">
									<i className="fa-solid fa-star" />
									<span>{store.movieShelf.fetchedModel.vote_average.toFixed(1)}</span>
								</div>
							</header>

							<main className="synopsis">
								<span>
									<i>{store.movieShelf.fetchedModel.tagline}</i>
								</span>
								<p>{store.movieShelf.fetchedModel.overview}</p>
							</main>

							<div className="genres">
								<h2>Genres:</h2>
								<ul>
									{store.movieShelf.fetchedModel.genres.map((genre, index) => (
										<li key={index}>{genre.name}</li>
									))}
								</ul>
							</div>
						</div>
					</MoviePage>

					<Footer />
				</>
			)}
		</MovieSection>
	);
};

export default observer(Movie);
