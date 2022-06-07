import React, { useState } from "react";
import { format } from "date-fns";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faPlane, faTaxi, faBagShopping, faPerson, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function Header(type) {
    const [openCalender, setOpenCalender] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [option, setOption] = useState(
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

    const handleOption = (name, operation)=>{
        setOption((prev)=>{
            return {
                ...prev, [name]: operation === "i" ? option[name] + 1 : option[name] - 1
            };
        })
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
                            <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                            <span onClick={ ()=>setOpenCalender(!openCalender)} className="headerSearchText">
                            {`
                                ${format(date[0].startDate, "MM/dd/yyyy")} 
                                to 
                                ${format(date[0].endDate, "MM/dd/yyyy")}
                            `}</span>
                            {openCalender &&
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
                            <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>
                            {openOptions &&
                                <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={()=>handleOption("adult", "d")} disabled={option.adult <=1}>-</button>
                                        <span className="optionCountNumber">{option.adult}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={()=>handleOption("children", "d")} disabled={ option.children <=1 }>-</button>
                                        <span className="optionCountNumber">{option.children}</span>
                                        <button tton className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={()=>handleOption("room", "d")} disabled={ option.room <=1 }>-</button>
                                        <span className="optionCountNumber">{option.room}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerBtn">Search</button>
                        </div>
                    </div>
                </>
        }
        </div>
    </div>  
    )
}

export default Header