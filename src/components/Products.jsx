import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Loading from "../utils/Loader";
import { getWithoutToken } from "../Api/allApi";
import { PRODUCTS_URL } from "../Api/helper/coreapicall";
import { toast } from "react-toastify";
import { Notification } from "../utils/Notification";
import { NavLink, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "react-bootstrap/Pagination";
import ReactPagination from "react-paginate";
import Pagi from "../utils/Pagi";

const Products = ({ activeTab }) => {
  console.log(activeTab, "activeTab");
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState([data]);
  const [loading, setloading] = useState([false]);
  const [view, setView] = useState(false);
  const [listData, setListData] = useState("1");
  console.log("listData: ", listData);
  const Navigate = useNavigate();

  useEffect(() => {
    setloading(true);
    getProduct();
    getfilterProduct();
  }, []);

  const getProduct = () => {
    getWithoutToken(`/product?page=${currentPage}`).then((response) => {
      setFilter(response.products);
      setloading(false);
    });
  };

  const getfilterProduct = () => {
    getWithoutToken(PRODUCTS_URL).then((response) => {
      if (response) {
        setData(response.products);
        setFilter(response.products);
        setloading(false);
      }
    });
  };

  const handlepageClick = (page) => {
    console.log(page, "page ,,,");
    console.log(page.selected, "page selected");
    setCurrentPage(page.selected);
    getProduct();
  };

  const filerProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowCategory = () => {
    return (
      <>
        <section className="">
          <div className="container ">
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
            <div
              className="collapse card d-lg-block mb-5"
              id="navbarSupportedContent"
            >
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="text-dark ">Related items</div>
                  </Accordion.Header>
                  <Accordion.Body
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
                            onClick={() => filerProduct("electronics")}
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
                            Jewellery
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
                          <a
                            href="#"
                            className="text-dark"
                            onClick={() => filerProduct("women's clothing")}
                          >
                            Women's clothing{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-dark">
                            Interiors items{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-dark"
                            onClick={() => filerProduct("Kids")}
                          >
                            kids{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-dark"
                            onClick={() => filerProduct("Bags & Footwear")}
                          >
                            Bags & Footwear
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-dark"
                            onClick={() => filerProduct("Beauty & Health")}
                          >
                            Beauty & Health
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="text-dark ">Brands</div>
                  </Accordion.Header>
                  <Accordion.Body
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingTwo"
                  >
                    <div className="accordion-body">
                      <div>
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
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="text-dark ">Price</div>
                  </Accordion.Header>
                  <Accordion.Body
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
                            <label className="form-label" for="typeNumber">
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
                            <label className="form-label" for="typeNumber">
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
                  <Accordion.Body
                    id="panelsStayOpen-collapseFive"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingThree"
                  >
                    <div className="accordion-body">
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          {/* <Pagination
            aria-label="Page navigation example"
            className="d-flex justify-content-center mt-3"
          >
            <Pagination.Prev />

            <Pagination.Ellipsis />
            <Pagination.Item >{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>

            <Pagination.Ellipsis />

            <Pagination.Next />
          </Pagination> */}
          {/* <>
            <Pagi />
          </> */}
          {/* <ShowpagiData /> */}
        </section>
      </>
    );
  };

  const ShowpagiData = () => {
    const handleById = (id) => {
      console.log(id, "id");
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
                        : "col-lg-4 col-md-4 col-sm-12 col-12"
                    } d-flex`}
                    onClick={() => handleById(product?._id)}
                  >
                    <div
                      className={`card w-100 my-2 shadow-2-strong product-body card2 ${
                        listData == "1" ? "d-flex flex-row" : ""
                      }`}
                    >
                      <div
                        className={`product-img ${
                          listData == "1" ? "card_width" : ""
                        }`}
                      >
                        {product.images && (
                          <img
                            src={product.images[0].url}
                            className="card-img-top h-100 img-fluid"
                          />
                        )}
                      </div>
                      <div className="card-body d-flex flex-column">
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
                            <i className="fa fa-heart fa-lg text-secondary px-1 heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        </div>
        <div>
          <ReactPagination
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            pageCount={4}
            marginPagesDisplayed={3}
            pageRangeDisplayed={8}
            onPageChange={handlepageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
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
              <div className="col-3">
                <ShowCategory />
              </div>
            )}
            <div className={`${activeTab == "1" ? "col-12" : "col-9"}`}>
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
                    <a
                      className="btn btn-light"
                      title="List view"
                      onClick={() => {
                        setListData("1");
                      }}
                    >
                      <i className="fa fa-bars fa-lg"></i>
                    </a>

                    <a
                      className="btn btn-light "
                      title="Grid view"
                      onClick={() => {
                        setListData("2");
                      }}
                    >
                      <i className="fa fa-th fa-lg"></i>
                    </a>
                  </div>
                </div>
              </header>
              <div>{listData && <ShowpagiData />}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Products;
