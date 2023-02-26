import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="adminlogo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="listed-menu">
        <ul>
          <li>
            <h1>ADMIN</h1>
          </li>
          <li>
            <NavLink to="/admin/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/admin/product/add">Add a product</NavLink>
          </li>
          <li>
            <NavLink to="/admin/addplatform">Add a platform</NavLink>
          </li>
          <li>
            <NavLink to="/admin/addtag">Add a tag</NavLink>
          </li>
          <li>
            <NavLink to="/home">Go to Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
