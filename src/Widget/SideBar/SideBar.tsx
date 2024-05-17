import React, { useState, useRef, useEffect } from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import styles from "./SideBar.module.css";
import classNames from 'classnames';

const SideBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<SVGSVGElement>(null); // Corrected type here

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
          <svg
            className={styles.menu_btn}
            ref={menuBtnRef}
            onClick={toggleMenu}
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