import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  validateEmail,
  validatePassword,
  validName,
  validcPassword,
} from "../utils/validations";
import { postWithoutToken, setLocalStorage } from "../Api/allApi";
import { Notification } from "../utils/Notification";
import SIGNUPIMG from "../../src/assets/image/12.png";
import Loading from "../utils/Loader";

const REGISTER_URL = "/register";
const DefaultValues = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const [showPwd, setShowPwd] = useState(false);

  const [values, setValues] = useState(DefaultValues);
  const [loading, setloading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    let tempErrors = { ...errors };
    let valid = true;

    const fullnameError = validName(values.name);
    const emailError = validateEmail(values.email);
    const pwdError = validatePassword(values.password);

    if (fullnameError) {
      tempErrors = { ...tempErrors, name: fullnameError };
      valid = false;
    }
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
    postWithoutToken(REGISTER_URL, values)
      .then((response) => {
        setloading(false);
        if (response.status == 201) {
          toast.success(Notification.TOST_SUCESS);
          setLocalStorage("apiToken", response);
        } else if (response.status == 401) {
          toast.error(Notification.TOST_401_ERROR);
        } else {
          toast.error(Notification.TOST_500_ERROR);
        }
      })
      .catch((response) => {
        toast.error(Notification.TOST_500_ERROR);
      });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className=" bg-white calcc">
          <div className="container py-5 h-100">
            <div className="row align-items-center justify-content-center hvh-80 ">
              <div className="col-md-6 col-lg-7 col-xl-6 text-center">
                <img src={SIGNUPIMG} className="img-fluid" alt="image" />
              </div>
              <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="mb-3 text-primary">
                  <h3>Create your account</h3>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="form1name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      error={errors.name}
                      className="form-control form-control-lg"
                    />
                    {errors.name && (
                      <p className="text-danger insta-smart-error">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="form-outline mb-3">
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
                  <div className="form-outline mb-3">
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

                  <div className="d-flex justify-content-end align-items-start mb-4">
                    <div className="form-check me-2">
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        Already have account?
                      </label>
                    </div>
                    <Link to="/login">Signin </Link>
                  </div>
                  <div className="h-45 d-grid ">
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-sm btn-block c-btn "
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">
                      OR
                    </p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center h-45">
                    <button
                      className="btn btn-outline-primary  btn-block c-btn me-2 h-100 w-100"
                      type="submit"
                    >
                      <i
                        className="fa fa-facebook fa-lg me-2"
                        aria-hidden="true"
                      ></i>
                      Continue with Facebook
                    </button>
                    <button
                      className="btn btn-outline-primary btn-block c-btn h-100 w-100"
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
      )}
    </>
  );
};

export default SignUp;
