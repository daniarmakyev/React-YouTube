import React, { useEffect } from 'react';
import styles from './homePage.module.css';
import Card from '../../components/Card/Card';
import { VideoType, useAppDispatch, useAppSelector } from '../../helpers/types';
import { getVideos } from '../../Store/Videos/Videos.action';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { loading, videos } = useAppSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(getVideos());

    
  }, [dispatch]);

  if(videos){
    console.log(videos);
  }

  return (
    <main className={`mainContent ${styles.mainContent}`}>

          {videos?.map((item: VideoType) => (
            <Card video={item} key={item.id} />
          ))}
    </main>
  );
}

export default HomePage;
