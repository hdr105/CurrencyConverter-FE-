import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import CurencySection from "./Components/CurencySection/CurencySection";
import Footer from "./Components/Footer/Footer";
import "./index.css";

const DashBoard = () => {
  return (
    <div
      className="main-container backGround"
      style={{
        
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/backGround.png"
        })`,
        height:'100vh'
      }}
    >
      {/* NavBar.................. */}
      <div>
        <Navbar />
      </div>

      {/* Currency Section........ */}
      <div
      className="exchange-portion-parent"
        style={{
          paddingTop: "14%",
          paddingBottom: "12%",
        }}
      >
        <CurencySection />
      </div>

      {/* footer.................. */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashBoard;
