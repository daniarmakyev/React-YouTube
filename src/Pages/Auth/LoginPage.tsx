import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/types";
import { loginUser } from "../../Store/Users/User.action";
import styles from "./Auth.module.css"
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

    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login form</h2>
        {error && <h2 style={{ color: "red" }}>{error}!!!</h2>}
        {Object.keys(user).map((item) => (
          <Input
            onChange={handleChange}
            name={item}
            key={item}
            type="text"
            placeholder={item}
          />
        ))}
        <button className={styles.button}>Sign in</button>
      </form>
    </div>

  );

};

export default LoginPage;
