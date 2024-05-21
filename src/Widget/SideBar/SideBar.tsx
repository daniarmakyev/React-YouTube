import React, { useState, useRef, useEffect } from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import styles from "./SideBar.module.css";
import classNames from 'classnames';
import { Link } from "react-router-dom";

const SideBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target as Node)
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };


  return (
    <>
      <aside className={`${styles.sideBar} sidebar`}>
        <section className={styles.leftHeader}>
        <svg ref={menuBtnRef}
              onClick={toggleMenu}  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"  viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
          <Link to={'/'}><img src={require("../../images/Logo.png")} alt="Logo" /></Link>
        </section>
        <div className={styles.sidebar_items}>
          <div className={styles.item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/home.svg"
              alt="home_logo"
            />
            <span>Home</span>
          </div>

          <div className={styles.item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/shorts.svg"
              alt="shorts_logo"
            />
            <span>Shorts</span>
          </div>

          <div className={styles.item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/subscription.svg"
              alt="subscriptions_logo"
            />
            <span>Subscriptions</span>
          </div>

          <div className={styles.item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/library.svg"
              alt="library_logo"
            />
            <span>Library</span>
          </div>
        </div>
      </aside>
      <div
        id={styles.menu}
        className={classNames(styles.menu, { [styles.visible]: menuVisible })}
        ref={menuRef}
      >
        <div className={styles.menu_header}>
          <div
            className={styles.menu_btn}
            onClick={toggleMenu}
          >
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/menu.svg"
              alt="menu-icon"
            />
          </div>
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/youtube.svg"
              alt="youtube-logo"
            />
          </a>
        </div>

        <div className={styles.menu_group}>
          <div className={styles.menu_item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/home.svg"
              alt="home"
            />
            <span>Home</span>
          </div>

          <div className={styles.menu_item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/shorts.svg"
              alt="shorts"
            />
            <span>Shorts</span>
          </div>
          <div className={styles.menu_item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/subscription.svg"
              alt="subscriptions"
            />
            <span>Subscriptions</span>
          </div>
        </div>

        <div className={styles.menu_group}>
          <div className={styles.menu_item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/library.svg"
              alt="library"
            />
            <span>Library</span>
          </div>
          <div className={styles.menu_item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/history.svg"
              alt="history"
            />
            <span>History</span>
          </div>
          <div className={styles.menu_item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/videos.svg"
              alt="your_videos"
            />
            <span>Your Videos</span>
          </div>
          <div className={styles.menu_item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/watch-later.svg"
              alt="watch_later"
            />
            <span>Watch Later</span>
          </div>
          <div className={styles.menu_item}>
            <img
              src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/liked.svg"
              alt="liked_videos"
            />
            <span>Liked Videos</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;