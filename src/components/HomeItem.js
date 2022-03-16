import React, { Component } from "react";

export class HomeItem extends Component {
  render() {
    let { title, description, imageUrl, HomeUrl } = this.props;
    return (
      <div
        className="my-3"
        style={{ backgroundColor: "maroon", borderRadius: "35%" }}
      >
        <div className="my-3">
          <div
            className="card"
            style={{
              width: "18rem",
              backgroundColor: "lightpink",
              borderRadius: "20%",
            }}
          >
            <img
              src={imageUrl}
              className="card-img-top"
              alt="..."
              style={{ borderRadius: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a
                href={HomeUrl}
                target="_blank"
                className="btn btn-sm btn-success"
                style={{ borderRadius: "45%" }}
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeItem;
