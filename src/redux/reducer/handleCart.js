const cart = [];

export const handleCart = (state = cart, action) => {
  switch (action.type) {
    case "ADDTOITEM":
      const productss = action.payload;

      const exisst = state.find((x) => x._id === productss._id);
      console.log(exisst, "exist");
      if (exisst) {
        return state.map((x) =>
          exisst ? { ...x, qty: x.qty + 1, price: x.price * 2 } : x
        );
      }
      return [...state, { ...productss, qty: 1 }];
    case "ADDITEM":
      const product = action.payload;

      const exist = state.find((x) => x._id === product._id);
      console.log(exist, "exist");
      if (exist) {
        return state.map((x) =>
          exist._id == x._id ? { ...x, qty: x.qty + 1, price: x.price * 2 } : x
        );
      }
      return [...state, { ...product, qty: 1 }];

    case "DELETEITEM":
      const products = action.payload;

      const exist1 = state.find((x) => x._id === products._id);
      console.log("exist1: ", exist1);
      if (exist1) {
        return state.map((x) =>
          exist1._id == x._id ? { ...x, qty: x.qty - 1, price: x.price / 2 } : x
        );
      }

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((i) => i.product !== action.payload),
      };

    default:
      return state;
  }
};
