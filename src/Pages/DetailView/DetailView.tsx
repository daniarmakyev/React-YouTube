import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileType, VideoType, useAppDispatch, useAppSelector } from '../../helpers/types';
import { getVideoById } from '../../Store/Videos/Videos.action';
import styles from "./Detail.module.css";
import { getOneUser } from '../../Store/Users/User.action';

const DetailView = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state.videos);
  const { user } = useAppSelector((state) => state.users);

  const [cleanedHTML, setCleanedHTML] = useState<string>('');
  const [videos, setVideos] = useState<VideoType>({
    title: '',
    description: '',
    likes_count: '',
    uploaded_at: '',
    file: '',
  });

  const [userr, setUser] = useState<ProfileType>({
    first_name: '',
    last_name: '',
    profile_picture: '',
    email: '',
    subs_count: 0,
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getVideoById(id!));
  }, [dispatch, id]);

  useEffect(() => {
    if (video?.owner) {
      dispatch(getOneUser(video.owner + ''));
    }
  }, [dispatch, video?.owner]);

  useEffect(() => {
    if (video && Object.keys(video).length !== 0) {
      setVideos({
        title: video.title || '',
        description: video.description || '',
        likes_count: video.likes_count || '',
        uploaded_at: video.uploaded_at || '',
        file: video.file || '',
      });
      setLoading(false);
    }
  }, [video]);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`mainContent ${styles.mainContent}`}>
      
      <section>
        <h3 className={styles.title}>{videos.title}</h3>
        <video src={videos.file && ''}></video>
        <section className={styles.userSection}>
          {userr.profile_picture ? (
            typeof userr.profile_picture === 'string' ? (
              <img className={styles.avatar} src={userr.profile_picture} alt="" />
            ) : (
              <span>Profile picture is not available</span>
            )
          ) : (
            <h1>Пусто</h1>
          )}
          <section>
            <h3>{userr.first_name ? userr.first_name : "Вы"}</h3>
            {user && user.subs_count !== undefined ? (
              <p>{user.subs_count}</p>
            ) : (
              <span>Ноль</span>
            )}
          </section>
        </section>
        <p>{videos.description}</p>
        <p>Likes: {videos.likes_count}</p>
      </section>
    </div>
  );
};

export default DetailView;
