import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "green"
    };
  }

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name motherfucker!"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Second Name motherfucker!"
          onChange={this.handleChange}
        />
        <br />
        <textarea
          value={"blah blah blah mother fucker!"}
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Is friendly?
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>

        <br />

        <label>
          Favourite color mother fucker!
          <select
            onChange={this.handleChange}
            value={this.state.favColor}
            name="favColor"
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
        </label>

        <br />

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are {this.state.gender}</h2>
        <h2>Your favourite colour is {this.state.favColor}</h2>
      </form>
    );
  }
}

export default App;
