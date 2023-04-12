import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-bootstrap";
import { useParams } from "react-router";
import { PRODUCT_URL } from "../Api/helper/coreapicall";
import { toast } from "react-toastify";
import { getWithoutToken } from "../Api/allApi";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWithoutToken(`/product/${id}`)
      .then((response) => {
        if (response) {
          console.log(response, "responseee");
          toast.dismiss();
          toast.success(Notification.TOST_SUCESS);

          //   setProduct(response);
        }
      })
      .catch((response) => {
        toast.error(Notification.TOST_500_ERROR);
      });

    // setLoading(false);
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">Rating{product.rating && product.rating.rate}</p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">Rating {product.description}</p>
          <div className="product-flex">
            <NavLink
              className="btn btn-outline-dark px-3 py-2"
              // onClick={() => addProduct(product)}
            >
              Add to Card
            </NavLink>

            <NavLink to="/Cart" className="btn btn-outline-dark  px-3 py-2">
              Go to Card
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row py-3">
          {" "}
          <ShowProduct />
        </div>
      </div>
    </div>
  );
}
