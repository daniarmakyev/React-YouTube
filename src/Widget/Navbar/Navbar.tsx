import React, { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <header className={`header`}>


      <section className={`searchPAPA`}>
        <span className={`focusLoopPAPA`} style={{ display: isFocused ? 'inline' : 'none' }}>
          <svg className={`focusLoop`} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" focusable="false" fill='#fff' >
            <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
          </svg>
        </span>

        <input
          type="text"
          className={`search`}
          placeholder='Введите текст'
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

      <svg fill="#ffffff"   className={`keyboard`} viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 6.1959 44.0907 L 49.8239 44.0907 C 53.9281 44.0907 56 42.0386 56 37.9935 L 56 19.0308 C 56 14.9659 53.9281 12.9138 49.8239 12.9138 L 6.1959 12.9138 C 2.0719 12.9138 0 14.9659 0 19.0308 L 0 37.9935 C 0 42.0583 2.0719 44.0907 6.1959 44.0907 Z M 6.2551 40.9138 C 4.2819 40.9138 3.1769 39.8680 3.1769 37.8159 L 3.1769 19.2084 C 3.1769 17.1562 4.2819 16.0906 6.2551 16.0906 L 49.7649 16.0906 C 51.7184 16.0906 52.8232 17.1562 52.8232 19.2084 L 52.8232 37.8159 C 52.8232 39.8680 51.7184 40.9138 49.7649 40.9138 Z M 46.3117 23.6678 L 47.7128 23.6678 C 48.2850 23.6678 48.5412 23.4113 48.5412 22.8391 L 48.5412 21.4381 C 48.5412 20.8856 48.2850 20.6094 47.7128 20.6094 L 46.3117 20.6094 C 45.7395 20.6094 45.4829 20.8856 45.4829 21.4381 L 45.4829 22.8391 C 45.4829 23.4113 45.7395 23.6678 46.3117 23.6678 Z M 39.9578 23.6678 L 41.3588 23.6678 C 41.9311 23.6678 42.2075 23.4113 42.2075 22.8391 L 42.2075 21.4381 C 42.2075 20.8856 41.9311 20.6094 41.3588 20.6094 L 39.9578 20.6094 C 39.4053 20.6094 39.1289 20.8856 39.1289 21.4381 L 39.1289 22.8391 C 39.1289 23.4113 39.4053 23.6678 39.9578 23.6678 Z M 33.6040 23.6678 L 35.0248 23.6678 C 35.5771 23.6678 35.8536 23.4113 35.8536 22.8391 L 35.8536 21.4381 C 35.8536 20.8856 35.5771 20.6094 35.0248 20.6094 L 33.6040 20.6094 C 33.0515 20.6094 32.7753 20.8856 32.7753 21.4381 L 32.7753 22.8391 C 32.7753 23.4113 33.0515 23.6678 33.6040 23.6678 Z M 27.2700 23.6678 L 28.6710 23.6678 C 29.2432 23.6678 29.4997 23.4113 29.4997 22.8391 L 29.4997 21.4381 C 29.4997 20.8856 29.2432 20.6094 28.6710 20.6094 L 27.2700 20.6094 C 26.6977 20.6094 26.4412 20.8856 26.4412 21.4381 L 26.4412 22.8391 C 26.4412 23.4113 26.6977 23.6678 27.2700 23.6678 Z M 20.9162 23.6678 L 22.3369 23.6678 C 22.8894 23.6678 23.1657 23.4113 23.1657 22.8391 L 23.1657 21.4381 C 23.1657 20.8856 22.8894 20.6094 22.3369 20.6094 L 20.9162 20.6094 C 20.3637 20.6094 20.0874 20.8856 20.0874 21.4381 L 20.0874 22.8391 C 20.0874 23.4113 20.3637 23.6678 20.9162 23.6678 Z M 14.5624 23.6678 L 15.9831 23.6678 C 16.5356 23.6678 16.8119 23.4113 16.8119 22.8391 L 16.8119 21.4381 C 16.8119 20.8856 16.5356 20.6094 15.9831 20.6094 L 14.5624 20.6094 C 14.0099 20.6094 13.7336 20.8856 13.7336 21.4381 L 13.7336 22.8391 C 13.7336 23.4113 14.0099 23.6678 14.5624 23.6678 Z M 8.2283 23.6678 L 9.6293 23.6678 C 10.2016 23.6678 10.4581 23.4113 10.4581 22.8391 L 10.4581 21.4381 C 10.4581 20.8856 10.2016 20.6094 9.6293 20.6094 L 8.2283 20.6094 C 7.6561 20.6094 7.3996 20.8856 7.3996 21.4381 L 7.3996 22.8391 C 7.3996 23.4113 7.6561 23.6678 8.2283 23.6678 Z M 20.9162 30.0216 L 22.3369 30.0216 C 22.8894 30.0216 23.1657 29.7454 23.1657 29.1929 L 23.1657 27.7919 C 23.1657 27.2197 22.8894 26.9631 22.3369 26.9631 L 20.9162 26.9631 C 20.3637 26.9631 20.0874 27.2197 20.0874 27.7919 L 20.0874 29.1929 C 20.0874 29.7454 20.3637 30.0216 20.9162 30.0216 Z M 27.2700 30.0216 L 28.6710 30.0216 C 29.2432 30.0216 29.4997 29.7454 29.4997 29.1929 L 29.4997 27.7919 C 29.4997 27.2197 29.2432 26.9631 28.6710 26.9631 L 27.2700 26.9631 C 26.6977 26.9631 26.4412 27.2197 26.4412 27.7919 L 26.4412 29.1929 C 26.4412 29.7454 26.6977 30.0216 27.2700 30.0216 Z M 33.6040 30.0216 L 35.0248 30.0216 C 35.5771 30.0216 35.8536 29.7454 35.8536 29.1929 L 35.8536 27.7919 C 35.8536 27.2197 35.5771 26.9631 35.0248 26.9631 L 33.6040 26.9631 C 33.0515 26.9631 32.7753 27.2197 32.7753 27.7919 L 32.7753 29.1929 C 32.7753 29.7454 33.0515 30.0216 33.6040 30.0216 Z M 39.9578 30.0216 L 41.3588 30.0216 C 41.9311 30.0216 42.2075 29.7454 42.2075 29.1929 L 42.2075 27.7919 C 42.2075 27.2197 41.9311 26.9631 41.3588 26.9631 L 39.9578 26.9631 C 39.4053 26.9631 39.1289 27.2197 39.1289 27.7919 L 39.1289 29.1929 C 39.1289 29.7454 39.4053 30.0216 39.9578 30.0216 Z M 14.5624 30.0216 L 15.9831 30.0216 C 16.5356 30.0216 16.8119 29.7454 16.8119 29.1929 L 16.8119 27.7919 C 16.8119 27.2197 16.5356 26.9631 15.9831 26.9631 L 14.5624 26.9631 C 14.0099 26.9631 13.7336 27.2197 13.7336 27.7919 L 13.7336 29.1929 C 13.7336 29.7454 14.0099 30.0216 14.5624 30.0216 Z M 46.3117 30.0216 L 47.7128 30.0216 C 48.2850 30.0216 48.5412 29.7454 48.5412 29.1929 L 48.5412 27.7919 C 48.5412 27.2197 48.2850 26.9631 47.7128 26.9631 L 46.3117 26.9631 C 45.7395 26.9631 45.4829 27.2197 45.4829 27.7919 L 45.4829 29.1929 C 45.4829 29.7454 45.7395 30.0216 46.3117 30.0216 Z M 8.2283 30.0216 L 9.6293 30.0216 C 10.2016 30.0216 10.4581 29.7454 10.4581 29.1929 L 10.4581 27.7919 C 10.4581 27.2197 10.2016 26.9631 9.6293 26.9631 L 8.2283 26.9631 C 7.6561 26.9631 7.3996 27.2197 7.3996 27.7919 L 7.3996 29.1929 C 7.3996 29.7454 7.6561 30.0216 8.2283 30.0216 Z M 14.5624 36.3754 L 41.3588 36.3754 C 41.9311 36.3754 42.2075 36.0992 42.2075 35.5467 L 42.2075 34.1259 C 42.2075 33.5735 41.9311 33.2972 41.3588 33.2972 L 14.5624 33.2972 C 14.0099 33.2972 13.7336 33.5735 13.7336 34.1259 L 13.7336 35.5467 C 13.7336 36.0992 14.0099 36.3754 14.5624 36.3754 Z M 46.3117 36.3754 L 47.7128 36.3754 C 48.2850 36.3754 48.5412 36.0992 48.5412 35.5467 L 48.5412 34.1259 C 48.5412 33.5735 48.2850 33.2972 47.7128 33.2972 L 46.3117 33.2972 C 45.7395 33.2972 45.4829 33.5735 45.4829 34.1259 L 45.4829 35.5467 C 45.4829 36.0992 45.7395 36.3754 46.3117 36.3754 Z M 8.2283 36.3754 L 9.6293 36.3754 C 10.2016 36.3754 10.4581 36.0992 10.4581 35.5467 L 10.4581 34.1259 C 10.4581 33.5735 10.2016 33.2972 9.6293 33.2972 L 8.2283 33.2972 C 7.6561 33.2972 7.3996 33.5735 7.3996 34.1259 L 7.3996 35.5467 C 7.3996 36.0992 7.6561 36.3754 8.2283 36.3754 Z"></path></g></svg>

        <button className={`searchLoop`}>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" fill='#fff' >
            <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
          </svg>
        </button>
      </section>

      <svg className={`addVideo`} xmlns="http://www.w3.org/2000/svg" fill='#fff' height="24"  viewBox="0 0 24 24" width="24" focusable="false">
        <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
      </svg>
    </header>
  );
};


export default Navbar;

