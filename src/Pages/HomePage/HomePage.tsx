import React, { useEffect } from 'react';
import axios from 'axios';
import styles from './homePage.module.css';
import Card from '../../components/Card/Card';
import { useAppDispatch, useAppSelector } from '../../helpers/types';
import { getVideos } from '../../Store/Videos/Videos.action';

const HomePage = () => {

  const dispatch = useAppDispatch()
  const {videos} = useAppSelector(state => state.videos)
  useEffect(() => {
    dispatch(getVideos())
  },[])

  if(videos){
    console.log(videos);
    
  }

  return (
    <main className={`mainContent ${styles.mainContent}`}>
        
    </main>
  );
}

export default HomePage;
