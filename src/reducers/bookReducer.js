const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_SUCCESS":
      return {
        books: action.payload,
        isLoading: false,
        error: null,
      };

    case "FETCH_BOOKS_FAILURE":
      return {
        books: [],
        isLoading: false,
        error: action.payload,
      };

    case "FETCH_BOOKS_REQUEST":
      return {
        books: [],
        isLoading: true,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
