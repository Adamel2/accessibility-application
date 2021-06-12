import React from 'react'

function OrderCard(props) {

    const deleteItem = () =>{
        console.log(typeof props.key);
        localStorage.removeItem(props.id)
        window.location.reload(false);
        
    }
    return (

        <tr key={props.key}>
            <td>{props.name}</td>
            <td>{props.price}$</td>
            <td><button className="btn bg-danger"onClick={deleteItem}>Delete</button></td>
        </tr>
    )
}
export default OrderCard;