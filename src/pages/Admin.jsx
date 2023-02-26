import React from "react";
import Sidebar from "../components/Sidebar";
import loading from '../assets/images/paw.gif'

function Admin() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="wrapper-container">
        <div className="img">
            <img src={loading} alt="loading" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
