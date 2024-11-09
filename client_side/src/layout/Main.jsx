import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../src/App.css";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const Main = () => {
  return (
    <div className="bg-prigmayBG">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
