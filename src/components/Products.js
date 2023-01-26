import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./products.css";
import store from "../store";
import { useSelector } from "react-redux";
import data from "../../data";

function Products() {
  const [state, setState] = useState([]);
  let condition = useSelector((store) => store);

  useEffect(() => setState(data), []);
  return (
    <div className="products">
      {state.map((ele, index) => {
        if (
          condition["gender"].includes(ele.gender) &&
          ele["link"].toLowerCase().includes(condition.color) &&
          ele["folded"].includes(condition.folded)
        ) {
          return <Item key={index} info={ele} />;
        }
      })}
    </div>
  );
}

export default Products;
