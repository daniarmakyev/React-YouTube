import React, { ChangeEvent, FC } from "react";
import styles from "./input.module.css";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  accept?: string;
}

const Input: FC<InputProps> = ({
  onChange,
  name,
  type = "text",
  placeholder,
  value,
  accept,
}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      accept={accept}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default Input;