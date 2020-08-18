import {CHANGE_AUTH} from './Types';

export const changeStatus = (payload) => {
  return (dispatch) => {
    dispatch({type: CHANGE_AUTH, payload});
  };
};
