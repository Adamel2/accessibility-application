import React, {useState, useEffect} from 'react';
import Product from '../../../components/ProductCardArea/Product';
import axios from 'axios';


function Starters() {

    const [list, setList] = useState([])
    const handleDesserts = async () => {
        await axios.get("http://18.224.24.80:8080/v1/findAllProductByCategoryId/4beac189-ba9c-4ccf-9ab2-d4fa456022fb")
            .then(response => setList(response.data))
            .then(error => console.log(error))
    }

    useEffect(() => {
        handleDesserts();
    }, []);
    return (

        <div className="d-flex flex-rows justify-content-center m-3">
        <ul className="d-flex flex-rows justify-content-center">

            {list.map((item )=> <Product key={item.product_id} product_id={item.product_id}  product_name={item.product_name} product_description={item.product_description} price={item.product_price} photo={item.photo}/>)}
            </ul>
            
        </div>

    )
}

export default Starters;