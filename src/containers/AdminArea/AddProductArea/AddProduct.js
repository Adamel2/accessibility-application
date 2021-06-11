import React, {useEffect, useState} from 'react'
import axios from 'axios';

function AddProduct() {

    const [category, setCategory] = useState();
    const [listCategory, setListCategory] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] = useState(Number);
    const [description, setDescription] = useState('');

    const handleNewProduct = async () =>{
        let myTotal = Number(total);
        setPrice(myTotal);
        console.log(category , name , description , total);
        await axios.post('http://18.224.24.80:8080/v1/addProduct', {
            'category_id':category,
            'product_name': name,
            'product_price': price,
            'product_description': description,
            'product_total_store': total,
            'photo':"2222"

          });
    }
    const handleCategory = async () => {
        await axios.get("http://18.224.24.80:8080/v1/findAllCategory")
            .then(response => setListCategory(response.data))
    }







    useEffect(()=>{
        handleCategory()
    },[])

    return (

        <div className="d-flex justify-content-center flex-column m-3">
            <div className="input-group mb-3 d-flex flex-column">
                <select  onChange={(e)=>setCategory(e.target.value)}>
                    <option defaultValue>Choose</option>
                    {listCategory.map(item => <option key={item.category_id} value={item.category_id}>{item.category_name}</option>)}
                </select>
                <br/>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter product name..."/><br/>
                <input onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price..."/><br/>
                <input onChange={(e) => setTotal(e.target.value)} type="number"  placeholder="Enter total store"/><br/>
                <input onChange={(e) => setDescription(e.target.value)} placeholder="Enter product description..."/><br/>
                <button className="btn bg-success" onClick={handleNewProduct}>Add new Product...</button>
            </div>
        </div>
    )
}

export default AddProduct;