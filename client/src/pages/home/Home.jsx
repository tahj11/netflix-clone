import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Login from "../login/Login";
import Register from "../register/Register";
import Watch from "../watch/Watch";
import "./home.scss";

function Home({ type }) {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Watch /> */}
    </div>
  );
}

export default Home;
