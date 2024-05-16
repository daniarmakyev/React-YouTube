import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={`${styles.header} header`}>
      <section>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 28 28"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
            fill="#fff"
          />
          <path
            d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
            fill="#fff"
          />
          <path
            d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
            fill="#fff"
          />
        </svg>
        <img src={require("../../images/Logo.png")} alt="Logo" />
      </section>

      <input type="text" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
      >
        <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
      </svg>
    </header>
  );
};

export default Navbar;
