const cart = [];

export const handleCart = (state = cart, action) => {
  // const product = action.payload;
  // console.log(product, "prooo");

  switch (action.type) {
    case "ADDTOITEM":
      const productss = action.payload;
      // console.log(product);
      const exisst = state.find((x) => x._id === productss._id);
      console.log(exisst, "exist");
      if (exisst) {
        return state.map((x) =>
          exist ? { ...x, qty: x.qty + 1, price: x.price * 2 } : x
        );
      }
      return [...state, { ...productss, qty: 1 }];
    case "ADDITEM":
      const product = action.payload;
      // console.log(product);
      const exist = state.find((x) => x._id === product._id);
      console.log(exist, "exist");
      if (exist._id === product._id) {
        return state.map((x) =>
          exist ? { ...x, qty: x.qty + 1, price: x.price * 2 } : x
        );
      }
      return [...state, { ...product, qty: 1 }];

    case "DELETEITEM":
      const products = action.payload;

      const exist1 = state.find((x) => x._id === products._id);
      console.log("exist1: ", exist1);
      if (exist1) {
        return state.map((x) =>
          exist1 ? { ...x, qty: x.qty - 1, price: x.price / 2 } : x
        );
      }

    default:
      return state;
  }
};
