import { FETCH_WEATHER } from '../actions/index';

let weatherReducer = function(prevPayload = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return prevPayload.concat([action.payload.data]);

    default:
      return prevPayload;
  }
}

export default weatherReducer;