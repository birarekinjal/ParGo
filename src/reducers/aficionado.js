import { SET_AFICIONADO_LISTING } from "../actions/aficionado";

const createoReducer = (initialState, action) => {
  switch (action.type) {
    case SET_AFICIONADO_LISTING: {
      return action.payload;
    }
    default: {
      return initialState;
    }
  }
};

export default createoReducer;
