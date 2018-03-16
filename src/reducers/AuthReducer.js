import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types.js';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // state.email = action.payload;
      // return state; is a mistake, nothing in memory change
      return { ...state, email: action.payload };
      // make a new object take all of the properties of state and trought
      // into the new object, defind email property give it the value of payload

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        password: '',
        loading: false
      }; // clean the password

    case LOGIN_USER:
        return { ...state, loading: true, error: '' };

    default:
      return state;
  }
};
