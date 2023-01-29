import React, { Component } from "react";
import "../styling/Comps.css";

export default class Form extends Component {
	state = {
		Name1: "",
		Department: "",
		Rating: "",
		employees: [],
	};
	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		const employeeObj = {
			Name: this.state.Name1,
			Department: this.state.Department,
			Rating: this.state.Rating,
		};
		const arr = this.state.employees;
		arr.push(employeeObj);
		this.setState({ employees: arr });
		document.getElementById("form").reset();
	};

	render() {
		return (
			<>
				<div id="form-container">
					<form id="form">
						<label htmlFor="Name">Name: </label>
						<input id="Name" type="text" name="Name1" onChange={this.changeHandler} placeholder="Enter Your Name..!" value={this.state.Name1} required></input>
						<br />
						<label htmlFor="Dept">Department: </label>
						<input id="Dept" type="text" name="Department" onChange={this.changeHandler} placeholder="Enter the Department" value={this.state.Department} required></input>
						<br />
						<label htmlFor="Rating">Rating: </label>
						<input id="rate" type="number" name="Rating" min={1} max={5} onChange={this.changeHandler} placeholder="?" value={this.state.Rating} required></input>
						<br />
						<button id="submit-btn" onClick={this.submitHandler}>
							SUBMIT
						</button>
					</form>
				</div>
				<div className="info-display-div">
					{this.state.employees.map((value, index) => {
						return (
							<span key={index} className="info-display-span">
								Name : {value.Name} Department : {value.Department} Rating : {value.Rating}
							</span>
						);
					})}
				</div>
			</>
		);
	}
}
