import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
            </div>
            <BrowserRouter>

                <Switch>
                    <Route exact path="/accessibility-application" component={Advertisement} />
                    <Route exact path="/" component={Advertisement} />
                    <Route path="/accessibility-application/menu" component={Menu} />
                    <Route path="/accessibility-application/myOrder" component={MyOrder} />
                    <Route path="/accessibility-application/login" component={Login} />
                    <Route path="/desserts" component={Desserts} />
                    <Route path="/drink" component={Drink} />
                    <Route path="/mainDishes" component={MainDishes} />
                    <Route path="/starters" component={Starters} />
                    <Route path="/addProduct" component={AddProduct} />

                </Switch>
            </BrowserRouter>

            <div className="row">
                <Footer />
            </div>
        </div>
    );
}

export default App;
