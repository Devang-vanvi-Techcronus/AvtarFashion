import React, { useState, useEffect } from "react";
import { NavLink } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { getWithoutToken } from "../Api/allApi";
import { PRODUCTS_URL } from "../Api/helper/coreapicall";
import { toast } from "react-toastify";

export default function Cart() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);

  useEffect(() => {
    const getProduct = () => {
      setLoading(true);

      getWithoutToken(PRODUCTS_URL)
        .then((response) => {
          if (response) {
            console.log(response.products, "responseee");
            toast.dismiss();
            toast.success(Notification.TOST_SUCESS);
            setLoading(false);

            setProduct(response.products);
          } else if (response.status == 401) {
            toast.error(Notification.TOST_401_ERROR);
          } else {
            toast.error(Notification.TOST_401_ERROR);
          }
        })
        .catch((response) => {
          toast.error(Notification.TOST_500_ERROR);
        });
    };
    getProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-3 bg-light rounded-3 py-3">
          <div className="container py-0">
            <div className="d-flex row justify-content-center">
              <div key={product._id} className="col-md-4">
                <img src={product.image[0].url} height="200px" width="200px" />
              </div>
              <div className="col-md-4">
                <h3>{product.name}</h3>
                {/* <p className="lead fw-bold">
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p> */}
                <button
                  className="btn btn-outline-dark me-4"
                  // onClick={() => handleDel(product)}
                >
                  -
                </button>

                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleAdd(product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className=" row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              process for checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  const EmptyCart = () => {
    return (
      <div class="container-fluid  mt-100">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Cart</h5>
              </div>
              <div class="card-body cart">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img
                    src="https://i.imgur.com/dCdflKN.png"
                    width="130"
                    height="130"
                    class="img-fluid mb-4 mr-3"
                  />
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <h4>Add something to make me happy :)</h4>
                  <a
                    href="/products"
                    class="btn btn-primary cart-btn-transform m-3"
                    data-abc="true"
                  >
                    continue shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && EmptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
      {/* <h1 className='mx-5 my-4'>{'your total cart value is : $ {price}'} </h1> */}
    </>
  );
}
