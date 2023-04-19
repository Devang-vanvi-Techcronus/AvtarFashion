import React from "react";

const Event = () => {
  return (
    <>
      <div className="container">
        <div className="p-5">
          <h1>Newest fashion</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 ">
            <div className="flip-box-inner">
              <div className="card w-18 ">
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
          </div>

          <div className="col-lg-4 flip-box">
            <div className="flip-box-inner">
              <div className="card w-18 flip-box-front">
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
          </div>
          <div className="col-lg-4 ">
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
        <div className="sec-title">
          <span className="title pt-5">About Event</span>
          <h2>
            Make Your Mark 2022: fashion's Learning and Networking Event For
            Women Leaders in Supply Chain and Logistics
          </h2>
        </div>
        <div className=" mb-5">
          <div className="text">
            Be it clothing, footwear or accessories, Myntra offers you the ideal
            combination of fashion and functionality for men, women and kids.
            You will realise that the sky is the limit when it comes to the
            types of outfits that you can purchase for different occasions.
          </div>
          <div className="text">
            Myntra is one of the best online shopping sites for classNamey
            accessories that perfectly complement your outfits. You can select
            smart analogue or digital watches and match them up with belts and
            ties. Pick up spacious bags, backpacks, and wallets to store your
            essentials in style. Whether you prefer minimal jewellery or grand
            and sparkling pieces, our online jewellery collection offers you
            many impressive options.
          </div>
          <div className="text">
            Online shopping for kids at Myntra is a complete joy. Your little
            princess is going to love the wide variety of pretty dresses,
            ballerina shoes, headbands and clips. Delight your son by picking up
            sports shoes, superhero T-shirts, football jerseys and much more
            from our online store. Check out our lineup of toys with which you
            can create memories to cherish.
          </div>
          <div className="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div className="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
