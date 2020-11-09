import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import OneRepository from "../components/oneRepository";
import { FormControl, Button, InputGroup, Container } from "react-bootstrap";

class App extends Component {
  componentDidMount() {
    return this.props.fetchProducts();
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  updateSearchInput = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const repositoriesList = [];
    let repositories = this.props.GitHubRepositories;
    let filteredRepositories =
      repositories &&
      repositories.filter((repository) => {
        return repository.name.indexOf(this.state.inputValue) !== -1;
      });

    filteredRepositories &&
      filteredRepositories.forEach((repositorie) => {
        repositoriesList.push(
          <OneRepository
            key={repositorie.id}
            name={repositorie.name}
            language={repositorie.language}
            isPrivate={repositorie.private}
            updated_at={repositorie.updated_at}
          />
        );
      });
    return (
      <Fragment>
        <Container>
          <div>
            <InputGroup className="mb-3 mt-3">
              <FormControl
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={this.state.inputValue}
                onChange={this.updateSearchInput}
              />
            </InputGroup>
          </div>
          {filteredRepositories.length === 30 ? (
            <p>Type something for search</p>
          ) : (
            <p>
              {filteredRepositories.length} results for '{" "}
              {this.state.inputValue} '
            </p>
          )}
          {repositoriesList}
        </Container>
      </Fragment>
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
