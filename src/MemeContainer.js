import React from "react";

function MemeContainer(props) {
  return (
    <div>
      <form className="meme-form">
        <input
          input="text"
          name="topText"
          value={props.data.topText}
          onChange={props.handleChange}
        ></input>

        <input
          input="text"
          name="bottomText"
          value={props.data.bottomText}
          onChange={props.handleChange}
        ></input>

        <button type="button" onClick={props.randomMeme}>
          Generate Meme
        </button>
      </form>

      <div className="meme">
        <img src={props.data.chosenMeme} alt="" />
        <h2 className="top">{props.data.topText}</h2>
        <h2 className="bottom">{props.data.bottomText}</h2>
      </div>
    </div>
  );
}

export default MemeContainer;
