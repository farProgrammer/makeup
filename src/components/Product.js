import React, { Component } from "react";

export class Product extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i0.wp.com/www.society19.com/wp-content/uploads/2019/11/f3369cb8451a210974b6688053e461d4.jpg?fit=1024%2C768&ssl=1"
                className="d-block w-100"
                alt="..."
                width="400px"
                height="400px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.cliqueinc.com/posts/281511/best-holy-grail-makeup-products-281511-1589389412382-main.700x0c.jpg"
                className="d-block w-100"
                alt="..."
                width="400px"
                height="400px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://thumbs.dreamstime.com/b/cosmetic-shop-variety-89612952.jpg"
                className="d-block w-100"
                alt="..."
                width="400px"
                height="400px"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
