import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="mx-auto order-0" style={{ padding: 10 }}>
            <a
              className="navbar-brand mx-auto h1"
              href="#"
              style={{ fontSize: 40 }}
            >
              Bloggy
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
