import React from 'react';
import styles from "./Card.module.css";

const Card = () => {
  const title = "Признание Бекболота Бекназару :3";
  
  // Функция для обрезки текста
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section className={styles.card}>
      <img className={styles.preview} src="https://kz-namepics.ru/imgbig/9784.jpg" alt="" />
      <div className={styles.info}>
        <img className={styles.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREBdJgav-2yogNDhwSECTfQh59Ar6EPozz3WkTUEY-g&s" alt="" />
        <div className="">
          <h3 className='font-semibold'>{truncateText(title, 43)}</h3>
          <span className='text-base text-neutral-500'>Saint father, </span>
          <span className='text-sm text-neutral-500'> 322тыс. просмотров · 28 лет назад</span>
        </div>
      </div>
    </section>
  );
};

export default Card;

