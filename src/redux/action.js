// types of action
const GET_TOKEN_BALANCE = "GET_TOKEN_BALANCE";
// actions
const fetchTokens = tokens => ({
  type: GET_TOKEN_BALANCE,
  payload: tokens,
});

export { GET_TOKEN_BALANCE, fetchTokens };
