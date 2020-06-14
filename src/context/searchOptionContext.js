import createDataContext from "./createDataContext";

const searchOptionReducer = (state, action) => {
  switch(action.type) {
    case 'set_language':
      return { ...state, language: action.payload };
    case 'set_period':
      return { ...state, period: action.payload };
    case 'set_spoken_language':
      return { ...state, spokenLanguage: action.payload };
    case 'set_search_pressed':
      return { ...state, isSearchPressed: action.payload};
    default:
      return state;
  }
};

const setLanguage = dispatch => (language) => {
  if (language === 'All') {
    language = '';
  }
  dispatch({type: 'set_language', payload: language});
};
const setPeriod = dispatch => (period) => {
  dispatch({type: 'set_period', payload: period});
};
const setSpokenLanguage = dispatch => (spokenLanguage) => {
  if (spokenLanguage === 'All') {
    spokenLanguage = '';
  }
  dispatch({type: 'set_spoken_language', payload: spokenLanguage});
};
const setSearchPressed = dispatch => (isSearchPressed) => {
  dispatch({type: 'set_search_pressed', payload: isSearchPressed});
};

export const { Context, Provider } = createDataContext(
  searchOptionReducer,
  {setLanguage, setPeriod, setSpokenLanguage, setSearchPressed},
  { language: '', period:'daily', spokenLanguage: ''}
);
