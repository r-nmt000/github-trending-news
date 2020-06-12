import createDataContext from "./createDataContext";
import { fetchRepositories } from '@huchenme/github-trending';

const trendReducer = (state, action) => {
  switch(action.type) {
    case 'fetch_trend':
      return { repositories: action.payload };
    default:
      return state;
  }
};

const fetchTrend = dispatch => (language, period, spokenLanguage) => {
  console.log(language);
  console.log(period);

  fetchRepositories({language: language, since: period})
    .then((repositories) => {
      console.log(repositories);
      dispatch({type: 'fetch_trend', payload: repositories});
    });
};

export const { Context, Provider } = createDataContext(
  trendReducer,
  {fetchTrend},
  []
);
