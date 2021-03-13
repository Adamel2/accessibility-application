import React from "react";
import Carousel from "react-bootstrap/Carousel"
import FirstCover from "../../assets/img/pizza-cover.jpeg"
import SecondCover from "../../assets/img/pizza-cover2.jpeg"
import ThirdCover from "../../assets/img/food-cover3.jpeg"

function Advertisement() {
  return (
    <div className="row">
    <div className="col-12">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstCover}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-white">First slide label</h3>
            <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SecondCover}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdCover}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default Advertisement;
