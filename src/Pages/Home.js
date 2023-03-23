import React, { useState } from "react";
import "../App.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import UserOne from "./UserOne";
import UserTwo from "./UserTwo";
import UserThree from "./UserThree";
import UserFour from "./UserFour";

const Home = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="container">

        <Header setUser={setUser} />
        {user ? (
          <>
            {user === "select" && <UserFour/>}
            {user === "1" && <UserOne />}
            {user === "2" && <UserTwo />}
            {user === "3" && <UserThree />}
            {user === "4" && <UserFour />}
          </>
        ) : (
          <UserFour />
        )}
        <Footer />
  
    </div>
  );
};

export default Home;
