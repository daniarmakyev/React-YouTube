import React, { ChangeEvent, FormEvent, useState } from 'react'
import { RegisterValues, useAppDispatch, useAppSelector } from '../../helpers/types'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import styles from "./Auth.module.css"
import { registerUser } from '../../Store/Users/User.action';

const RegisterPage = () => {

    const [user, setUser]= useState<RegisterValues>({
        email:'',
        password:'',
        password_confirm:''
    })
    const { error } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(value);
        
      }
    
      function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
    
         for (let key in user) {
           if (!user[key]) {
             alert("Please fill in all fields!");
             return;
           }
         }
    
        if (user.password.length <= 6) {
          alert("Min length of password is 6 symbols");
          return;
        }
    
        if (user.password !== user.password_confirm) {
          alert("Passowrds do not match!");
          return;
        }
        dispatch(registerUser({ data: user, navigate }));
      }
  return (
    <form onSubmit={handleSubmit} className={`${styles.authForm} mainContent`}>
        <h2>Регистрация</h2>
        {Object.keys(user).map((item) => (
        <Input
          onChange={handleChange}
          name={item}
          key={item}
          type="text"
          placeholder={item}
        />
      ))}
      {error && <h1>ОШибка</h1>}
      <button className={styles.authButton}>Регистрация</button>
    </form>
  )
}

export default RegisterPage
