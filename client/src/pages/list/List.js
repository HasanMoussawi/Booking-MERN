import React from "react";
import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar.js";

function List() {
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="listTitle">Search</div>
          
          </div>
          <div className="listResult">
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default List