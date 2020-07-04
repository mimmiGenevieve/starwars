import React, { Component } from "react";
import FilmList from "./components/filmList";
import FilmData from "./components/filmData";
import ErrorComponent from "./components/errorComponent";
import LoadingSpinner from "./components/loadingSpinner";
import "./main.css";

const filmsUrl = "https://swapi.dev/api/films/";

class App extends Component {
	state = {
		error: null,
		isLoaded: false,
		showDetails: false,
		filmData: [],
		films: [],
	};

	getData = (data) => {
		this.setState({
			isLoaded: false,
		});
		const urls = data[0];
		Promise.all(
			urls.map(
				(
					url // map through the urls we get from the film
				) =>
					fetch(url)
						.then((res) => res.json())
						.then((res) => res.name) // we only need the name
			)
		).then((characters) => {
			this.setState({
				showDetails: true, // up goes the film details with the character list
				filmData: [].concat(data[1], ...characters), // populate the data we send to the film-view
				isLoaded: true, // we have finished loading
			});
		});
	};

	hideDetails = () => {
		this.setState({
			showDetails: false, // hide the film-view
			filmData: [], // empty the data we send to the film-view
		});
	};

	componentDidMount() {
		// init the loading of films when page loads
		fetch(filmsUrl)
			.then((response) => response.json())
			.then(
				// handle result
				(data) => {
					this.setState({
						isLoaded: true,
						films: data.results,
					});
				},
				// handle error
				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);
	}

	render() {
		const { error, isLoaded, films, filmData } = this.state;
		if (error) {
			return <ErrorComponent data={error} />;
		} else {
			return (
				<>
					{!isLoaded && <LoadingSpinner />}
					<FilmList callback={this.getData} data={films} />
					{this.state.showDetails && (
						<FilmData data={filmData} callback={this.hideDetails} />
					)}
				</>
			);
		}
	}
}

export default App;
