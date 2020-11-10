import { GET_REPOSITORIES } from "../constants";

export const fetchRepositories = () => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/sykpen/repos`)
      .then((response) => response.json())
      .then((parsedResponse) => dispatch(receiveRepositories(parsedResponse)));
  };
};

function receiveRepositories(json) {
  return {
    type: GET_REPOSITORIES,
    products: json,
  };
}
