import React from "react";
import Carousel from "react-bootstrap/Carousel"
import FirstCover from "../../assets/img/pizza-cover.jpeg"
import SecondCover from "../../assets/img/pizza-cover2.jpeg"
import ThirdCover from "../../assets/img/food-cover3.jpeg"
import ReactPlayer from "react-player"


function Advertisement() {

    return (
        <div className="row">
            <div className="col-12">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={FirstCover}
                            alt="Pizza Slide Advertisement"
                        />
                        <Carousel.Caption>
                            <h3 className="text-white"></h3>
                            <p className="text-white"></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SecondCover}
                            alt="Pizza Slide Advertisement"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ThirdCover}
                            alt="Spaghetti Slide Advertisement"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="row">
                <div className="col-12 m-3 p-3">
                    <div className="d-flex flex-column justify-content-center m-3">
                        <div className="d-flex flex-column justify-content-center m-5">
                            <div className="align-self-center m-3">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Y-K4TgRiGBo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                {/* <ReactPlayer
                                    url="https://www.youtube.com/embed/Y-K4TgRiGBo" /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advertisement;
