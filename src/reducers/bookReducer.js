const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const reducer = (state = initialState, action) => {
  const changeCart = (newBook, isIncrement) => {
    const { id, title, count = 1, price: total } = newBook;
    const findBook = state.cartItems.find((book) => book.id === id);
    if (findBook) {
      return state.cartItems.map((book) => {
        if (book.id === id) {
          book.count = isIncrement ? book.count + 1 : book.count - 1;
          book.total = total * book.count;
        }
        return book;
      });
    }
    return [...state.cartItems, { id, title, count, total }];
  };

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
      let bookId = action.payload;
      let newBook = state.books.find((book) => book.id === bookId);

      return {
        ...state,
        cartItems: [...changeCart(newBook, true)],
      };
    case "BOOK_REMOVE_FROM_CART":
      let removeBookId = action.payload;
      let removeBook = state.books.find((book) => book.id === removeBookId);

      return {
        ...state,
        cartItems: [...changeCart(removeBook, false)],
      };

    default:
      return state;
  }
};

export default reducer;
