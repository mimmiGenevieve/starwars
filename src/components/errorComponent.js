import React, { Component } from "react";

class ErrorComponent extends Component {
	handleClick() {
		return window.location.reload();
	}
	render() {
		const errorMsg = this.props.data; // get the error message
		return (
			<div className="errorDiv">
				<h1>These are not the droids you are looking for.</h1>
				<img
					src="https://78.media.tumblr.com/4f190f10f43e714b8b86f72126167ee5/tumblr_nb1pawXGlz1twgs7qo3_500.gif"
					alt="Move along"
				></img>
				<p>
					It seems something went wrong, you can peek the error message down
					below:
				</p>
				<div class="errorMsg">{errorMsg}</div>
				<button onClick={(e) => this.handleClick()}>Reload page</button>
			</div>
		);
	}
}

export default ErrorComponent;
