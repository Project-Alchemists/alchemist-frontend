import { GET_TOKEN_BALANCE } from "./action";

const initialState = {
  tokens: [],
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_BALANCE: {
      return { tokens: action.payload };
    }

    default:
      return state;
  }
};

export default tokenReducer;
