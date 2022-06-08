import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./list.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar.js";

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);


  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="listTitle">Search</div>
              <div className="listItem">
                <label>Destination</label>
                <input type="text" placeholder={destination} />
              </div>
              <div className="listItem">
                <label>Check-in date Check-out date</label>
                <span onClick={()=>setOpenDate(!openDate)}>
                  {`
                    ${format(date[0].startDate, "MM/dd/yyyy")} 
                    to 
                    ${format(date[0].endDate, "MM/dd/yyyy")}
                  `}
                </span>
                <div className="listItem">
                  <label>Options</label>
                  <div className="listOptionItem">
                    <span className="listOptionText">Min price <small>per night</small></span>
                    <input type="number" className="listOptionInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText">Max price <small>per night</small></span>
                    <input type="number" className="listOptionInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText">Adult</span>
                    <input type="number" className="listOptionInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText">Children</span>
                    <input type="number" className="listOptionInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText">Room</span>
                    <input type="number" className="listOptionInput" />
                  </div>
                  <button>Search</button>
                </div>
              </div>
              { openDate &&
                (<DateRange editableDateInputs={true} onChange={
                item=>setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
            />)}
            </div>
            
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List