import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function MyOrder() {

    const alertCheckOut = () => {
        return alert("Thank you...");
    }
  return (
    <div className="row m-3">
      <div className="col-12">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item name</th>
              <th>Numbers</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Israel Pizza</td>
              <td>3</td>
              <td>18.99$</td>
            </tr>
            <tr>
              <td>Israel Pizza</td>
              <td>3</td>
              <td>18.99$</td>
            </tr>
            <tr>
              <td>Israel Pizza</td>
              <td>3</td>
              <td>18.99$</td>
            </tr>
            <tr>
              <td>Israel Pizza</td>
              <td>3</td>
              <td>18.99$</td>
            </tr>
            <tr>
              <td>Israel Pizza</td>
              <td>3</td>
              <td>18.99$</td>
            </tr>
          </tbody>
        </Table>
        
        <Button className="text-white font-weight-bold" onClick={alertCheckOut}>Check out</Button>
        <Button className="m-2 bg-dark text-white font-weight-bold" disabled>Total : 300.99$</Button>
      </div>
    </div>
  );
}

export default MyOrder;
