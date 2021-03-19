export const FETCH_LOGIN_BEGIN   = 'FETCH_LOGIN_BEGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

export const fetchLoginBegin = () => ({
  type: FETCH_LOGIN_BEGIN
});

export const fetchLoginSuccess = login => ({
  type: FETCH_LOGIN_SUCCESS,
  payload:login 
});

export const fetchLoginFailure = error => ({
  type: FETCH_LOGIN_FAILURE,
  payload:error 
});