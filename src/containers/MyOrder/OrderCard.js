import React from 'react'

function OrderCard(props) {

    return (

        <tr key={props.key}>
            <td>{props.name}</td>
            <td>{props.price}$</td>
        </tr>
    )
}
export default OrderCard;