import React, { Component } from "react";

class FilmData extends Component {
	handleClick() {
		return this.props.callback();
	}
	render() {
		const characters = this.props.data; // get the character-list into an array
		const film = this.props.data[0]; // name of the movie is always first in the array we get from parent
		characters.shift(); // remove first element of the list (aka the films name)
		return (
			<div className="filmDataOverlay">
				<p className="closeBtn" onClick={(e) => this.handleClick()}>
					Close
				</p>
				<h1>{film}</h1>
				<h2>Characters</h2>
				<ul>
					{characters.map(function (character) {
						// mapping out the character list
						return <li key={character}>{character}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default FilmData;
