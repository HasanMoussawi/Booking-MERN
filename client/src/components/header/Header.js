import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faPlane, faTaxi, faBagShopping, faPerson, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Header = ({type}) => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const navigate = useNavigate();
    const [destination, setDestination] = useState("");
    const [options, setOptions] = useState(
        {
            adult:1,
            children:0,
            room:1
        }
    )
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    const handleOptions = (name, operation)=>{
        setOptions((prev)=>{
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            };
        })
    }

    const handleSearch = () => {
        navigate("/hotels", {state: {destination, date, options}})
    }

  return (
    <div className="header">
        <div className={ type === "list" ? "headerContainer listMode" : "headerContainer" }>
            <div className="headerList">
                <div className="headerListItem active" >
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBagShopping} />
                    <span>Attractions</span>
                </div>
            </div>
            { type !== "list" &&
                <>
                    <h1 className="headerTitle">A lifetime of discounts? it's Genius.</h1>
                    <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking.com account</p>
                    <button className="headerBtn">Sign in / Register</button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                            <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={(e)=>setDestination(e.target.value)}/>
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                            <span onClick={ ()=>setOpenCalendar(!openCalendar)} className="headerSearchText">
                            {`
                                ${format(date[0].startDate, "MM/dd/yyyy")} 
                                to 
                                ${format(date[0].endDate, "MM/dd/yyyy")}
                            `}</span>
                            {openCalendar &&
                            <DateRange editableDateInputs={true} onChange={
                                item=>setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />
                            }
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                            <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                            {openOptions &&
                                <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={()=>handleOptions("adult", "d")} disabled={options.adult <=1}>-</button>
                                        <span className="optionCountNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOptions("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={()=>handleOptions("children", "d")} disabled={ options.children <=1 }>-</button>
                                        <span className="optionCountNumber">{options.children}</span>
                                        <button tton className="optionCounterButton" onClick={()=>handleOptions("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={()=>handleOptions("room", "d")} disabled={ options.room <=1 }>-</button>
                                        <span className="optionCountNumber">{options.room}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOptions("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerBtn" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </>
        }
        </div>
    </div>  
    )
}

export default Header