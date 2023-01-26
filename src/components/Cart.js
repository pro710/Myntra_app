import React from "react";
import { useSelector } from "react-redux";
import store from "../store";
import "./Cart.css";
import Item from "./Item";

function Cart() {
  const items = useSelector((store) => store.data);
  let totalOriginalPrice = 0;
  let finalPrice = 0;
  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      totalOriginalPrice = totalOriginalPrice + Number(items[i].strickPrice);
      finalPrice = finalPrice + Number(items[i].finalPrice)
    }
  }
  return (
    <div className="cart">
      <div className="cartList">
        {items.map((info, index) => (
          <Item info={info} key={index} />
        ))}
      </div>
      <div className="cartTotal">
        <h3>
          Total items : <span>{items.length}</span>
        </h3>
        <h3>
          Total Original Price : <span>{totalOriginalPrice}</span>
        </h3>
        <h3>
          Total Discount : <span>{totalOriginalPrice-finalPrice}</span>
        </h3>
        <h3>
          Final Price : <span>{finalPrice}</span>
        </h3>
        <button className="buyItems">Buy Items</button>
      </div>
    </div>
  );
}

export default Cart;
