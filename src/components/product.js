import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getWithoutToken } from "../Api/allApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../utils/Loader";
import { addCart, addToCart } from "../redux/action";

export default function Product() {
  const { state } = useLocation();
  const navigate = useNavigate();

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
          <h3 className="display-6 fw-bold my-4">₹.{product.price}</h3>
          <p className="lead mb-5">{product.description}</p>

          <div className="d-flex justify-content-around align-items-center h-45">
            <button
              onClick={() => addProduct(product)}
              className="btn btn-outline-primary  btn-block c-btn me-2 h-100 w-100"
              type="submit"
            >
              <i className="fa fa-cart-plus fa-lg  me-2" aria-hidden="true"></i>
              Add to Card
            </button>
            <button
              className="btn btn-outline-primary btn-block c-btn h-100 w-100"
              type="submit"
              onClick={() => navigate("/cart")}
            >
              <i
                className="fa fa-caret-right fa-lg  me-2"
                aria-hidden="true"
              ></i>
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
        <div className="container my-5 p-5 product_shadow ">
          <div className="row py-3">
            <ShowProduct />
          </div>
        </div>
      )}
    </div>
  );
}
