import { useNavigate } from "react-router-dom";
import "./about.css";
import hangoutPic from "./depositphotos_194523752-stock-photo-group-friends-studying-together-finals.jpg";
import logo4 from "./Screenshot_2025-04-01_130639-removebg-preview.png";
export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div
        className="about-background"
        style={{ backgroundImage: `url(${hangoutPic})` }}
      >
        <div className="about-overlay"></div>
      </div>

      <div className="about-content">
        <div className="content-wrapper">
          <h1 className="about-title">ABOUT US</h1>
          <img src={logo4} className="logo4"></img>
          <p className="about-paragraph">
            Tokohappy adalah platform online shopping yang telah hadir sejak
            tahun 1998, memberikan pengalaman belanja yang mudah, cepat, dan
            terpercaya.
          </p>

          <p className="about-paragraph">
            Kami berkomitmen untuk memberikan kemudahan dalam berbelanja dengan
            sistem pembayaran yang aman, pengiriman cepat, serta layanan
            pelanggan responsif.
          </p>

          <button onClick={() => navigate("/login")} className="about-button">
            Back to Login Page
          </button>
        </div>
      </div>
    </div>
  );
}
