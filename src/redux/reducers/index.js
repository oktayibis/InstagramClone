import {combineReducers} from 'redux';
import reducers from './Reducers';

export default combineReducers({
  authResponse: reducers,
});
