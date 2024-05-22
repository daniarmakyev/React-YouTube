import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/types";
import { getCurrentUser, loginUser } from "../../Store/Users/User.action";
import styles from "./Auth.module.css";
import Input from "../../components/Input/Input";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(loginUser({ data: user, navigate }));
  }

  return (
    <div className={`${styles.container} mainContent`}>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <h2 className="text-xl">Вход</h2>
        {Object.keys(user).map((item) => (
          <Input
            onChange={handleChange}
            name={item}
            key={item}
            type="text"
            placeholder={item}
          />
        ))}
        {error && <h2 className="text-red-500">{error}</h2>}
        <button className={styles.button}>Войти</button>
        <Link className={styles.linkRegister} to={'/register'}>У вас нет аккаунта? Создайте его прямо сейчас! </Link>
      </form>
    </div>
  );
};

export default LoginPage;