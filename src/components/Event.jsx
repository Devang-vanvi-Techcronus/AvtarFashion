import React from "react";

const Event = () => {
  return (
    <>
      <div className="container">
        <h1>Newest fashion</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="card w-18">
              <img
                src="https://images.unsplash.com/photo-1565208565380-02138793c3b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className="first-image"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Black Pants</h5>
                </center>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card w-18">
              <img
                src="https://images.unsplash.com/photo-1549062572-544a64fb0c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                className="first-image"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">T-shirt</h5>
                </center>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card w-18">
              <img
                src="https://images.unsplash.com/photo-1565279586461-293ae487de37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className="first-image"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Pants</h5>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
