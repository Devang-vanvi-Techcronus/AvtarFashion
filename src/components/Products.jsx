import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Loading from "../utils/Loader";
import { getWithoutToken } from "../Api/allApi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";

const Products = ({ activeTab }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState([data]);
  const [loading, setloading] = useState([false]);
  const [listData, setListData] = useState("1");
  const [price, setPrice] = useState([0, 200000]);
  const [productsCount, setproductsCount] = useState("");
  const [resultPerPage, setresultPerPage] = useState("");

  const Navigate = useNavigate();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    setloading(true);
    getProduct();
  }, [price, currentPage]);

  const getProduct = () => {
    getWithoutToken(
      `/product?&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`
    ).then((response) => {
      setproductsCount(response.productsCount);
      setresultPerPage(response.resultPerPage);
      setFilter(response.products);
      setData(response.products);
      setloading(false);
    });
  };

  const priceHandler = (e, newprice) => {
    setPrice(newprice);
  };
  const filerProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowCategory = () => {
    return (
      <>
        <section className="">
          <div className="container p-0 ">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="text-dark ">Related items</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="accordion-body">
                    <ul className="list-unstyled">
                      <li>
                        <NavLink
                          className="text-dark pointer"
                          onClick={() => setFilter(data)}
                        >
                          All
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-dark pointer"
                          onClick={() => filerProduct("electronics")}
                        >
                          Electronics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-dark pointer"
                          onClick={() => filerProduct("jewelery")}
                        >
                          Jewellery
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-dark pointer"
                          onClick={() => filerProduct("men's clothing")}
                        >
                          Men's clothing
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          className="text-dark pointer"
                          onClick={() => filerProduct("women's clothing")}
                        >
                          Women's clothing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-dark pointer"
                          onClick={() => filerProduct("Kids")}
                        >
                          Kids
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-dark pointer"
                          onClick={() => filerProduct("Footwear")}
                        >
                          Bags & Footwear
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-dark pointer"
                          onClick={() => filerProduct("Beauty")}
                        >
                          Beauty & Health
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="text-dark ">Brands</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="accordion-body">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked1"
                        >
                          Allen Solly
                        </label>
                        <span className="badge badge-secondary float-end">
                          120
                        </span>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckChecked2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked2"
                        >
                          Roadster
                        </label>
                        <span className="badge badge-secondary float-end">
                          15
                        </span>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckChecked3"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked3"
                        >
                          U.S. Polo Assn
                        </label>
                        <span className="badge badge-secondary float-end">
                          35
                        </span>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckChecked4"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked4"
                        >
                          Flying Machine
                        </label>
                        <span className="badge badge-secondary float-end">
                          89
                        </span>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Louis Philippe Sport
                        </label>
                        <span className="badge badge-secondary float-end">
                          30
                        </span>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Arrow Sport
                        </label>
                        <span className="badge badge-secondary float-end">
                          30
                        </span>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="text-dark ">Price</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="accordion-body">
                    {/* <div className="range">
                      <input
                        type="range"
                        className="form-range"
                        id="customRange1"
                      />
                    </div> */}

                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={price}
                      onChange={priceHandler}
                      min={0}
                      max={200000}
                    />

                    <div className="row mb-3">
                      <div className="col-6">
                        <p className="mb-0">Min</p>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="typeNumber">
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
                          <label className="form-label" htmlFor="typeNumber">
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
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="text-dark ">Ratings</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="accordion-body">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-secondary"></i>
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                      </label>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </>
    );
  };

  const ShowpagiData = () => {
    const handleById = (id) => {
      Navigate(`/products/${id}`, { state: { id: id } });
    };
    return (
      <>
        <div className="row mb-5">
          <>
            {filter.map((product) => {
              return (
                <>
                  <div
                    className={`${
                      listData == "1"
                        ? "col-lg-6 col-md-6 col-sm-12 col-12"
                        : "col-lg-4 col-md-6 col-sm-12 col-12"
                    } d-flex`}
                    onClick={() => handleById(product?._id)}
                  >
                    <div
                      className={`card w-100 my-2 shadow-2-strong product-body card2 ${
                        listData == "1" ? "d-flex flex-row" : ""
                      }`}
                    >
                      <div
                        className={` product-img ${
                          listData == "1"
                            ? "card_width adjust w-40"
                            : "adjust w-60"
                        }`}
                      >
                        {product.images && (
                          <img
                            src={product.images[0].url}
                            className="card-img-top-new img-fluid"
                          />
                        )}
                      </div>
                      <div
                        className={`card-body d-flex flex-column ${
                          listData == "1" ? "w-50 " : "w-100"
                        }`}
                      >
                        <div className={`${listData == "1" ? "h-250" : ""}`}>
                          <div
                            className={`d-flex flex-row ${
                              listData == "1" ? "mt-3" : "mt-0"
                            }`}
                          >
                            <h5 className="mb-1 me-1">${product.price}</h5>
                            <span className="text-danger">
                              <s>$49.99</s>
                            </span>
                          </div>
                          <p className="card-text">{product.name}</p>
                        </div>
                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <Button
                            href="#!"
                            className="btn btn-primary shadow-0 me-1"
                            onClick={() => handleById(product?._id)}
                          >
                            Add to cart
                          </Button>
                          <NavLink
                            href="#!"
                            className="btn btn-light border icon-hover px-2 pt-2"
                          >
                            <i className="fa fa-heart fa-lg text-secondary px-1 heart"></i>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        </div>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container grid-container ">
          <div className="row mt-5 mx-0">
            {activeTab != "1" && (
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 p-md-2 p-0">
                <ShowCategory />
              </div>
            )}
            <div
              className={`p-md-2 p-0 ${
                activeTab == "1"
                  ? "col-12"
                  : "col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"
              }`}
            >
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong className="d-block py-2">
                  {filter?.length} Items found
                </strong>
                <div className="ms-auto">
                  <select className="form-select d-inline-block w-auto border pt-1 me-3 ">
                    <option value="0">Best match</option>
                    <option value="1">Recommended</option>
                    <option value="2">High rated</option>
                    <option value="3">Randomly</option>
                  </select>
                  <div className="btn-group shadow-0 border">
                    <Link
                      className={`btn btn-light ${
                        listData == "1" ? "text-success" : ""
                      }`}
                      title="List view"
                      onClick={() => {
                        setListData("1");
                      }}
                    >
                      <i className="fa fa-bars fa-lg"></i>
                    </Link>

                    <Link
                      className={`btn btn-light ${
                        listData == "2" ? "text-success" : ""
                      }`}
                      title="Grid view"
                      onClick={() => {
                        setListData("2");
                      }}
                    >
                      <i className="fa fa-th fa-lg"></i>
                    </Link>
                  </div>
                </div>
              </header>
              <div>{listData && <ShowpagiData />}</div>
              <div className="d-flex justify-content-center">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="First"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Products;
