import {
    GET_REPOSITORIES
} from "../constants";

export const fetchProducts = () => {
    return (dispatch) => {
        fetch(`https://api.github.com/users/sykpen/repos`)
        .then((response) => response.json())
        .then((parsedResponse) => dispatch(receiveProducts(parsedResponse)));
    };
  };
  
function receiveProducts(json) {
    return {
      type: GET_REPOSITORIES,
      products: json,
    };
}

