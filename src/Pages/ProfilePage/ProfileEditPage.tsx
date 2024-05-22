import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { editOneUser, getOneUser } from '../../Store/Users/User.action';
import { ProfileType, useAppDispatch, useAppSelector } from '../../helpers/types';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import styles from "./Profile.module.css"

const ProfileEditPage = () => {   
  const [users, setUser] = useState<ProfileType>({
    first_name: '',
    last_name: '',
    profile_picture: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.users);
  const id = localStorage.getItem('currentUser');

  useEffect(() => {
    if (id) {
      dispatch(getOneUser(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (name === "profile_picture" && files) {
      setUser({ ...users, [name]: files[0] });
    } else {
      setUser({ ...users, [name]: value });
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id) {
      const formData = new FormData();
      formData.append("first_name", users.first_name);
      formData.append("last_name", users.last_name);
      if (users.profile_picture instanceof File) {
        formData.append("profile_picture", users.profile_picture);
      }
      dispatch(editOneUser({ id: Number(id), newData: formData }));
      navigate('/')
    }
  }

  return (
    <div className="mainContent">
            <form onSubmit={handleSubmit} className={styles.editFrom}>
      <h2>Edit Profile</h2>
      <Input
        onChange={handleChange}
        name="first_name"
        value={users.first_name}
        placeholder="First Name"
      />
      <Input
        onChange={handleChange}
        name="last_name"
        value={users.last_name}
        placeholder="Last Name"
      />
      <Input
        accept="image/*"
        onChange={handleChange}
        name="profile_picture"
        type="file"
        placeholder="Profile Picture"
      />
      <button>Изменить профиль</button>
    </form>
    </div>
  );
}

export default ProfileEditPage;
