export const getProducts = () => {
  return fetch(`http://192.168.1.97:4000/api/products`, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
export default getProducts;
