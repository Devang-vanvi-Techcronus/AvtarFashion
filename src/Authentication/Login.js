import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { validateEmail, validatePassword } from "../utils/validations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postWithoutToken, setLocalStorage } from "../Api/allApi";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Notification } from "../utils/Notification";
import LOGINIMG from "../../src/assets/image/11.png";
import Loading from "../utils/Loader";

const LOGIN_URL = "/login";
const DefaultValues = {
  email: "",
  password: "",
};
const Login = () => {
  const { setAuth } = useAuth();
  const [showPwd, setShowPwd] = useState(false);
  const [values, setValues] = useState(DefaultValues);
  const [loading, setloading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    let tempErrors = { ...errors };
    let valid = true;

    const emailError = validateEmail(values.email);
    const pwdError = validatePassword(values.password);
    if (emailError) {
      tempErrors = { ...tempErrors, email: emailError };
      valid = false;
    }
    if (pwdError) {
      tempErrors = { ...tempErrors, password: pwdError };
      valid = false;
    }
    setErrors(tempErrors);
    return valid;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return false;
    }
    setloading(true);

    postWithoutToken(LOGIN_URL, values).then((response) => {
      setloading(false);
      if (response.success == true) {
        if (response.status == 200) {
          toast.success(Notification.TOST_SUCESS);
          setAuth(values);
          setLocalStorage("apiToken", response.token);
          setLocalStorage("user", response.user);
          Navigate("/");
        }
      } else if (response.success == false) {
        toast.error(response.message);
      } else {
        toast.error(Notification.TOST_500_ERROR);
      }
    });

    return true;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className=" bg-white calcc">
          <div className="container  h-100">
            <div className="row h-100  align-items-center justify-content-center hvh-80 ">
              <div className="col-md-8 col-lg-7 col-xl-6 text-center">
                <img src={LOGINIMG} className="img-fluid" alt="image" />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5">
                <div className="mb-3 text-primary">
                  <h3>Please Sign in this webpage</h3>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form1Example13">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="form1Example13"
                      onChange={handleChange}
                      value={values.email}
                      error={errors.email}
                      className="form-control form-control-lg"
                    />
                    {errors.email && (
                      <p className="text-danger insta-smart-error">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form1Example23">
                      Password
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type={showPwd ? "text" : "password"}
                        name="password"
                        id="form1Example23"
                        onChange={handleChange}
                        placeholder="**********"
                        value={values.password}
                        error={errors.password}
                        className="form-control form-control-lg"
                      />
                      <button
                        className="btn btn-show-eye"
                        type="button"
                        onClick={() => setShowPwd(!showPwd)}
                      >
                        {!showPwd ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-danger insta-smart-error">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className=" mb-4 d-flex flex-row-reverse">
                    <Link to="/forgotpwd">Forgot password?</Link>
                  </div>
                  <div className="h-45 d-grid ">
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-sm btn-block c-btn "
                    >
                      Sign in
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">
                      OR
                    </p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center  mb-5">
                    <button
                      className="btn btn-outline-primary  btn-block c-btn me-2 h-100 w-100 py-2"
                      type="submit"
                    >
                      <i
                        className="fa fa-facebook fa-lg me-2"
                        aria-hidden="true"
                      ></i>
                      <span> Continue with Facebook</span>
                    </button>
                    <button
                      className="btn btn-outline-primary btn-block c-btn h-100 w-100 py-2"
                      type="submit"
                    >
                      <i
                        className="fa fa-google fa-lg  me-2"
                        aria-hidden="true"
                      ></i>
                      <span>Continue with Gmail</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
