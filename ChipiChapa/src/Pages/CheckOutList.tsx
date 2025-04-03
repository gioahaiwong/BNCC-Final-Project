import "./checkout.css";
import "./background.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import picture from "./arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import logo from "./Screenshot_2025-04-01_124037-removebg-preview.png";
export default function CheckOutList() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;
  const [username, setUsername] = useState(location.state?.username || "");
  const [name, setName] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [rekening, setRekening] = useState("");
  const handleConfirmCheckout = () => {
    alert(`Transaction Success by ${name} with total price $${totalPrice}.00`);
    navigate("/about");
  };
  return (
    <div
      className="background-cover"
      style={{
        backgroundImage: `url(${picture})`,
      }}
    >
      <div className="checkout-container">
        <h1 className="title-text-container">CHECKOUT</h1>
        <img src={logo} className="logo-picture3"></img>
        <div className="form-container">
          <p className="input-title">Username</p>
          <input
            onChange={function (e) {
              setUsername(e.target.value);
            }}
            value={username}
            className="input-style"
            placeholder="Username"
            type="text"
          ></input>
          <p className="input-title">Full Name</p>
          <input
            onChange={function (e) {
              setName(e.target.value);
            }}
            value={name}
            className="input-style"
            placeholder="Name"
            type="text"
          ></input>
          <p className="input-title">Home Address</p>
          <input
            onChange={function (e) {
              setHomeAddress(e.target.value);
            }}
            value={homeAddress}
            className="input-style"
            placeholder="Address Home"
            type="text"
          ></input>
          <p className="input-title">Phone Number</p>
          <input
            onChange={function (e) {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
            className="input-style"
            placeholder="+62........."
            type="text"
          ></input>
          <p className="input-title">Email Address</p>
          <input
            onChange={function (e) {
              setEmailAddress(e.target.value);
            }}
            value={emailAddress}
            className="input-style"
            placeholder="tommy@gmail.com"
            type="email"
          ></input>
          <p className="input-title">No. Rek</p>
          <input
            onChange={function (e) {
              setRekening(e.target.value);
            }}
            value={rekening}
            className="input-style"
            placeholder="Only Numbers....."
            type="number"
          ></input>
        </div>
        <p onClick={handleConfirmCheckout} className="checkout-button">
          Confirm Checkout
        </p>
      </div>
    </div>
  );
}
