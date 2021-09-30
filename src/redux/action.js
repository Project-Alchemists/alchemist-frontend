// types of action
const GET_TOKEN_BALANCE = "GET_TOKEN_BALANCE";
const SET_WALLET_CONNECTED = "SET_WALLET_CONNECTED";
// actions
const fetchTokens = tokens => ({
  type: GET_TOKEN_BALANCE,
  payload: tokens,
});

const setWalletConnected = isWalletConnected => ({
  type: SET_WALLET_CONNECTED,
  payload: isWalletConnected,
});

export {
  GET_TOKEN_BALANCE,
  SET_WALLET_CONNECTED,
  fetchTokens,
  setWalletConnected,
};
