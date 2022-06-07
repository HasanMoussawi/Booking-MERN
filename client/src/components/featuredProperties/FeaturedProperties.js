import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fProp">
        <div className="fPropItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/613094.webp?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=" 
                alt="" 
                className="fPropImg"
            />
            <span className="fPropName">ABS Hotel</span>
            <span className="fPropCity">London</span>
            <span className="fPropPrice">Starting from 130$</span>
            <div className="fPropRating">
                <button>8.5</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fPropItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=" 
                alt="" 
                className="fPropImg"
            />
            <span className="fPropName">Ibis Hotel</span>
            <span className="fPropCity">Paris</span>
            <span className="fPropPrice">Starting from 90$</span>
            <div className="fPropRating">
                <button>7.5</button>
                <span>Very Good</span>
            </div>
        </div>
    </div>
    
  )
}

export default FeaturedProperties