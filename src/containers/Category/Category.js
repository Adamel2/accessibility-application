import React from "react"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pizza from "../../assets/img/pizza.jpeg";
import starters from "../../assets/img/starters.jpeg";
import maindishes from "../../assets/img/main-dishes.jpeg";
import drink from "../../assets/img/drink.jpeg";
import desserts from "../../assets/img/desserts.jpeg";
import { Link, useHistory } from 'react-router-dom'



function Category(props) {

    const history = useHistory();


    const handleImage = () => {
        if (props.photo === "starters") {
            return starters
        }
        if (props.photo === "main-dishes") {
            return maindishes;
        }
        if (props.photo === "drink") {
            return drink;
        }
        if (props.photo === "desserts") {
            return desserts;
        }
        return maindishes;
    }

    const handleLinkComponent = () => {

        if (props.photo === "starters") {
            history.push("/starters");
        }
        if (props.photo === "main-dishes") {
            history.push('/mainDishes');
        }
        if (props.photo === "drink") {
            history.push("/drink");
        }
        if (props.photo === "desserts") {
            history.push("/desserts");
        }
    }

    const handleIcon = () => {
        if (props.photo === "starters") {
            return "https://img.icons8.com/plasticine/100/000000/food-and-wine.png"
        }
        if (props.photo === "main-dishes") {
            return "https://img.icons8.com/plasticine/100/000000/steak-rare.png";
        }
        if (props.photo === "drink") {
            return "https://img.icons8.com/emoji/96/000000/tropical-drink.png";
        }
        if (props.photo === "desserts") {
            return "https://img.icons8.com/emoji/96/000000/cupcake-emoji.png";
        }
        return maindishes;
    }

return (
    <li id={props.id} className="list-inline-item m-3 d-flex flex-column justify-content-center">
        <Card style={{ width: "18rem" }}>
            <Card.Img alt={props.description} variant="top" src={handleImage()} />
            <Card.Body style={{backgroundColor:'grey'}}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Title>{props.description}</Card.Title>
                <button onClick={()=> handleLinkComponent()} className="btn bg-primary">Order now</button>
                <img src={handleIcon()}/>
                {/* <Link onClick={()=> handleLinkComponent()} className="btn bg-primary">Order now</Link> */}
            </Card.Body>
        </Card>
    </li>
)

}

export default Category;