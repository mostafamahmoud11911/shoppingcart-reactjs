import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import { ShoppingCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "./FormatCurrency";
import data from "../data/items";

export default function ShoppingCart() {
  const { cartItems, handleClose, open } = useContext(ShoppingCartContext);

  return (
    <Offcanvas show={open} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="fw-bold text-end fs-2">
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = data.find((item) => item.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
