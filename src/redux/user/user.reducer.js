import * as userType from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
