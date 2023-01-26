import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Item.css";
import store from "../store";

function Item({ info }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.data);
  let isPresent = false;
  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == info.id) {
        isPresent = true;
        break;
      }
    }
  }
  return (
    <div className="mainItemDiv">
      <div className="itemCard" onClick={() => navigate(`/${info.id}`)}>
        <img src={info.otherImages[0]} />
        <h4>{info.name}</h4>
        <p>{info.description}</p>
        <div className="rate">
          <span>Rs.{info.finalPrice}</span>
          <strike>Rs.{info.strickPrice}</strike>
          <span>({info.discount}% OFF)</span>
        </div>
      </div>
      <div>
        {isPresent ? (
          <button
          className="removeFromCart"
          onClick={() => dispatch({ type: "remove", payload: info })}
        >
          Remove From Cart
        </button>
        ) : (
          <button
            className="addToCart"
            onClick={() => dispatch({ type: "add", payload: info })}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
