import React, { Component } from "react";
import "./styling/App.css";
import Header from "./comps/Header.js";
import Form from "./comps/Form.js";

export class App extends Component {
	render() {
		return (
			<center id="container">
				<Header />
				<Form />
			</center>
		);
	}
}

export default App;
