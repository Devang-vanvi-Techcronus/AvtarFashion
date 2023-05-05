import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { NavLink, useNavigate } from "react-router-dom";
// import Mymodal from "./ShowModal";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import {
  getLocalStorage,
  getWithoutToken,
  postWithoutToken,
} from "../Api/allApi";
import { useState } from "react";
import { toast } from "react-toastify";

const Payment = () => {
  const stripeApiKey =
    "pk_test_51Mw0YdSC9csYlBSxe39Uhg8TPw9azOIpiHUJFO0RNrEUwZ5E57aZBLEgLKMDVMwwMC33ynLhhITwnBK7EVqC4Eil00N1P1tYgB";
  const loadStripeAPIKey = loadStripe(stripeApiKey);

  return (
    <Elements stripe={loadStripeAPIKey}>
      <PaymentForm />
    </Elements>
  );
};

const PaymentForm = () => {
  const [secret, setSecret] = useState("");
  // const [showModel, setshowModel] = useState("false");

  //   const closeModel = () => setshowModel(false);
  const payBtn = useRef(null);
  const navigate = useNavigate();

  const TotalPRice = getLocalStorage("TotalPRice");
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const paymentData = {
    amount: TotalPRice,
  };
  console.log(paymentData, "paymentData");

  //   const ButtonModal = (
  //     <NavLink className="btn btn-success mb-3 " to="/">
  //       Go back to Shopping
  //     </NavLink>
  //   );

  //   const MyMainModel = (
  //     <Mymodal closeModel={closeModel} ButtonModal={ButtonModal}>
  //       <div className="wrapper-order">
  //         {" "}
  //         <svg
  //           className="checkmark"
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 52 52"
  //         >
  //           {" "}
  //           <circle
  //             className="checkmark__circle"
  //             cx="26"
  //             cy="26"
  //             r="25"
  //             fill="none"
  //           />{" "}
  //           <path
  //             className="checkmark__check"
  //             fill="none"
  //             d="M14.1 27.2l7.1 7.2 16.7-16.8"
  //           />
  //         </svg>
  //       </div>
  //       <h3 className="green">Hurray !!</h3>
  //       <p className="text">Your Order has been placed.. </p>
  //     </Mymodal>
  //   );

  const submitHandler = (e) => {
    e.preventDefault();
    payBtn.current.disabled = true;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = postWithoutToken(`/payment/process`, paymentData).then(
      (response) => {
        const client_secret = response.client_secret;
        console.log(client_secret, "cccc");
        getData();

        toast.success(Notification.TOST_SUCESS);
        if (!stripe || !elements) return;
        const result = stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: elements.getElement(CardNumberElement),
          },
        });

        console.log(result, "result");
        result.then(
          (value) => toast.success(value.paymentIntent.status),
          navigate("/products")
        );
      }
    );
  };

  const getData = () => {
    toast.success(Notification.TOST_SUCESS);
  };

  return (
    <>
      <div className="paymentContainer ">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <h3>Card Info</h3>
          <div>
            <i className="fa fa-credit-card me-3" aria-hidden="true"></i>
            <CardNumberElement className="paymentInput">
              <input required type="number" />
            </CardNumberElement>
          </div>
          <div>
            <i className="fa fa-calendar-o me-3" aria-hidden="true"></i>
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <i className="fa fa-key me-3" aria-hidden="true"></i>
            <CardCvcElement className="paymentInput" />
          </div>
          <input
            type="submit"
            value={`Pay - ₹${TotalPRice}`}
            ref={payBtn}
            className="paymentFormBtn"
            // onClick={() => setshowModel(true)}
          />
        </form>
      </div>

      {/* {showModel && MyMainModel} */}
    </>
  );
};

export default Payment;
