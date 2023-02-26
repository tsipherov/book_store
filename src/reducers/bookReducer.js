const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const reducer = (state = initialState, action) => {
  console.log("action.type >>> ", action.type);
  switch (action.type) {
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: null,
      };

    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        isLoading: false,
        error: action.payload,
      };

    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        isLoading: true,
        error: null,
      };

    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const newBook = state.books.find((book) => book.id === bookId);
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: bookId,
            title: newBook.title,
            count: 1,
            total: newBook.price,
          },
        ],
      };

    default:
      return state;
  }
};

export default reducer;
