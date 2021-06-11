import React, {useState, useEffect} from 'react';
import Product from '../../../components/ProductCardArea/Product';
import axios from 'axios';

function Drink() {

    const [list, setList] = useState([])
    const handleDesserts = async () => {
        await axios.get("http://18.224.24.80:8080/v1/findAllProductByCategoryId/fb7569ed-7cb9-4107-b3b0-ae84012cfd25")
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


export default Drink;