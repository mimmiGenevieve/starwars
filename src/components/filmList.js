import React, { Component } from "react";

class FilmList extends Component {
	handleClick(urls, film) {
		return this.props.callback([urls, film]); // return the films name and the array of urls to get the characters
	}

	render() {
		const films = this.props.data; // get the films into an array
		return (
			<div className="filmsWrapper">
				{films.map((
					// start of mapping out the films
					film
				) => (
					<div
						className="card"
						onClick={(e) => this.handleClick(film.characters, film.title)}
						key={film.episode_id}
					>
						<h1 key={film.title}>{film.title}</h1>
						<p key={film.release_date}>{film.release_date}</p>
					</div>
				))}
			</div>
		);
	}
}

export default FilmList;
