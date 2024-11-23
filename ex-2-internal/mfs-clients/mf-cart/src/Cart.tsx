import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        const result = await axios.get("http://localhost:5000/cart");
        const { data } = result;
        setCart(data);
      } catch (error) {
        alert("Something went Wrong!");
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
    return () => {
      console.log("CleanUp");
    };
  }, []);

  return isLoading ? (
    <div className="loader"></div>
  ) : (
    <div>
      {cart.map((product: any, index: number) => {
        return <CartCard {...product} index={index} />;
      })}
    </div>
  );
}
type CartCardType = {
  index: number;
  thumbnail: string;
  price: number;
  brand: string;
  category: string;
};
function CartCard(props: CartCardType) {
  const header = <img alt="Card" src={props.thumbnail} />;
  const footer = (
    <span>
      <h3>{props.index}</h3>
      {props.price}$
      <Button label="Remove" />
    </span>
  );
  return (
    <div className="smallCard">
      <Card footer={footer} header={header}>
        {props.brand}
        {props.category}
      </Card>
    </div>
  );
}
