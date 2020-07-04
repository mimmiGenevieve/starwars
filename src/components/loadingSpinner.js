import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";

class LoadingSpinner extends Component {
	render() {
		return (
			<div id="loadingComponent">
				<FontAwesomeIcon icon={faJediOrder} />
				<h1>Loading...</h1>
			</div>
		);
	}
}

export default LoadingSpinner;
