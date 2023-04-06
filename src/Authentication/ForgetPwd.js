import React, { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validations";

const DefaultValues = {
  email: "",
};
const ForgetPwd = () => {
  const [values, setValues] = useState(DefaultValues);
  const [errors, setErrors] = useState({
    email: "",
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

    const emailError = validateEmail(values.email);
    if (emailError) {
      tempErrors = { ...tempErrors, email: emailError };
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
    console.log("Submitted", values);
    setValues(DefaultValues);
    return true;
  };
  return (
    <>
      <section className="calcc bg-light">
        <div className="container py-5 h-100">
          <div className="row  align-items-center justify-content-center h-100 ">
            <div className="col-md-8 col-lg-7 col-xl-6 text-center">
              <img src="image/13.png" className="img-fluid" alt="image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5">
              <div className="mb-3 text-primary">
                <h3>Forgot Password</h3>
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

                <div className="aa d-grid ">
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-sm btn-block c-btn "
                  >
                    Submit
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

export default ForgetPwd;
