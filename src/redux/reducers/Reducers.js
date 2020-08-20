import {CHANGE_AUTH} from '../actions/Types';

const INITIAL_STATE = {
  isLogin: true,
  mockUser: {
    username: 'oktay',
    password: '12345',
  },
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
