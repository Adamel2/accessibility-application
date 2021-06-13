import axios from "axios";
import React, { useState, useEffect } from "react";
import Category from "../Category/Category"
import { Router, Switch, Route } from 'react-router-dom'
import Desserts from "../Category/ProductArea/Desserts";
import MainDishes from "../Category/ProductArea/MainDishes";
import Starters from "../Category/ProductArea/Starters";
import Drink from "../Category/ProductArea/Drink";

function Menu() {

    const [listCategory, setListCategory] = useState([]);


    const displayCategory = async () => {
        await axios.get("http://18.224.24.80:8080/v1/findAllCategory")
            .then(response => setListCategory(response.data))
    }
    
    useEffect(() => {
        displayCategory();
    }, []);
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-12 m-3 p-3">
                        <div className="d-flex justify-content-center">
                            <Switch>
                                <Route path="/desserts" component={Desserts} />
                                <Route path="/drink" component={Drink} />
                                <Route path="/mainDishes" component={MainDishes} />
                                <Route path="/starters" component={Starters} />
                            </Switch>

                            <ul className="d-flex flex-rows justify-content-center">

                                {listCategory.map((item, index) => <Category key={item.category_id} id={item.category_id} name={item.category_name} description={item.description} photo={item.photo} />)}

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Menu;
