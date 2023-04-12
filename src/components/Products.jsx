import React, { useEffect, useState } from "react";
import getProducts from "../Api/helper/coreapicall";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "../utils/Loader";
import { getWithoutToken } from "../Api/allApi";
import { PRODUCTS_URL } from "../Api/helper/coreapicall";
import { toast } from "react-toastify";
import { Notification } from "../utils/Notification";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setloading] = useState([false]);

  useEffect(() => {
    setloading(true);

    getWithoutToken(PRODUCTS_URL)
      .then((response) => {
        if (response) {
          console.log(response.products, "responseee");
          toast.dismiss();
          // toast.success(Notification.TOST_SUCESS);
          setloading(false);
          setData(response.products);
          setFilter(response.products);
        } else if (response.status == 401) {
          toast.error(Notification.TOST_401_ERROR);
        } else {
          toast.error(Notification.TOST_401_ERROR);
        }
      })
      .catch((response) => {
        toast.error(Notification.TOST_500_ERROR);
      });
  }, []);

  const filerProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowCategory = () => {
    return (
      <>
        <div className=" d-flex justify-content-center mt-3">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filerProduct("men's clothing")}
          >
            men's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filerProduct("women's clothing")}
          >
            women's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filerProduct("jewelery")}
          >
            jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filerProduct("Laptop")}
          >
            Leptop
          </button>
        </div>
      </>
    );
  };

  const Showproducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <Card style={{ width: "18rem" }} className="mb-3 me-3">
                <Card.Img
                  variant="top"
                  src={product.images[0].url}
                  style={{ padding: "10px" }}
                  className="h-250"
                />
                <Card.Body>
                  <div className="">
                    <Card.Title>{product.name}</Card.Title>
                  </div>
                  {/* <Card.Text>{product.description}</Card.Text> */}
                  <Card.Text>Rs. {product.price}</Card.Text>
                  <NavLink
                    to={`/products/${product._id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container">
        <ShowCategory />
        <div className="d-flex  flex-wrap justify-content-center my-3">
          {loading ? <Loading /> : <Showproducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
