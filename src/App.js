import "./App.css";
import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const [{ basket }, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51HotK3EgtoychrLSxW8QX2VIdVCpSJ5dXy3u0lyDMKJPB8QVm06o3jPmUAJORBBFo71HAUb9zUjXxz9ZoGIc7Jt8009Cevy7NK"
  );
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser.email);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: "null",
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
