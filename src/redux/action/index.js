export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
export const delCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};

export const removeItemsFromCart = (product) => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: product,
  };
};

export const calculateTotal = () => {
  return {
    type: "CALCULATE_TOTAL",
  };
};
