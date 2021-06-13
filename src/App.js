import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import detectZoom from 'detect-zoom';
import "./App.css";
import Advertisement from "./components/Advertisement/Advertisement";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./containers/Menu/Menu";
import MyOrder from "./containers/MyOrder/MyOrder";
import Login from "./containers/AdminArea/LoginArea/Login";
import Desserts from "./containers/Category/ProductArea/Desserts";
import MainDishes from "./containers/Category/ProductArea/MainDishes";
import Starters from "./containers/Category/ProductArea/Starters";
import Drink from "./containers/Category/ProductArea/Drink";
import AddProduct from "./containers/AdminArea/AddProductArea/AddProduct";
function App() {

    const [currentZoom, setCurrentZoom] = useState(1); // default zoom value
    const [rgb, setRgb] = useState([255, 0, 0]); // rgb color back ground
    const [flag, setFlag] = useState(false); //flag for zoom in zoom out
    const [colorFlag, setColorFlag] = useState(false) // flag if add new background color or text color
    const [brightness, setBrightness] = useState(125); // check if background bigger then 125  and set black or white color
    const button = useRef(null);


    // button flag if change the colors (background and text color) or not
    const handleColor = () => {
        button.current.focus();
        if (colorFlag == false) {
            setRgb([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)]);
            setBrightness(Math.round(((parseInt(rgb[0]) * 299) +
                (parseInt(rgb[1]) * 587) +
                (parseInt(rgb[2]) * 114)) / 1000))
            setColorFlag(true);
        }
        else {
            setColorFlag(false);
        }
    }
    // button flag if add zoom option or not
    const handleZoomButtons = () => {

        if (flag == true) {

            setFlag(false);
        } else {
            setFlag(true);
        }
    }
    //change the zoom to zoom in
    const handlePageZoomIn = () => {
        if (currentZoom < 3) {
            setCurrentZoom(currentZoom + 0.1);
            document.getElementById("my-App").style.transform = `scale(${currentZoom})`;
        }
    }

    //change the zoom to zoom out
    const handlePageZoomOut = () => {
        if (currentZoom > 1) {
            setCurrentZoom(currentZoom - 0.1);
            document.getElementById("my-App").style.transform = `scale(${currentZoom})`;
        }
    }

    const handleDefaultZoom = () => {
        document.getElementById("my-App").style.transform = `scale(1)`;
    }

    useEffect(() => {

        //init default zoom - my-App the content div
        document.getElementById("my-App").style.transform = `scale(${currentZoom})`;

    }, [])
    return (
        <div>
            {flag && <div className="row zoom">
                <button className="btn bg-secondary zoom-in" id="zoom-in" onClick={handlePageZoomIn} ref={button}><img src="https://img.icons8.com/ultraviolet/40/000000/zoom-in--v2.png"/></button>
                <button className="btn bg-secondary zoom-in" id="zoom-out" onClick={handlePageZoomOut}><img src="https://img.icons8.com/ultraviolet/40/000000/zoom-out.png"/></button>
                <button className="btn bg-secondary zoom-in" id="color" onClick={handleColor}><img src="https://img.icons8.com/dusk/64/000000/color-dropper.png"/></button>
                <button className="btn bg-secondary zoom-in" id="default-zoom" onClick={handleDefaultZoom}><img src="https://img.icons8.com/cute-clipart/64/000000/zoom-to-extents.png"/></button>
            </div>}
            <BrowserRouter>

                <div >
                    <div className="container-fluid" >

                        <div className="row">

                            <div className="col-12">
                                <Navbar bg="dark" variant="dark">
                                    <Navbar.Brand href="/accessibility-application">Restaurant</Navbar.Brand>
                                    <Nav className="mr-auto">
                                        <Link className="btn btn-light text-dark m-1" to="/accessibility-application/menu">Menu</Link>
                                        <Link className="btn btn-light text-dark m-1" to="/accessibility-application/myOrder">My Order</Link>
                                        <button className="btn btn-light text-dark m-1" onClick={handleZoomButtons}>accessibility</button>
                                    </Nav>
                                </Navbar>
                            </div>
                        </div>
                        <div id="my-App" style={colorFlag ? { backgroundColor: 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')', color: brightness > 125 ? 'black' : 'white' } : {}}>

                            <Switch>
                                <Route exact path="/accessibility-application" component={Advertisement} exact />
                                <Route exact path="/" component={Advertisement} />
                                <Route path="/accessibility-application/menu" component={Menu} exact />
                                <Route path="/accessibility-application/myOrder" component={MyOrder} />
                                <Route path="/accessibility-application/login" component={Login} />
                                <Route path="/desserts" component={Desserts} />
                                <Route path="/drink" component={Drink} />
                                <Route path="/mainDishes" component={MainDishes} />
                                <Route path="/starters" component={Starters} />
                                <Route path="/addProduct" component={AddProduct} />

                            </Switch>
                        </div>

                        <div className="row footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
