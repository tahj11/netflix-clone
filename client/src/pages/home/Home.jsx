import React, { useState, useEffect } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Login from "../login/Login";
import Register from "../register/Register";
import Watch from "../watch/Watch";
import "./home.scss";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Tahj eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmI3NGZlYzA2MzQ1NWM5NmZiYjQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzU2NzI1OSwiZXhwIjoxNjczOTk5MjU5fQ.vhKb-pOSD-0QC0BN0Q5LzdJ-jZMZqGrkegr3qaw_E5k",
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}

export default Home;
