import React, { Component } from "react";
import BlogPost from "./blogPost";

class PostList extends React.Component {
  render() {
    return (
      <div>
        {this.props.postlist.map((post) => {
          return (
            <BlogPost
              key={post.title}
              post={post}
              handleDelete={this.props.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default PostList;
