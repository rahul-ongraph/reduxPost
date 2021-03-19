import {
FETCH_LOGIN_BEGIN,
FETCH_LOGIN_SUCCESS,
FETCH_LOGIN_FAILURE,
} from './action'
  
  const initialState = {
    login: [],
    loading: false,
    error: null
  };
  
  export default function loginReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_LOGIN_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          login: action.payload
        };
  
      case FETCH_LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          login: []
        };
  
      default:
        return state;
    }
  }