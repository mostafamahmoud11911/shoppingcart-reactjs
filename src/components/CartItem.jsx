import React, { useContext } from "react";
import data from "../data/items.json";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "./FormatCurrency";
import { ShoppingCartContext } from "../context/CartContext";

export default function CartItem({ id, quantity }) {
  const item = data.find((item) => item.id === id);
  const { removeItemFromCart } = useContext(ShoppingCartContext);
  return (
    <>
      <Stack
        direction="horizontal"
        style={{ display: "flex", justifyItems: "center" }}
        gap={2}
      >
        <img
          src={item.imgUrl}
          style={{
            width: "125px",
            height: "75px",
            marginBottom: "5px",
            objectFit: "cover",
          }}
          alt=""
        />
        <div className="d-flex align-items-center justify-content-between w-100">
          <div>
            <div className="d-flex align-items-center">
              <h4>{item.name}</h4>
              <h6 className="ms-3 text-muted">
                {quantity > 1 && <span>x{quantity}</span>}
              </h6>
            </div>

            <h6>{formatCurrency(item.price * quantity)}</h6>
          </div>
          <div className="ms-auto text-end">
            <Button
              variant="outline-danger"
              onClick={() => removeItemFromCart(id)}
            >
              x
            </Button>
          </div>
        </div>
      </Stack>
    </>
  );
}
