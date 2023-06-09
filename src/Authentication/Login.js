import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "../Api/axios";
import { validateEmail, validatePassword } from "../utils/validations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../Api/helper/backendAPi";

const LOGIN_URL = "/login";
const DefaultValues = {
  email: "",
  password: "",
};
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [showPwd, setShowPwd] = useState(false);
  const [values, setValues] = useState(DefaultValues);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
      console.log(errors, "<><");
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

  //  const authenticate = (data, next) => {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("jwt", JSON.stringify(data));
  //     next();
  //   }
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return false;
    }

    axios
      .post(`${(API, LOGIN_URL)}`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        toast.success("LoggedIn Successful");
        console.log(response);
        // const token = console.log(response?.data?.token);
        localStorage.setItem("token", response?.data?.token);
      })
      .catch((response) => {
        toast.error("Something went wrong");
        toast.error(`${response?.request?.status}`);
      });

    setValues(DefaultValues);
    return true;
  };

  return (
    <>
      <section className=" bg-white calcc">
        <div className="container py-5 h-100">
          <div className="row h-100  align-items-center justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6 text-center">
              <img src="image/11.png" className="img-fluid" alt="image" />
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
                  <div class="input-group mb-3">
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

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgotpwd">Forgot password?</Link>
                </div>
                <div className="aa d-grid ">
                  <button
                    // type="submit"
                    // onClick={onSubmit}
                    className="btn btn-outline-primary btn-sm btn-block c-btn "
                  >
                    Sign in
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    className="btn btn-outline-primary  btn-block c-btn me-2"
                    type="submit"
                  >
                    <i
                      className="fa fa-facebook fa-lg me-2"
                      aria-hidden="true"
                    ></i>
                    Continue with Facebook
                  </button>
                  <button
                    className="btn btn-outline-primary btn-block c-btn"
                    type="submit"
                  >
                    <i
                      className="fa fa-google fa-lg  me-2"
                      aria-hidden="true"
                    ></i>
                    Continue with Gmail
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
