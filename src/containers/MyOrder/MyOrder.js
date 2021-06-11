import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import OrderCard from "./OrderCard";
import { useHistory } from "react-router-dom";

function MyOrder() {

    const history = useHistory();

    const [listOrder, setListOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(Number);
    const alertCheckOut = () => {
        alert("Thank you...");
        localStorage.clear();
        history.push("/accessibility-application");
    }

    const handleOrders = () => {
        var archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;
        let counter = 0;

        for (; key = keys[i]; i++) {
            archive.push(JSON.parse(localStorage.getItem(key)));
            counter += JSON.parse(localStorage.getItem(key)).price;
        }
        setListOrder(archive);
        setTotalPrice(counter);
    }


    useEffect(() => {
        handleOrders();
    }, [])
    return (
        <div className="row m-3">
            <div className="col-12">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Item name</th>

                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {listOrder.map(item => <OrderCard key={new Date().getTime()} name={item.name} price={item.price} />)}

                    </tbody>
                </Table>

                <Button className="text-white font-weight-bold" onClick={alertCheckOut}>Check out</Button>
                <Button className="m-2 bg-dark text-white font-weight-bold" disabled>Total : {totalPrice}$</Button>
            </div>
        </div>
    );
}

export default MyOrder;
