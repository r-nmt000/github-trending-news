import createDataContext from "./createDataContext";

const trendReducer = (state, action) => {
  switch(action.type) {
    case 'fetch':
      return { ...state, name:'', locations:[]};
    default:
      return state;
  }
};

const fetch = dispatch => () => {
  dispatch({ type: 'fetch'});
};
const addLocation = dispatch => (location, recording) => {
  dispatch({type: 'add_current_location', payload: location});
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { recording: false, locations:[], currentLocation: null}
);
