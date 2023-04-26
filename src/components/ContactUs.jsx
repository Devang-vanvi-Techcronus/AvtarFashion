import React from "react";
import { isAuthenticated } from "../utils/common";

const ContactUs = () => {
  return (
    <>
      <div className="">
        <div className="my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0490757366383!2d72.53597028889985!3d23.02197023627996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e4cedbe563%3A0xc1c0c8598aef472a!2sTechcronus%20Business%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1681294920033!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="d-flex align-items-center justify-content-center  mb-5">
          <div className="col-md-6 col-lg-6 col-xl-5 col-12">
            <form>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example13">
                  Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="form1Example13"
                  // value={isAuthenticated().user ? name : ""}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  // value={isAuthenticated().user ? email : ""}
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example13">
                  Message
                </label>
                <textarea
                  type="text"
                  name="textarea "
                  id="form1Example13"
                  className="form-control form-control-lg text-area"
                />
              </div>
              <div className="h-45 d-grid ">
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
    </>
  );
};

export default ContactUs;
