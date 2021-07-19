import { SET_CREATOR_LISTING } from "../actions/creator";

const createoReducer = (initialState, action) => {
  switch (action.type) {
    case SET_CREATOR_LISTING: {
      return action.payload;
    }
    default: {
      return initialState;
    }
  }
};

export default createoReducer;
