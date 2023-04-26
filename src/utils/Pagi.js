import React, { useEffect, useState } from "react";
import ReactPagination from "react-paginate";
import { getWithoutToken } from "../Api/allApi";
import { PAGINATION_URL } from "../Api/helper/coreapicall";
import { Button } from "react-bootstrap";

const Pagi = () => {
  const [item, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    getWithoutToken(`/product?page=${currentPage}`).then((response) => {
      setItem(response.products);
    });
  };

  const handlepageClick = (page) => {
    setCurrentPage(page.selected);
    getProduct();
  };
  return (
    <>
      {" "}
      <div className="row mb-5">
        <>
          {item.map((product) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card w-100 my-2 shadow-2-strong product-body card2">
                    <div className="product-img">
                      {product.images && (
                        <img
                          src={product.images[0].url}
                          className="card-img-top h-100"
                        />
                      )}
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
    </>
  );
};

export default Pagi;
