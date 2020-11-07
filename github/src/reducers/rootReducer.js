import { combineReducers } from "redux";
import { GitHubRepositoriesReducer } from './GitHubRepositoriesReducer'

export const rootReducer = combineReducers({
  GitHubRepositories: GitHubRepositoriesReducer,
});
