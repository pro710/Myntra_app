import React from "react";
import { useDispatch } from "react-redux";
import "./Sidebar.css";

function Sidebar() {
    let dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebarGender">
        <h4>Gender :</h4>
        <div className="sidebarRadio">
          <input type="radio" name="Gender" value="M" onClick={()=>dispatch({type:'Gender', payload:"M"})}/>
          <label htmlFor="M">Male</label>
        </div>
        <div className="sidebarRadio">
          <input type="radio" name="Gender" value="F" onClick={()=>dispatch({type:'Gender', payload:"F"})}/>
          <label htmlFor="M">Female</label>
        </div>
      </div>
      <div className="sidebarColor">
        <h4>Color :</h4>
        <input type="checkbox" name="white" onClick={()=>dispatch({type:'Color', payload:"white"})}/>
        <label>White</label>
      </div>
      <div className="sidebarColor">
        <h4>Categories :</h4>
        <input type="checkbox" name="sleeves" onClick={()=>dispatch({type:'folded', payload:"Y"})}/>
        <label>Folded Sleeves</label>
      </div>
    </div>
  );
}

export default Sidebar;
