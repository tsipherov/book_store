const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
};

const reducer = (state = initialState, action) => {
  const getTotal = (cartItems) => {
    return cartItems.reduce((sum, product) => sum + product.total, 0);
  };

  const changeCart = (bookId, isIncrement) => {
    const newBook = state.books.find((book) => book.id === bookId);
    const { id, title, count = 1, price: total } = newBook;
    const bookInCart = state.cartItems.find((book) => book.id === id);
    if (bookInCart) {
      return state.cartItems.map((book) => {
        if (book.id === bookId) {
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

    case "BOOK_ADDED_TO_CART": {
      const bookId = action.payload;
      const newCart = changeCart(bookId, true);

      return {
        ...state,
        cartItems: newCart,
        orderTotal: getTotal(newCart),
      };
    }
    case "BOOK_DECREASE_IN_CART": {
      const bookId = action.payload;
      const filteringCart = changeCart(bookId, false).filter(
        (book) => book.count > 0
      );

      return {
        ...state,
        cartItems: filteringCart,
        orderTotal: getTotal(filteringCart),
      };
    }
    case "BOOK_REMOVE_FROM_CART": {
      const bookId = action.payload;
      const filteringCart = state.cartItems.filter(
        (book) => book.id !== bookId
      );

      return {
        ...state,
        cartItems: filteringCart,
        orderTotal: getTotal(filteringCart),
      };
    }

    default:
      return state;
  }
};

export default reducer;
