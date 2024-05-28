import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from "./AddVideo.module.css";
import Input from '../../components/Input/Input';
import { VideoType, useAppDispatch, useAppSelector } from '../../helpers/types';
import { useNavigate } from 'react-router-dom';
import { getOneUser } from '../../Store/Users/User.action';
import { postVideos } from '../../Store/Videos/Videos.action';

const AddVideoPage = () => {
  const id = localStorage.getItem('currentUser');
  const [users, setUser] = useState<VideoType>({
    title: '',
    description: '',
    file: '',  
    thumbnail: '',
    owner: parseInt(id + '', 10),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (id) {
      dispatch(getOneUser(id));
    }
  }, [dispatch, id]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setUser({ ...users, [name]: files[0] });
    } else {
      setUser({ ...users, [name]: value });
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id) {
      const formData = new FormData();
      formData.append("title", users.title!);
      formData.append("description", users.description!);
      formData.append("owner", id);
      if (users.file instanceof File) {
        formData.append("file", users.file);
      }
      if (users.thumbnail instanceof File) {
        formData.append("thumbnail", users.thumbnail);
      }
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      try {
        await dispatch(postVideos({ newData: formData }));
        console.log('Видео успешно загружено');
        navigate('/');
      } catch (error) {
        console.error("Ошибка при загрузке видео:", error);
      }
    }
  }

  return (
    <div className="mainContent">
      <form onSubmit={handleSubmit} className={styles.editForm} encType="multipart/form-data">
        <h2>Добавление</h2>
        <Input
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <Input
          onChange={handleChange}
          name="description"
          placeholder="Description"
        />
        <Input
          accept="video/*"
          onChange={handleChange}
          name="file"
          type="file"
          placeholder="Video link"
        />
        <Input
          accept="image/*"
          onChange={handleChange}
          name="thumbnail"
          type="file"
          placeholder="Thumbnail"
        />
        <button type="submit">Добавить видео</button>
      </form>
    </div>
  );
};

export default AddVideoPage;
