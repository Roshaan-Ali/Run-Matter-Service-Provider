import {
  UPDATE_USER_DATA,
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
} from '../Actions/actionType';

const INITIAL_STATE = {
  isUserLogin: false,
  userData: {
    displayName: 'Michael Reiner',
  },
  accessToken: '',
};

export function UserReducer(state = INITIAL_STATE, action) {
  console.log(action.payload);
  switch (action.type) {
    case USER_SIGNUP:
      return {
        ...state,
        ...action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case USER_LOGOUT:
      return {
        ...action.payload,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
