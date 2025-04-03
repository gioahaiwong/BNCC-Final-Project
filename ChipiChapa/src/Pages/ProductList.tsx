import "./productlist.css";
import "./background.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./Screenshot_2025-04-01_124037-removebg-preview.png";
type Product = {
  images: string[];
  price: number;
  title: string;
};

export default function ProductList() {
  const [cart, setCart] = useState<Product[]>([]);
  const [data, setData] = useState<Product[]>([]);
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const location = useLocation();
  const username = location.state?.username || "";
  useEffect(function () {
    async function fetchData() {
      try {
        const rest = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await rest.json();

        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      className="background-cover"
      style={{
        backgroundColor: "white",
        position: "relative",
        height: "100%",
      }}
    >
      <img className="logo-picture2" src={logo}></img>
      <div className="product-list-container">
        {data.map(function (product) {
          return (
            <div>
              <img className="image-font" src={product.images[0]} alt={logo} />
              <p className="title-text2">{product.title}</p>
              <p className="price-text">${product.price}.00</p>
              <p
                className="addCart"
                onClick={function () {
                  setCart((cart) => {
                    return [...cart, product];
                  });
                }}
              >
                Add to Trolley
              </p>
            </div>
          );
        })}
      </div>
      <div className="cart-container">
        <p className="cart-title-text">My Cart</p>
        {cart.map(function (item) {
          return (
            <div className="list-product-container">
              <p className="item-title">{item.title}</p>
              <p className="item-price">${item.price}.00</p>
            </div>
          );
        })}
        <p className="total-price">Total: ${totalPrice}.00</p>
        <p
          className="checkout-bar"
          onClick={function () {
            navigate("/checkout-list", { state: { totalPrice, username } });
          }}
        >
          CheckOut
        </p>
      </div>
    </div>
  );
}
