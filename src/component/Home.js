import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };
  const handleOnClick = () => {
    localStorage.setItem("username", userName);
    history.push("/templatelist");
  };
  return (
    <>
      <section id="home">
        <h1>
          Hello I'm Email <span className="signatureIcon">🖋</span>
        </h1>
        <input
          type="text"
          placeholder="what's your name?"
          value={userName}
          onChange={handleChange}
        />

        <button className="btn" onClick={handleOnClick}>
          Next
        </button>
      </section>
    </>
  );
};

export default Home;
