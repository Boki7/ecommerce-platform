const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_COLLECTIONS_START":
      return {
        ...state,
        isFetching: true
      };

    case "FETCH_COLLECTIONS_SUCCES": {
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      };
    }

    case "FETCH_COLLECTIONS_FAILED":
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false
      };

    default: {
      return state;
    }
  }
};
