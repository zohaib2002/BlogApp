import React, { Component } from "react";
import Axios from "axios";
import Navbar from "./components/navbar";
import PostList from "./components/postList";
import InputBar from "./components/inputBar";
import Post from "./post.js";

class App extends React.Component {
  state = {
    postlist: [],
  };

  componentDidMount() {
    Axios.get("https://blog1api.herokuapp.com/posts").then((response) => {
      if (response.status === 200) {
        const postlist = response.data.map((post) => {
          return new Post(post.title, post.author, post.content);
        });
        postlist.reverse();
        this.setState({ postlist: postlist });
      } else {
        alert("Error loading posts! Status: " + response.status);
      }
    });
  }

  handlePost = (post) => {
    let uniqueTitle = true;

    for (let i = 0; i < this.state.postlist.length; i++) {
      if (this.state.postlist[i].title === post.title) {
        uniqueTitle = false;
        break;
      }
    }

    if (uniqueTitle) {
      const requestBody = {
        title: post.title,
        author: post.author,
        content: post.content,
      };
      Axios.post("https://blog1api.herokuapp.com/posts", requestBody).then(
        (response) => {
          if (response.status === 200) {
            const postlist = this.state.postlist;
            postlist.unshift(post);
            this.setState({ postlist });
          } else {
            alert("Post not published! Status: " + response.status);
          }
        }
      );
    } else {
      alert("Title already used!");
    }
  };

  handleDelete = (post) => {
    const queryTitle = post.title.split(" ").join("+");
    const url = "https://blog1api.herokuapp.com/posts?title=" + queryTitle;
    Axios.delete(url).then((response) => {
      if (response.status === 200) {
        const postlist = this.state.postlist;
        for (let i = 0; i < postlist.length; i++) {
          if (postlist[i].title === post.title) {
            postlist.splice(i, 1);
            break;
          }
        }
        this.setState({ postlist });
      } else {
        alert("Post not deleted! Status:" + response.status);
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <InputBar handlePost={this.handlePost} />
          {this.state.postlist.length != 0 ? (
            <PostList
              postlist={this.state.postlist}
              handleDelete={this.handleDelete}
            />
          ) : (
            <div style={{ textAlign: "center" }}>
              <p>There are no posts :(</p>
            </div>
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
