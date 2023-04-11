import React, { useEffect, useState } from "react";
import getProducts from "../Api/helper/coreapicall";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "../utils/Loader";
import { getWithoutToken } from "../Api/allApi";
import { PRODUCTS_URL } from "../Api/helper/coreapicall";
import { toast } from "react-toastify";
import { Notification } from "../utils/Notification";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setloading] = useState([false]);

  useEffect(() => {
    setloading(true);

    getWithoutToken(PRODUCTS_URL)
      .then((response) => {
        if (response) {
          toast.success(Notification.TOST_SUCESS);
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="d-flex  flex-wrap justify-content-center my-5">
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
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
