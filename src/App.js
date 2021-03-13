import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Advertisement from "./components/Advertisement/Advertisement";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./containers/Menu/Menu";
import MyOrder from "./containers/MyOrder/MyOrder";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <BrowserRouter>

      <Switch>
          <Route exact path="/" component={Advertisement}/>
          <Route  path="/menu" component={Menu}/>
          <Route  path="/myOrder" component={MyOrder}/>

      </Switch>
      
      </BrowserRouter>

      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
