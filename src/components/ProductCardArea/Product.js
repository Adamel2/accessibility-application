import React from 'react'
import Swal from "sweetalert2"

import Invented from "../../assets/desserets/invented.jpeg"
import Mixed from "../../assets/desserets/mixed.jpeg"
import Mongo from "../../assets/desserets/mongo.jpeg"
import Praline from "../../assets/desserets/praline.jpeg"
///Drink///
import Coffee from "../../assets/drink/coffee.jpeg"
import Cola from "../../assets/drink/Cola.jpeg"
import Orange from "../../assets/drink/orange.jpeg"
import Sprite from "../../assets/drink/sprite.jpeg"

//main dish////
import Baked from "../../assets/main-dish/baked.jpeg"
import Creamy from "../../assets/main-dish/creamy.jpeg"
import Meatball from "../../assets/main-dish/meatball.jpeg"
import Pot from "../../assets/main-dish/pot.webp"

//starters////
import Aloo from "../../assets/starters/aloo.jpeg"
import Cheese from "../../assets/starters/cheese.jpeg"
import Kakori from "../../assets/starters/kakori.jpeg"
import Microwave from "../../assets/starters/microwave.jpeg"

import Menu from "../../assets/img/menu.png"



function Product(props) {


    const handleImage = () => {

        if(props.photo === 'invented'){
            return Invented
        }
        if(props.photo === 'mixed'){
            return Mixed
        }
        if(props.photo === 'mongo'){
            return Mongo
        }
        if(props.photo === 'praline'){
            return Praline
        }
        ////Drink////
        if(props.photo === 'coffee'){
            return Coffee
        }
        if(props.photo === 'cola'){
            return Cola
        }
        if(props.photo === 'orange'){
            return Orange
        }
        if(props.photo === 'sprite'){
            return Sprite
        }
        ///Main dish//
        if(props.photo === 'baked'){
            return Baked
        }
        if(props.photo === 'creamy'){
            return Creamy
        }
        if(props.photo === 'meatball'){
            return Meatball
        }
        if(props.photo === 'pot'){
            return Pot
        }
        ///starters//
        if(props.photo === 'aloo'){
            return Aloo
        }
        if(props.photo === 'cheese'){
            return Cheese
        }
        if(props.photo === 'kakori'){
            return Kakori
        }
        if(props.photo === 'microwave'){
            return Microwave
        }
        return Menu;
    }
    const handleProduct = () =>{
        localStorage.setItem(new Date().getTime(),JSON.stringify({name:props.product_name,price:Number(props.price)}))
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Good',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <li className="align-self-center m-3">

            <div className="card" style={{width:'18rem'}}>
                <img className="card-img-top" alt={props.product_description} src={handleImage()}  />
                <div className="card-body">
                    <h5 className="card-title">{props.product_name}</h5>
                    <p className="card-text">{props.product_description}</p>
                    <p className="card-text">{props.price}$</p>
                    <button onClick={handleProduct} className="btn btn-primary">add to your Order...</button>
                    <img src="https://img.icons8.com/color/48/000000/eating-person.png"/>
                </div>
            </div>
        </li>
    )
}

export default Product;