import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCart,
  calculateTotal,
  delCart,
  removeItemsFromCart,
} from "../redux/action";
import { getWithoutToken } from "../Api/allApi";
import { PRODUCTS_URL } from "../Api/helper/coreapicall";
import EmptyCart from "./EmptyCart";
import { NavLink } from "react-router-dom";
import VISA_CARD from "../assets/image/cards/visa.svg";
import MASTER_CARD from "../assets/image/cards/mastercard.svg";
import MONSTER_CARD from "../assets/image/cards/amex.svg";

export default function Cart() {
  const [product, setProduct] = useState([]);
  const [totals, setTotals] = useState({
    total: "",
  });
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
    dispatch(calculateTotal(state));
  }, [state]);

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };
  const handleDel = (product) => {
    dispatch(delCart(product));
  };
  const deleteCartItems = (product) => {
    dispatch(removeItemsFromCart(product));
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
                        <div
                          className="row px-5"
                          deleteCartItems={deleteCartItems}
                        >
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
                              <NavLink href="#!">
                                <div className="mask cart_background"></div>
                              </NavLink>
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
                    <p className="mb-0">12.10.2023 - 14.10.2023</p>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body">
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <img
                      className="me-2 cart_width"
                      src={VISA_CARD}
                      alt="Visa"
                    />
                    <img
                      className="me-2 cart_width"
                      src={MONSTER_CARD}
                      alt="American Express"
                    />
                    <img
                      className="me-2 cart_width"
                      src={MASTER_CARD}
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
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Price includes GST
                        <span>{state.total}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Delivery Charges
                        <span className="green">Free</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including TAX)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>Rs.{state.total}</strong>
                        </span>
                      </li>
                    </ul>

                    <div className="mb-3 d-flex justify-content-center align-items-center">
                      <span href="" className="btn-total btn--doar">
                        Buy Now!
                      </span>
                    </div>
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
