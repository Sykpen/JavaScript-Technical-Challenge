import {
    GET_REPOSITORIES
} from "../constants";
  
 
  const initialState = {
    repositories: [],
  };
  
  export const GitHubRepositoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_REPOSITORIES:
        return {
          ...state,
          repositories: action.products,
        };
      default:
        return state;
    }
};
  