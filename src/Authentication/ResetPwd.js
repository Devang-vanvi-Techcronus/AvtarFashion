import React from "react";

const ResetPwd = () => {
  return (
    <>
      <section className="calcc bg-white">
        <div className="container py-5 h-100">
          <div className="row align-items-center justify-content-center h-100 ">
            <div className="col-md-8 col-lg-7 col-xl-6 text-center">
              <img src="image/12.png" className="img-fluid" alt="image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5">
              <div className="mb-3 text-primary">
                <h3>Reset Password</h3>
              </div>
              <form>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form1Example23">
                    Confirm Password
                  </label>
                  <input
                    type="cpassword"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
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

export default ResetPwd;
