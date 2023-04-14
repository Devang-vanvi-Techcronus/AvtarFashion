import React, { useEffect, useState } from "react";
import getProducts from "../Api/helper/coreapicall";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "../utils/Loader";
import { getWithoutToken } from "../Api/allApi";
import { PRODUCTS_URL } from "../Api/helper/coreapicall";
import { toast } from "react-toastify";
import { Notification } from "../utils/Notification";
import { NavLink, useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setloading] = useState([false]);
  const Navigate = useNavigate();

  useEffect(() => {
    setloading(true);

    getWithoutToken(PRODUCTS_URL)
      .then((response) => {
        if (response) {
          console.log(response.products, "responseee");
          toast.dismiss();
          // toast.success(Notification.TOST_SUCESS);
          setloading(false);
          setData(response.products);
          setFilter(response.products);
        } else if (response.status == 401) {
          toast.error(Notification.TOST_401_ERROR);
        } else {
          toast.error(Notification.TOST_401_ERROR);
        }
      })
      .catch((response) => {
        toast.error(Notification.TOST_500_ERROR);
      });
  }, []);

  const filerProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowCategory = () => {
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <section className="">
            <div className="container">
              <div className="row mt-5">
                {/* <!-- sidebar --> */}
                <div className="col-lg-3">
                  {/* <!-- Toggle button --> */}
                  <button
                    className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span>Show filter</span>
                  </button>
                  {/* <!-- Collapsible wrapper --> */}
                  <div
                    className="collapse card d-lg-block mb-5"
                    id="navbarSupportedContent"
                  >
                    <div
                      className="accordion"
                      id="accordionPanelsStayOpenExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button text-dark bg-light"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            Related items
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                        >
                          <div className="accordion-body">
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  href="#"
                                  className="text-dark"
                                  onClick={() => setFilter(data)}
                                >
                                  All{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-dark"
                                  onClick={() => filerProduct("Laptop")}
                                >
                                  Electronics{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-dark"
                                  onClick={() => filerProduct("jewelery")}
                                >
                                  Home items{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-dark">
                                  Books, Magazines{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-dark"
                                  onClick={() => filerProduct("men's clothing")}
                                >
                                  Men's clothing{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-dark">
                                  Interiors items{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-dark">
                                  Underwears{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-dark">
                                  Shoes for men{" "}
                                </a>
                              </li>
                              <li>
                                <a href="#" className="text-dark">
                                  Accessories{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button text-dark bg-light"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseTwo"
                          >
                            Brands
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                        >
                          <div className="accordion-body">
                            <div>
                              {/* <!-- Checked checkbox --> */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked1"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckChecked1"
                                >
                                  Allen Solly
                                </label>
                                <span className="badge badge-secondary float-end">
                                  120
                                </span>
                              </div>
                              {/* <!-- Checked checkbox --> */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked2"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckChecked2"
                                >
                                  Roadster
                                </label>
                                <span className="badge badge-secondary float-end">
                                  15
                                </span>
                              </div>
                              {/* <!-- Checked checkbox --> */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked3"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckChecked3"
                                >
                                  U.S. Polo Assn
                                </label>
                                <span className="badge badge-secondary float-end">
                                  35
                                </span>
                              </div>
                              {/* <!-- Checked checkbox -->/ */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked4"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckChecked4"
                                >
                                  Flying Machine
                                </label>
                                <span className="badge badge-secondary float-end">
                                  89
                                </span>
                              </div>
                              {/* <!-- Default checkbox --> */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Louis Philippe Sport
                                </label>
                                <span className="badge badge-secondary float-end">
                                  30
                                </span>
                              </div>
                              {/* <!-- Default checkbox --> */}
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Arrow Sport
                                </label>
                                <span className="badge badge-secondary float-end">
                                  30
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button text-dark bg-light"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                          >
                            Price
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingThree"
                        >
                          <div className="accordion-body">
                            <div className="range">
                              <input
                                type="range"
                                className="form-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="row mb-3">
                              <div className="col-6">
                                <p className="mb-0">Min</p>
                                <div className="form-outline">
                                  <input
                                    type="number"
                                    id="typeNumber"
                                    className="form-control"
                                  />
                                  <label
                                    className="form-label"
                                    for="typeNumber"
                                  >
                                    $0
                                  </label>
                                </div>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">Max</p>
                                <div className="form-outline">
                                  <input
                                    type="number"
                                    id="typeNumber"
                                    className="form-control"
                                  />
                                  <label
                                    className="form-label"
                                    for="typeNumber"
                                  >
                                    $1,0000
                                  </label>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-white w-100 border border-secondary"
                            >
                              apply
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button text-dark bg-light"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseFour"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFour"
                          >
                            Size
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFour"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingThree"
                        >
                          <div className="accordion-body">
                            <input
                              type="checkbox"
                              className="btn-check border justify-content-center "
                              id="btn-check1"
                              checked
                              autocomplete="off"
                            />
                            <label
                              className="btn btn-white mb-1 px-1 product_w me-1"
                              for="btn-check1"
                            >
                              XS
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check border justify-content-center"
                              id="btn-check2"
                              checked
                              autocomplete="off"
                            />
                            <label
                              className="btn btn-white mb-1 px-1 product_w me-1"
                              for="btn-check2"
                            >
                              SM
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check border justify-content-center"
                              id="btn-check3"
                              checked
                              autocomplete="off"
                            />
                            <label
                              className="btn btn-white mb-1 px-1 product_w me-1"
                              for="btn-check3"
                            >
                              LG
                            </label>
                            <input
                              type="checkbox"
                              className="btn-check border justify-content-center"
                              id="btn-check4"
                              checked
                              autocomplete="off"
                            />
                            <label
                              className="btn btn-white mb-1 px-1 product_w "
                              for="btn-check4"
                            >
                              XXL
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button text-dark bg-light"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseFive"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFive"
                          >
                            Ratings
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFive"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingThree"
                        >
                          <div className="accordion-body">
                            {/* <!-- Default checkbox --> */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                              </label>
                            </div>
                            {/* <!-- Default checkbox --> */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-secondary"></i>
                              </label>
                            </div>
                            {/* <!-- Default checkbox --> */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                              </label>
                            </div>
                            {/* <!-- Default checkbox --> */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- sidebar -->
      <!-- content --> */}
                <div className="col-lg-9">
                  <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                    <strong className="d-block py-2">32 Items found </strong>
                    <div className="ms-auto">
                      <select className="form-select d-inline-block w-auto border pt-1 me-3 ">
                        <option value="0">Best match</option>
                        <option value="1">Recommended</option>
                        <option value="2">High rated</option>
                        <option value="3">Randomly</option>
                      </select>
                      <div className="btn-group shadow-0 border">
                        <a href="#" className="btn btn-light" title="List view">
                          <i className="fa fa-bars fa-lg"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-light active"
                          title="Grid view"
                        >
                          <i className="fa fa-th fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </header>

                  {/* -----------------------------here--------------------------------------------- */}
                  <div className="">
                    <div class="row">
                      <Showproducts />
                    </div>
                  </div>

                  <hr />

                  {/* <!-- Pagination --> */}
                  <nav
                    aria-label="Page navigation example"
                    className="d-flex justify-content-center mt-3"
                  >
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  };

  const Showproducts = () => {
    const handleById = (id) => {
      console.log(id, "id");
      Navigate(`/products/${id}`, { state: { id: id } });
    };
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div className="card w-100 my-2 shadow-2-strong product-body">
                  <div className="product-img">
                    <img
                      src={product.images[0].url}
                      className="card-img-top h-100"
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex flex-row">
                      <h5 className="mb-1 me-1">${product.price}</h5>
                      <span className="text-danger">
                        <s>$49.99</s>
                      </span>
                    </div>
                    <p className="card-text">{product.name}</p>
                    <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                      <Button
                        href="#!"
                        className="btn btn-primary shadow-0 me-1"
                        onClick={() => handleById(product?._id)}
                      >
                        Add to cart
                      </Button>
                      <a
                        href="#!"
                        className="btn btn-light border icon-hover px-2 pt-2"
                      >
                        <i className="fa fa-heart fa-lg text-secondary px-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <ShowCategory />

      {/* {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div class="row">
            <Showproducts />
          </div>
        </div>
      )} */}
    </>
  );
};

export default Products;
