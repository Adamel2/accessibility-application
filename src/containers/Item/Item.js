import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pizza from "../../assets/img/pizza.jpeg";

function Item() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Pizza} />
      <Card.Body>
        <Card.Title>Israel Pizza</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="m-2"disabled>
          Price:18.99$
        </Button>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Item;
