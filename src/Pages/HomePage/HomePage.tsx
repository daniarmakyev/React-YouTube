import React, { useEffect } from 'react';
import axios from 'axios';
import styles from './homePage.module.css';
import Card from '../../components/Card/Card';

const HomePage = () => {

  return (
    <main className={`mainContent ${styles.mainContent}`}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      <Card/>
      <Card/>
      <Card/>


      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </main>
  );
}

export default HomePage;
