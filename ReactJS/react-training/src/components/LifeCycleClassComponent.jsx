import React, { Component } from "react";

class UserProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    console.log("Fetching user data...");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => this.setState({ user: data }));
  }

  componentWillUnmount() {
    console.log("Cleanup on unmount!");
  }

  render() {
    return (
      <div>
        <h2>User Profile</h2>
        {this.state.user ? (
          <p>Name: {this.state.user.name}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default UserProfileClass;