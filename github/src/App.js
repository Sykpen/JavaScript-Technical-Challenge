import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actions";

class App extends Component {
  componentDidMount() {
    return this.props.fetchProducts();
  }

  render() {
    let listOfRepos = this.props.GitHubRepositories;
    console.log(listOfRepos && listOfRepos)
    return (
      <div>rerere</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    GitHubRepositories: state.GitHubRepositories.repositories,
  };
};

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
