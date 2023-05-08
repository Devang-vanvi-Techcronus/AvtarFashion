import React, { useRef } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import VISA_CARD from "../assets/image/cards/visa.svg";
import MASTER_CARD from "../assets/image/cards/mastercard.svg";
import MONSTER_CARD from "../assets/image/cards/amex.svg";
import Mymodal from "./ShowModal";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { getLocalStorage } from "../Api/allApi";
import { useState } from "react";
import { toast } from "react-toastify";
import { PAYMENT_URL } from "../Api/helper/backendAPi";

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
  const [checkoutPopup, setCheckoutPopup] = useState(false);

  const payBtn = useRef(null);
  const navigate = useNavigate();

  const TotalPRice = getLocalStorage("TotalPRice");
  const stripe = useStripe();
  const elements = useElements();

  const paymentData = {
    amount: TotalPRice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    payBtn.current.disabled = true;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(PAYMENT_URL, paymentData, config);

      const client_secret = data.client_secret;
      if (!stripe || !elements) return;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;
        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          toast.success("success");
          setTimeout(() => {
            setCheckoutPopup(true);
          }, 3000);
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="padding">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="row">
            <div className="container-fluid d-flex justify-content-center">
              <div className="col-sm-8 col-md-6">
                <div className="card p-3">
                  <div className="card-header mt-3">
                    <div className="row">
                      <div className="col-md-6">
                        <span>CREDIT/DEBIT CARD PAYMENT</span>
                      </div>

                      <div className="col-md-6 text-center payment-margine  ">
                        <div className="d-flex justify-content-evenly mt-1">
                          <div className="pay_img">
                            <img src={VISA_CARD} />
                          </div>
                          <div className="pay_img">
                            <img src={MASTER_CARD} />
                          </div>
                          <div className="pay_img">
                            <img src={MONSTER_CARD} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="paymentbody">
                    <div className="form-group mt-2">
                      <label for="cc-number" className="control-label">
                        CARD NUMBER
                      </label>
                      <CardNumberElement className="paymentInput" />
                    </div>

                    <div className="row mt-2">
                      <div className="col-md-6">
                        <div className="form-group mt-2">
                          <label for="cc-exp" className="control-label">
                            CARD EXPIRY
                          </label>
                          <CardExpiryElement className="paymentInput" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group mt-2">
                          <label for="cc-cvc" className="control-label">
                            CARD CVC
                          </label>
                          <CardCvcElement className="paymentInput" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group mt-2">
                      <label for="numeric" className="control-label">
                        CARD HOLDER NAME
                      </label>
                      <input
                        type="text"
                        className="input-lg form-control"
                        placeholder="Name"
                      />
                    </div>

                    <div className="form-group mt-3 mb-3">
                      <input
                        type="submit"
                        value={`Pay - ₹${TotalPRice}`}
                        ref={payBtn}
                        className="btn btn-primary btn-lg form-control payment-fornt p-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {checkoutPopup && <Mymodal />}
    </>
  );
};

export default Payment;
