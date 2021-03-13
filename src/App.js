import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
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
          <Route exact path="/accessibility-application" component={Advertisement}/>
          <Route  path="/accessibility-application/menu" component={Menu}/>
          <Route  path="/accessibility-application/myOrder" component={MyOrder}/>
          <Redirect from="/" to="/accessibility-application" />

      </Switch>
      
      </BrowserRouter>

      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
