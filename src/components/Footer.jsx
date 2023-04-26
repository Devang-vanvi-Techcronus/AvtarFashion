import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-flid mt-auto">
        <footer className="text-center text-lg-start text-white theme-black-footer">
          <div className="theme-blue-footer  ">
            <section className="d-flex justify-content-between p-4 theme-blue-footer container">
              <div className="me-5">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <NavLink href="" className="text-white me-4">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </NavLink>
                <NavLink href="" className="text-white me-4">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </NavLink>
                <NavLink href="" className="text-white me-4">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </NavLink>
                <NavLink href="" className="text-white me-4">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </NavLink>
                <NavLink href="" className="text-white me-4">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </NavLink>
                <NavLink href="" className="text-white me-4">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </NavLink>
              </div>
            </section>
          </div>
          <div className="container ">
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className=" navbar-brand ">AvtarFashion</h6>
                    <div className="mb-4 mt-0 d-inline-block mx-auto hr-tag" />
                    <p className="text-lowercase">
                      A PART OF HEARST DIGITAL MEDIA EVERY ITEM ON THIS PAGE WAS
                      CHOSEN BY AN ELLE EDITOR. WE MAY EARN COMMISSION ON SOME
                      OF THE ITEMS YOU CHOOSE TO BUY.
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-link ">
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <div className="mb-4 mt-0 d-inline-block mx-auto hr-tag" />
                    <p>
                      <NavLink href="#!" className="text-white">
                        NewsLetter
                      </NavLink>
                    </p>
                    <p>
                      <NavLink href="#!" className="text-white">
                        SiteMap
                      </NavLink>
                    </p>
                    <p>
                      <NavLink href="#!" className="text-white">
                        Subscribe
                      </NavLink>
                    </p>
                    <p>
                      <NavLink href="#!" className="text-white">
                        Give Aways
                      </NavLink>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-link">
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                    <div className="mb-4 mt-0 d-inline-block mx-auto hr-tag" />
                    <p>
                      <NavLink href="#!" className="text-white">
                        Contact Us
                      </NavLink>
                    </p>
                    <p>
                      <NavLink href="#!" className="text-white">
                        Community Guideline
                      </NavLink>
                    </p>
                    <p>
                      <NavLink href="#!" className="text-white">
                        Shipping Rates
                      </NavLink>
                    </p>
                    <p>
                      <NavLink href="#!" className="text-white">
                        Help
                      </NavLink>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <div className="mb-4 mt-0 d-inline-block mx-auto hr-tag" />
                    <p>
                      <i className="fa fa-home mr-3"></i> New York, NY 10012, US
                    </p>
                    <p>
                      <i className="fa fa-envelope mr-3"></i> info@example.com
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3"></i> + 01 234 567 88
                    </p>
                    <p>
                      <i className="fa fa-print mr-3"></i> + 01 234 567 89
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center p-3 footer-color footer-link">
              © 2023 Copyright:
              <p>
                <NavLink
                  className="text-white"
                  href="https://avtarfashion.com/"
                >
                  AvtarFashion.com
                </NavLink>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
