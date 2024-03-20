import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Home.module.css";
const Home = (props) => {
  const auth = getAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then((res) => {
        // Sign-out successful.
        console.log("Sign-out successful");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        setErrorMsg(error.message);
      });
  };
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <div className={styles.innerBox}>
        <br />
        <h1>
          <Link to="/Login" className={styles.btn}>
            {" "}
            Login
          </Link>
        </h1>
        <br />
        <h1>
          <Link to="/Signup" className={styles.btn}>
            {" "}
            SignUp
          </Link>
        </h1>
      </div>
      <br />
      <h2> {props.name ? `Welcome : ${props.name}` : "Login Please"}</h2>
      <b className={styles.error}>{errorMsg}</b>
      <br />
      {props.name && (
        <button onClick={handleLogout} className={styles.btn2}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
