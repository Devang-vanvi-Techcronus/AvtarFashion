import React from "react";
import EMPTYCARTIMG from "../assets/image/dCdflKN.png";
import { NavLink } from "react-router-dom";
const EmptyCart = () => {
  return (
    <>
      <div>
        <div className="container-fluid  mt-100">
          <div className="row hvh-100 ">
            <div className="col-md-12">
              <div className="card ">
                <div className="card-header">
                  <h5>Cart</h5>
                </div>
                <div className="card-body cart d-flex justify-center align-center">
                  <div className="col-sm-12 empty-cart-cls text-center">
                    <img
                      src={EMPTYCARTIMG}
                      className="img-fluid mb-4 mr-3 EmptyCart_image"
                    />
                    <h3>
                      <strong>Your Cart is Empty</strong>
                    </h3>
                    <h4>Add something to make me happy :)</h4>
                    <NavLink
                      href="/products"
                      className="btn btn-primary cart-btn-transform m-3"
                      data-abc="true"
                    >
                      continue shopping
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
