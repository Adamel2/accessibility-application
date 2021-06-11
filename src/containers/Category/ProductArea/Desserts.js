import React, {useState, useEffect} from 'react';
import Product from '../../../components/ProductCardArea/Product';
import axios from 'axios';

function Desserts() {

    const [list, setList] = useState([])
    const handleDesserts = async () => {
        await axios.get("http://18.224.24.80:8080/v1/findAllProductByCategoryId/e9826f3e-b3b5-4a95-bcdc-8a9a22ef63a0")
            .then(response => setList(response.data))
    }

    useEffect(() => {
        handleDesserts();
    }, []);
    return (

        <div className="d-flex flex-column justify-content-center m-3">
            <ul className="d-flex flex-column justify-content-center">

            {list.map((item )=> <Product key={item.product_id} product_id={item.product_id} product_name={item.product_name} product_description={item.product_description} price={item.product_price} photo={item.photo}/>)}
            </ul>
            
        </div>

    )
}


export default Desserts;