import React from "react";
import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList.js";
import Footer from "../../components/footer/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const images = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/134171873.jpg?k=6634177e2a2c454c9ca4609045572e10918a02d1dc9fd0480472a55accf4b5c3&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/134171610.jpg?k=6f648e83c716bcc02290d0449619c6ac73ed16a43ad77d168fb05e5c96483e5f&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/134171768.jpg?k=3b8f8b9da994d34ca8a629fbe60bba4e243f21620a784762ed7e5097940df1a3&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/134171556.jpg?k=f10ad3587638400a0d0874b14d3bed7a79853076c2c3001114e124593329a02b&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/134171522.jpg?k=4a65fb5b00842b74f2593366ead2b451a9bce372d6001cb96572ae72952ca5b0&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/134171567.jpg?k=928dbdc702d2504f1c5a013d2cfdec9f44411f6392b0dd4c3dd8b1e1ae955b4d&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/134171647.jpg?k=dfae644974b85eedc234325d04e2699f088ef99fb3f829ccb0159d95d0bf9fb0&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/133817403.jpg?k=9bd16526b50deef10a7fb9a9093df8f0c1a64d31cc7c7140a84057371f9feffe&o=&hp=1"
    },
  ];


  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Orient Queen Homes Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>John Kennedy Street, Ras Beirut, 1107 Beirut, Lebanon</span>
          </div>
          <span className="hotelDistance">1km - from Airport</span>
          <span className="hotelPriceHighLight">Book now for $100 and get a free airport taxi</span>
          <div className="hotelImages">
            {images.map(image=>(
              <div className="hotelImgWrapper">
                <img src={image.src}
                    alt=""
                    className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of Beirut</h1>
                <p className="hotelDesc">This property is 2 minutes walk from the beach. The Orient Queen is an apartment hotel conveniently located in the heart of Beirut, just a short walk from Hamra and Bliss Streets. The American University of Beirut is 5 minutes' walk from the hotel. The property is a 5 minute drive and a 10 minute walk from Horeca.
                All guest rooms at Orient Queen Homes include an LCD satellite TV.
                A large buffet breakfast is served every morning in the hotel’s restaurant, which offers local and international specialties for lunch and dinner. There are several other restaurants within a few minutes’ walk of the hotel.
                The Pigeon Rocks in the Mediterranean are 1.5 mi away, and the Roman Baths less than 10 minutes’ walk away.
                Orient Queen Homes is located 5.6 mi from Beirut International Airport.
                Solo travelers in particular like the location – they rated it 8.5 for a one-person stay.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 5 night stay!</h1>
                <span>Located in the heart of Beirut, this property has an excellent location score of 7.5!</span>
                <h2>
                  <b>$500</b> (5 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel