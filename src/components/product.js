import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-bootstrap";
// import { useLocation, useParams } from "react-router";
import { PRODUCT_URL } from "../Api/helper/coreapicall";
import { toast } from "react-toastify";
import { getWithoutToken } from "../Api/allApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../utils/Loader";
import { addCart } from "../redux/action";
// import { useCartContext } from "../context/CartContext";

export default function Product() {
  // const addProduct = useCartContext();
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state, "state");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    setLoading(true);
    getWithoutToken(`/product/${state?.id}`)
      .then((response) => {
        if (response) {
          setLoading(false);
          console.log(response, "responseee");
          toast.dismiss();
          toast.success(Notification.TOST_SUCESS);
          setProduct(response.product);
        }
      })
      .catch((response) => {
        toast.error(Notification.TOST_500_ERROR);
      });
  }, []);

  const ShowProduct = () => {
    console.log(product, "produxt");
    return (
      <>
        <div className="col-md-6">
          {product.images && (
            <img src={product?.images[0].url} className="cart_image" />
          )}
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.name}</h1>
          {/* <p className="lead">Rating{product.rating && product.rating.rate}</p> */}
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          {/* <div className="product-flex ">
            <NavLink
              className="btn btn-primary px-3 py-2 mb-3 "
              onClick={() => addProduct(product)}
            >
              Add to Card
            </NavLink>

            <NavLink to="/contactUs" className="btn btn-primary  px-3 py-2">
              Go to Card
            </NavLink>
          </div> */}

          <div className="d-flex justify-content-around align-items-center h-45">
            <button
              onClick={() => addProduct(product)}
              className="btn btn-outline-primary  btn-block c-btn me-2 h-100 w-100"
              type="submit"
            >
              <i class="fa fa-cart-plus fa-lg  me-2" aria-hidden="true"></i>
              Add to Card
            </button>
            <button
              className="btn btn-outline-primary btn-block c-btn h-100 w-100"
              type="submit"
              onClick={() => navigate("/cart")}
            >
              <i class="fa fa-caret-right fa-lg  me-2" aria-hidden="true"></i>
              Go to Card
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container my-5 py-5">
          <div className="row py-3">
            <ShowProduct />
          </div>
        </div>
      )}
    </div>
  );
}
