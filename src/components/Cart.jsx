import React, { useState, useEffect } from "react";
import { NavLink } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart, removeItemsFromCart } from "../redux/action";
import { getWithoutToken } from "../Api/allApi";
import { PRODUCTS_URL } from "../Api/helper/coreapicall";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);

  useEffect(() => {
    const getProduct = () => {
      getWithoutToken(PRODUCTS_URL).then((response) => {
        if (response) {
          setProduct(response.products);
        }
      });
    };
    getProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };
  const handleDel = (product) => {
    dispatch(delCart(product));
  };
  const deleteCartItems = (product) => {
    console.log(product._id, "ppppp");
    dispatch(removeItemsFromCart(product._id));
  };

  const cartItems = (product) => {
    return (
      <>
        <section className=" gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - items</h5>
                  </div>
                  {state?.map((data, i) => {
                    return (
                      <div className="card-body">
                        <div className="row px-5">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              {data.images && (
                                <img
                                  src={data?.images[0].url}
                                  className="cart_image w-100 cart_img-height"
                                />
                              )}
                              <a href="#!">
                                <div className="mask cart_background"></div>
                              </a>
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong>{data?.name}</strong>
                            </p>
                            <p>Color: blue</p>
                            <p>category: {data?.category}</p>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm me-1 mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                              onClick={() => deleteCartItems(data)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm mb-2"
                              data-mdb-toggle="tooltip"
                              title="Move to the wish list"
                            >
                              <i className="fa fa-heart"></i>
                            </button>
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="d-flex mb-4 cart_maxwidth">
                              <button
                                className="btn btn-primary px-3 me-2"
                                disabled={data.qty == 1}
                                onClick={() => handleDel(data)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>

                              <div className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={data.qty}
                                  type="number"
                                  className="form-control"
                                />
                              </div>

                              <button
                                className="btn btn-primary px-3 ms-2"
                                onClick={() => handleAdd(data)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                            <p className="text-start text-md-center">
                              <strong>Rs.{data?.price}</strong>
                            </p>
                          </div>
                        </div>

                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body">
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <img
                      className="me-2 cart_width"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <img
                      className="me-2 cart_width"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <img
                      className="me-2 cart_width"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>$53.98</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>$53.98</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      {state.length === 0 && <EmptyCart />}
      {state.length !== 0 && cartItems()}
    </>
  );
}
