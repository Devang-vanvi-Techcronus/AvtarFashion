const cart = [];

export const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const product = action.payload;
      return [...state, { ...product, qty: 1 }];

    default:
      return state;
  }
};
