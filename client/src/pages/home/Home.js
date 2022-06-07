import React from "react";
import Featured from "../../components/featured/Featured.js";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.js";
import Footer from "../../components/footer/Footer.js";
import Header from "../../components/header/Header.js";
import MailList from "../../components/mailList/MailList.js";
import Navbar from "../../components/navbar/Navbar.js";
import PropertyList from "../../components/propertyList/PropertyList.js";
import "./home.css";


function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer/>
        </div> 
    </div>
  )
}

export default Home