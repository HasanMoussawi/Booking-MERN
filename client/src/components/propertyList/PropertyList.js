import React from "react";
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="propList">
        <div className="propListItem">
            <img className="propListImg"
                src="https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                alt=""
            />
            <div className="propListTitles">
                <h1>Hotels</h1>
                <h2>865,362 hotels</h2>
            </div>
        </div>
        <div className="propListItem">
            <img className="propListImg"
                src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                alt=""
            />
            <div className="propListTitles">
                <h1>Apartments</h1>
                <h2>846,628 apartments</h2>
            </div>
        </div>
        <div className="propListItem">
            <img className="propListImg"
                src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                alt=""
            />
            <div className="propListTitles">
                <h1>Resorts</h1>
                <h2>17,992 resorts</h2>
            </div>
        </div>
        <div className="propListItem">
            <img className="propListImg"
                src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                alt=""
            />
            <div className="propListTitles">
                <h1>Villas</h1>
                <h2>447,377 villas</h2>
            </div>
        </div>
        <div className="propListItem">
            <img className="propListImg"
                src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                alt=""
            />
            <div className="propListTitles">
                <h1>Cabins</h1>
                <h2>34,429 cabins</h2>
            </div>
        </div>
        <div className="propListItem">
            <img className="propListImg"
                src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"
                alt=""
            />
            <div className="propListTitles">
                <h1>Cottages</h1>
                <h2>147,242 cottages</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList