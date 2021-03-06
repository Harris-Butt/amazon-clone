import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = (e) => {};
  const handleChange = (e) => {};
  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payement__address">
              <p>{user?.email}</p>
              <p>123 Street</p>
              <p>LosAngeles, CA</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review Items and Delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
