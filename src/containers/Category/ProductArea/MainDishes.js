import React, {useState, useEffect} from 'react';
import Product from '../../../components/ProductCardArea/Product';
import axios from 'axios';

function MainDishes() {

    const [list, setList] = useState([])
    const handleDesserts = async () => {
        await axios.get("http://localhost:8080/v1/findAllProductByCategoryId/8b010cde-95e4-46e0-8173-e2db1cb21ff4")
            .then(response => setList(response.data))
    }

    useEffect(() => {
        handleDesserts();
    }, []);
    return (

        <div className="d-flex flex-column justify-content-center m-5">
            <ul className="d-flex flex-column justify-content-center">

            {list.map((item )=> <Product key={item.product_id} product_id={item.product_id}  product_name={item.product_name} product_description={item.product_description} price={item.product_price} photo={item.photo}/>)}
            </ul>
            
        </div>

    )
}

export default MainDishes;