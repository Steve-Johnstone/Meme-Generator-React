import React, { Component } from "react";

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
      <div>
        <form className="meme-form">
          <input
            input="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          ></input>

          <input
            input="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          ></input>

          <button type="button" onClick={this.randomMeme}>
            Generate Meme
          </button>
        </form>

        <div className="meme">
          <img src={this.state.chosenMeme} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
