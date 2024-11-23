import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// @ts-ignore
import css from "./style.module.css";
// import "./global.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        const result = await axios.get("http://localhost:5000/products");
        const { data } = result;
        setProducts(data);
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
    <div className="loader"> </div>
  ) : (
    <div className={css.plist}>
      {products.map((product: any) => {
        return <ProductCard {...product} />;
      })}
    </div>
  );
}

function ProductCard(props: any) {
  return (
    <div className="smallCard">
      <div>
        <img alt="Card" src={props.thumbnail} />
        <h2> {props.brand}</h2>
        <h2>{props.price}$</h2>
        <h3>discount: {props.discountPercentage}%</h3>
        <Button label="Buy" />
      </div>
    </div>
  );
}
