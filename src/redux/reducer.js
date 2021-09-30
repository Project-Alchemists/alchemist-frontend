import { GET_TOKEN_BALANCE, SET_WALLET_CONNECTED } from "./action";

const initialState = {
  tokens: [],
  isWalletConnected: false,
};

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_BALANCE: {
      return { ...state, tokens: action.payload };
    }

    case SET_WALLET_CONNECTED: {
      return { ...state, isWalletConnected: action.payload };
    }

    default:
      return state;
  }
};

export default web3Reducer;
