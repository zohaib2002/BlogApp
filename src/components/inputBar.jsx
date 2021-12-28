import React, { Component } from "react";
import Post from "../post";

class InputBar extends React.Component {
  state = {
    isEnabled: false,
    title: "",
    author: "",
    content: "",
  };

  inputStyle = {
    width: "50vw",
    margin: "auto",
    marginTop: 30,
  };

  render() {
    return (
      <div style={this.inputStyle}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            placeholder={
              this.state.isEnabled ? "Title" : "What's on your mind?"
            }
            aria-label={this.state.isEnabled ? "Title" : "What's on your mind?"}
            aria-describedby="button-addon2"
            onChange={(evn) => {
              this.setState({ title: evn.target.value });
            }}
            onFocus={() => {
              this.setState({ isEnabled: true });
            }}
            onBlur={() => {
              if (
                this.state.title.length +
                  this.state.author.length +
                  this.state.content.length ==
                0
              ) {
                this.setState({ isEnabled: false });
              }
            }}
          />
        </div>
        {this.state.isEnabled ? (
          <div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name"
              aria-label="Your Name"
              aria-describedby="button-addon2"
              onChange={(evn) => {
                this.setState({ author: evn.target.value });
              }}
              onBlur={() => {
                if (
                  this.state.title.length +
                    this.state.author.length +
                    this.state.content.length ==
                  0
                ) {
                  this.setState({ isEnabled: false });
                }
              }}
            />
            <textarea
              className="form-control mb-3"
              placeholder="What's on your mind?"
              aria-label="With textarea"
              rows="5"
              onChange={(evn) => {
                this.setState({ content: evn.target.value });
              }}
              onBlur={() => {
                if (
                  this.state.title.length +
                    this.state.author.length +
                    this.state.content.length ==
                  0
                ) {
                  this.setState({ isEnabled: false });
                }
              }}
            ></textarea>
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={() => {
                if (this.state.title.length === 0) {
                  alert("Please provide a Title");
                } else if (this.state.author.length === 0) {
                  alert("Please provide yout Name");
                } else {
                  const post = new Post(
                    this.state.title,
                    this.state.author,
                    this.state.content,
                    true
                  );
                  this.props.handlePost(post);
                  this.setState({
                    isEnabled: false,
                    title: "",
                    author: "",
                    content: "",
                  });
                }
              }}
            >
              <b>Publish</b>
            </button>
          </div>
        ) : (
          <span> </span>
        )}
      </div>
    );
  }
}

export default InputBar;
