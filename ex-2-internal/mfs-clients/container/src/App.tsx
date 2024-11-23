import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import CartPage from "Cart/CartPage";
// @ts-ignore
import ProductsPage from "Products/ProductsPage";

import "./index.css";

const App = () => (
  <div className="container">
    <h1 style={{ fontSize: "3rem" }}> Container - Host </h1>
    <div className="host">
      <div className="mfItem">
        <h1>Products</h1>
        <div className="content">
          <ProductsPage />
        </div>
      </div>
      <div className="mfItem">
        <h1> Your Cart </h1>
        <div className="content">
          <CartPage />
        </div>
      </div>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
