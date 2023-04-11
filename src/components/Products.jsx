import React, { useEffect, useState } from "react";
import getProducts from "../Api/helper/coreapicall";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Triangle } from "react-loader-spinner";
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
        // console.log(response);
        // console.log(response.success, "sucess");
        console.log(response.products, "products");
        console.log(response.products[0].category);
        if (response) {
          toast.success(Notification.TOST_SUCESS);
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

  const Loading = () => {
    return (
      <>
        <Triangle
          height="80"
          width="80"
          color="rgb(68, 120, 240)"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </>
    );
  };
  return (
    <>
      <Loading />

      {filter.map((product) => {
        return (
          <>
            <div>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src={product.images[0].url} /> */}
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Rs. {product.price}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Products;
