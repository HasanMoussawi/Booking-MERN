import React from "react";
import "./searchItem.css";

const SearchItem = () => {

  return (
    <div className="searchItem">
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/232811615.jpg?k=e486768b616f77c06b05e5a237a538b92d0f00656e218aed6e43c1b0893b547c&o="
            alt=""
            className="searchItemImg"
        />
        <div className="searchItemDesc">
            <h1 className="searchItemTitle">Orient Queen Homes Hotel</h1>
            <span className="searchItemDistance">1Km from airport</span>
            <span className="searchItemTaxi">Airport taxi - Free</span>
            <span className="searchItemSubtitle">Travel Sustainable property</span>
            <span className="searchItemFeatures">1 Bathroom 1 masterBed 30m<sup>2</sup></span>
            <span className="searchItemCancel">Free Cancelation</span>
            <span className="searchItemCancelSubtitle">You can cancel later, reserve today for a good price!</span>
        </div>
        <div className="searchItemDetails">
            <div className="searchItemRating">
                <span>Very Good</span>
                <button>7.5</button>
            </div>
            <div className="searchItemDetailTexts">
                <span className="searchItemPrice">$100</span>
                <span className="searchItemTax">Includes taxes and fees</span>
                <button className="searchItemAvailBtn">See Availability</button>
            </div>
        </div>
    
    </div>
  )
}

export default SearchItem