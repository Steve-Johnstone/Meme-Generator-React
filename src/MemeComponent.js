import React, { Component } from "react";
import MemeContainer from "./MemeContainer";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      memes: [],
      chosenMeme: ""
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        this.setState({ memes: response.data.memes });
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  randomMeme = () => {
    const { memes } = this.state;
    const chosenMeme = memes[Math.floor(Math.random() * memes.length)];

    this.setState({
      chosenMeme: chosenMeme.url
    });
  };

  render() {
    return (
      <MemeContainer
        data={this.state}
        handleChange={this.handleChange}
        randomMeme={this.randomMeme}
      />
    );
  }
}

export default MemeGenerator;
