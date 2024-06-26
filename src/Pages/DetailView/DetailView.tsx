import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import {
  ProfileType,
  VideoType,
  useAppDispatch,
  useAppSelector,
} from "../../helpers/types";
import { getVideoById } from "../../Store/Videos/Videos.action";
import { getOneUser } from "../../Store/Users/User.action";
import styles from "./Detail.module.css";

const DetailView = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state.videos);
  const { user } = useAppSelector((state) => state.users);

  const [videos, setVideos] = useState<VideoType>({
    title: "",
    description: "",
    likes_count: "",
    uploaded_at: "",
    file: "",
  });

  const [userr, setUser] = useState<ProfileType>({
    first_name: "",
    last_name: "",
    profile_picture: "",
    email: "",
    subs_count: 0,
  });

  const [loading, setLoading] = useState<boolean>(true);

  const fileUrl = useMemo(() => {
    if (!video) {
      console.log("Video object is undefined");
      return undefined;
    }

    if (typeof video.file === "string") {
      console.log("Video file is a string:", video.file);
      return video.file;
    }

    if (video.file && video.file instanceof File) {
      const url = URL.createObjectURL(video.file);
      console.log("Video file is a File:", url);
      return url;
    }

    console.log("Video file is not a valid type or is undefined:", video.file);
    return undefined;
  }, [video]);

  useEffect(() => {
    if (id) {
      dispatch(getVideoById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (video?.owner) {
      dispatch(getOneUser(video.owner.toString()));
    }
  }, [dispatch, video?.owner]);
  useEffect(() => {
    if (video && Object.keys(video).length !== 0) {
      setVideos({
        title: video.title || "",
        description: video.description || "",
        likes_count: video.likes_count || "",
        uploaded_at: video.uploaded_at || "",
        file: video.file || "",
      });
    }
  }, [video]);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  useEffect(() => {
    if (Object.keys(videos).length !== 0 && Object.keys(userr).length !== 0) {
      setLoading(false);
    }
  }, [videos, userr]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`mainContent ${styles.mainContent}`}>
      <section>
        {fileUrl ? (
          <ReactPlayer
            className="react-player fixed-bottom"
            url={fileUrl}
            width="90%"
            height="100%"
            style={{ borderRadius: "20px" }}
            controls={true}
          />
        ) : (
          <p>Видео недоступно</p>
        )}
        <h3 className={styles.title}>{videos.title}</h3>
        <section className={styles.userSection}>
          {userr.profile_picture ? (
            typeof userr.profile_picture === "string" ? (
              <img
                className={styles.avatar}
                src={userr.profile_picture}
                alt="User avatar"
              />
            ) : (
              <span>Фотография профиля недоступна</span>
            )
          ) : (
            <h1>Нет данных о пользователе</h1>
          )}
          <section>
            <h3>{userr.first_name ? userr.first_name : "Вы"}</h3>
            <p>Подписчики: {userr.subs_count}</p>
          </section>
        </section>
        <p>{videos.description}</p>
        <p>Лайки: {videos.likes_count}</p>
      </section>
    </div>
  );
};

export default DetailView;
