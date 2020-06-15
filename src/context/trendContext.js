import createDataContext from "./createDataContext";
import { fetchRepositories } from '@huchenme/github-trending';

const trendReducer = (state, action) => {
  switch(action.type) {
    case 'fetch_trend':
      return { repositories: action.payload, isLoading: false };
    case 'load_list_screen':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

const loadListScreen = dispatch => () => {
  dispatch({type: 'load_list_screen'})
};

const fetchTrend = dispatch => (language, period) => {
  fetchRepositories({language: language, since: period})
    .then((repositories) => {
      dispatch({type: 'fetch_trend', payload: repositories});
    });
};

export const { Context, Provider } = createDataContext(
  trendReducer,
  {fetchTrend, loadListScreen},
  {repositories:[], isLoading: true}
);
