import "./dashboard.css";
import "./background.css";
import logo5 from "./Screenshot_2025-04-01_124037-removebg-preview.png";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div
      className="background-cover2"
      style={{
        backgroundColor: " hsl(69, 12.30%, 88.80%)",
      }}
    >
      <div className="navbar-container">
        <h1 className="navbar-title-text">WELCOME TO ADMIN DASHBOARD</h1>
        <img className="logo5" src={logo5}></img>
        <div className="admin-choices-container">
          <div
            className="square-container"
            onClick={function () {
              navigate("/product-list");
            }}
          >
            Check List Product
          </div>
          <div className="square-container">Add Product</div>
          <div className="square-container">Delete Product</div>
          <div className="square-container">Change Product</div>
          <div
            className="square-container"
            onClick={function () {
              navigate("/login");
            }}
          >
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
}
