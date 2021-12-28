import React, { Component } from "react";

class BlogPost extends React.Component {
  cardStyle = {
    width: "70vw",
    margin: "auto",
    marginTop: 30,
  };

  render() {
    const { post } = this.props;
    const title = post.title;
    const author = post.author;
    const content = post.content;

    return (
      <div>
        <div className="card" style={this.cardStyle}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
            <p className="card-text">{content}</p>
            <button className="btn btn-outline-primary">Share</button>
            {post.isNew ? (
              <button
                className="btn btn-outline-danger"
                style={{ float: "right" }}
                onClick={() => {
                  this.props.handleDelete(post);
                }}
              >
                <i className="bi bi-trash"></i>
              </button>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
