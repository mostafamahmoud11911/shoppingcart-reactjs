import React from "react";
import { Row } from "react-bootstrap";
import data from '../data/items'
import StoreItems from "./StoreItems";

export default function Store() {

  return (
    <>
      <Row>
        {data.map(item => <StoreItems key={item.id} {...item}/>)}
      </Row>
    </>
  );
}
