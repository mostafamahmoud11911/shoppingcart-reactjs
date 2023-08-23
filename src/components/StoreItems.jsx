import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatCurrency } from "./FormatCurrency";
import { ShoppingCartContext } from "../context/CartContext";

export default function StoreItems({ id, imgUrl, name, price }) {
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart} =
    useContext(ShoppingCartContext);
  const quantity = getItemsQuantity(id);

  return (
    <>
      <Col md={3}>
        <Card className="mb-3">
          <Card.Img
            variant="top"
            style={{ height: "200px", objectFit: "cover" }}
            src={imgUrl}
          />
          <Card.Body>
            <Card.Title className="d-flex align-items-center justify-content-between">
              <span>{name}</span>
              <span className="text-muted ">{formatCurrency(price)}</span>
            </Card.Title>
            <div>
              {quantity === 0 ? (
                <Button
                  className="w-100"
                  onClick={() => increaseCartQuantity(id)}
                >
                  Add to cart
                </Button>
              ) : (
                <div className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-3">
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                    <h3 className="mx-3">{quantity}</h3>
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  </div>
                  <Button variant="danger" onClick={()=>removeItemFromCart(id)}>Remove</Button>
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
