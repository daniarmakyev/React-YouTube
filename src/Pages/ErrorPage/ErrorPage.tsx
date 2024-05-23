import React from "react";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>
        <p className={styles.pErr}>
          Sorry, this page is not found in GeeksForGeeks !!!
        </p>
      </div>
      <div>
        <p className={styles.p2Err}>404</p>
      </div>
      <div>
        <a href="/">
          <button className={styles.btnErr}>go to home</button>
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
