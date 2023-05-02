import ReactDOM from "react-dom";
import { useEffect } from "react";

const Mymodal = ({ closeModel, children, ButtonModal }) => {
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
          {children}
          {ButtonModal}
        </div>
      </div>
    </>,
    document.querySelector(".createportal")
  );
};
export default Mymodal;
