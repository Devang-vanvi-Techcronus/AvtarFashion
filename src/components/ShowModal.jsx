import ReactDOM from "react-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Mymodal = () => {
  const [showModel, setshowModel] = useState("true");

  const closeModel = () => setshowModel(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="model_wapper"></div>
      <div className="modal_container">
        <div className="text-center">
          {/* {children}
          {ButtonModal} */}
          <div className="wrapper-order">
            {" "}
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              {" "}
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />{" "}
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>

          <h3 className="green">Hurray !!</h3>
          <p className="text">Your Order has been placed.. </p>

          <NavLink className="btn btn-success mb-3 " to="/">
            Go back to Shopping
          </NavLink>
        </div>
      </div>
    </>,
    document.querySelector(".createportal")
  );
};
export default Mymodal;
