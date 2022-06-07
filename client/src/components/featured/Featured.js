import React from "react";
import "./featured.css";

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/654657.webp?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o="
                alt=""
                className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Istanbul</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/654953.webp?k=47b74b729fc3ed233bac96e26aa10d5e853e7630e5e930b10e5529ad46aef7e2&o="
                alt=""
                className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Beirut</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="
                alt=""
                className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Dubai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured