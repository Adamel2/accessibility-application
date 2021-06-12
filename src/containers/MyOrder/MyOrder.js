import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import OrderCard from "./OrderCard";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2"

function MyOrder() {

    const history = useHistory();

    const [listOrder, setListOrder] = useState(new Map());
    const [totalPrice, setTotalPrice] = useState(Number);
    const [isOrder, setOrder] = useState(false);
    const [timer,setTimer] = useState(0);
    const alertCheckOut = () => {

       setInterval(()=>{
            let someTimer = timer;
            someTimer += 10;
            setTimer(someTimer);
        },5000)
       
    }
    const clearStorage = () => {

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Thank you for choose Israel Restaurant',
            showConfirmButton: false,
            timer: 1500
          })
        localStorage.clear();
        setTimeout(()=>{
            history.push("/accessibility-application");

        },3000)
    }

    const checkout = () =>{
        setOrder(true)
    }

    const handleOrders = () => {

        var hash = new Map();
        var archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;
        let counter = 0;

        for (; key = keys[i]; i++) {
            hash.set(key, JSON.parse(localStorage.getItem(key)));
            counter += JSON.parse(localStorage.getItem(key)).price;
        }
        setListOrder(hash);
        setTotalPrice(counter);
    }


    useEffect(() => {
        handleOrders();
    }, [])
    useEffect(() => {
        if(isOrder == true){
            const interval = setInterval(()=>{
                let someTimer = timer;
                someTimer += 10;
                setTimer(someTimer);
            },5000)
        if(timer > 100){
            setOrder(false);
            clearStorage();
            return () => clearInterval(interval);
        }
    }
    }, [timer,isOrder])
    return (
        <div className="row m-3">
            <div className="col-12">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Item name</th>

                            <th>Price</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {[...listOrder.keys()].map(item => <OrderCard key={item} id={item} name={listOrder.get(item).name} price={listOrder.get(item).price} />)}

                    </tbody>
                </Table>
                {isOrder === true && totalPrice>0 && <div>
                <img src="https://img.icons8.com/dusk/64/000000/waiter.png"/>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: timer.toString()+'%'}} aria-valuenow={timer.toString()} aria-valuemin="0" aria-valuemax="100">{timer}%</div>
                </div></div>}
                {isOrder === false && <Button className="text-white font-weight-bold" onClick={checkout}>Check out</Button>}
                <Button className="m-2 bg-dark text-white font-weight-bold" disabled>Total : {totalPrice}$</Button>
            </div>
        </div>
    );
}

export default MyOrder;
