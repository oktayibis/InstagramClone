import {CHANGE_AUTH} from '../actions/Types';

const INITIAL_STATE = {
  isLogin: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        ...state,
        isLogin: action.payload,
      };

    default:
      return state;
  }
};
