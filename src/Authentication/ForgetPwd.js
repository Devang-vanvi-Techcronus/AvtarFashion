import React from "react";

const ForgetPwd = () => {
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
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form1Example13"
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

export default ForgetPwd;
