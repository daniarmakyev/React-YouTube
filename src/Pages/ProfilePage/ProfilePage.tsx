import React, { useEffect, useState } from 'react';
import styles from "./Profile.module.css";
import { useAppDispatch, useAppSelector } from '../../helpers/types';
import { getOneUser } from '../../Store/Users/User.action';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const id = localStorage.getItem('currentUser');
  const { user, loading } = useAppSelector(state => state.users);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string>('');

  useEffect(() => {
    if (id) {
      dispatch(getOneUser(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (user?.profile_picture) {
      if (typeof user.profile_picture === 'string') {
        setProfilePictureUrl(user.profile_picture);
      } else if (user.profile_picture instanceof File) {
        setProfilePictureUrl(URL.createObjectURL(user.profile_picture));
      }
    }
  }, [user]);

  const emailWithoutDomain = user?.email?.split('@')[0] || '';

  

  if (loading) {
    return <div className="mainContent">Загрузка...</div>;
  }

  return (
    <div className='mainContent'>
      <div className={`${styles.profu} flex gap-5`}>
        <img
          className={styles.avatar}
          src={profilePictureUrl || "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png"}
          alt="avatar"
        />
        <div className='flex gap-y-2 flex-col'>
          <div className='text-4xl font-semibold flex gap-3'>
            <h1>{user?.first_name || 'Имя'}</h1>
            <h1>{user?.last_name || 'Фамилия'}</h1>
          </div>
          <p className='text-neutral-400'>
            {emailWithoutDomain} / {user?.subs_count || 0}
          </p>
          <span className='text-neutral-400'>Подробнее о канале {'>'}</span>
          <section className={`${styles.buttons} mt-1`}>
            <button className='text-sm'>
              <Link to={'/editProfile'}>Настроить вид канала</Link>
            </button>
            <button>Управление канала</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


