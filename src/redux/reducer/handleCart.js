const cart = [];

export const handleCart = (state = cart, action) => {
  switch (action.type) {
    case "ADDITEM":
      const product = action.payload;

      const exist = state.find((x) => x._id === product._id);
      if (exist) {
        return state.map((x) =>
          exist._id == x._id
            ? {
                ...x,
                qty: x.qty + 1,
                price: x.price * 2,
              }
            : x
        );
      }
      return [...state, { ...product, qty: 1 }];

    case "DELETEITEM":
      const products = action.payload;

      const exist1 = state.find((x) => x._id === products._id);
      if (exist1) {
        return state.map((x) =>
          exist1._id == x._id
            ? {
                ...x,
                qty: x.qty - 1,
                price: x.price / 2,
              }
            : x
        );
        // .filter((item) => item.qty > 0);
      }

    case "REMOVE_CART_ITEM":
      const removeProduct = action.payload;

      const removeData = state.map((x) => x._id === removeProduct._id);
      if (removeData) {
        return state.filter((i) => i._id !== removeProduct._id);
      }

    default:
      return state;
  }
};
