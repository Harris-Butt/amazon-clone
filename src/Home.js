import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          {
            <Product
              title="The Lean Startup"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              rating={5}
            />
          }
          {
            <Product
              title="SAMSUNG 55-inch Class QLED"
              price={18.79}
              image="data:image/webp;base64,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"
              rating={5}
            />
          }
        </div>

        <div className="home__row">
          {
            <Product
              title="Grokking Algorithms"
              price={18.79}
              image="https://images-na.ssl-images-amazon.com/images/I/51cV560hqBL._SX396_BO1,204,203,200_.jpg"
              rating={5}
            />
          }
          {
            <Product
              title="Viking Revolution Beard Care Kit for Men"
              price={18.79}
              image="https://images-na.ssl-images-amazon.com/images/I/91AE-72kxfL._SL1500_.jpg"
              rating={5}
            />
          }
          {
            <Product
              title="Torjan Horses"
              price={18.79}
              image="https://images-na.ssl-images-amazon.com/images/I/61By0A78n%2BL._SL1081_.jpg"
              rating={5}
            />
          }
        </div>

        <div className="home__row">
          {
            <Product
              title="The Planets"
              price={2.79}
              image="https://images-na.ssl-images-amazon.com/images/I/51xHDq1ORXL._SX413_BO1,204,203,200_.jpg"
              rating={4}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
