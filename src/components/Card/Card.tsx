import React, { FC, useEffect, useState } from "react";
import styles from "./Card.module.css";
import { VideoType, ProfileType } from "../../helpers/types";
import { useAppDispatch } from "../../helpers/types";
import { getOneUser } from "../../Store/Users/User.action";
import { Link } from "react-router-dom";
const Card: FC<{ video: VideoType }> = ({ video }) => {
  const dispatch = useAppDispatch();
  const [owner, setOwner] = useState<ProfileType | null>(null);

  useEffect(() => {
    const fetchOwner = async () => {
      const action = await dispatch(getOneUser(video.owner + ""));
      if (getOneUser.fulfilled.match(action) && action.payload !== undefined) {
        setOwner(action.payload);
      }
    };

    fetchOwner();
  }, [dispatch, video.owner]);

  const title = video.title;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const formatDate = (date: string | Date): string => {
    if (date instanceof Date) {
      return date.toLocaleDateString();
    }
    return date.substring(0, 10);
  };

  return (
    <section className={styles.card}>
      {video.thumbnail ? (
        typeof video.thumbnail === "string" ? (
          <Link to={`/detailView/${video.id}`}>
            {" "}
            <img className={styles.preview} src={video.thumbnail} alt="Preview" />
          </Link>
        ) : (
          <Link to={`/detailView/${video.id}`}>
            <img
              className={styles.preview}
              src={URL.createObjectURL(video.thumbnail)}
              alt="Preview"
            />
          </Link>
        )
      ) : (
        <Link to={`/detailView/${video.id}`}>
          {" "}
          <img
            className={styles.preview}
            src="https://kz-namepics.ru/imgbig/9784.jpg"
            alt="Preview"
          />
        </Link>
      )}
      <div className={styles.info}>
        <img
          className={styles.avatar}
          src={
            owner?.profile_picture
              ? owner?.profile_picture + ""
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREBdJgav-2yogNDhwSECTfQh59Ar6EPozz3WkTUEY-g&s"
          }
          alt="Avatar"
        />
        <div className="">
          <h3 className="font-semibold">{truncateText(title!, 43)}</h3>
          <span className="text-base text-neutral-500">
            {owner ? owner.first_name : "Loading..."},{" "}
          </span>
          <span className="text-sm text-neutral-500">
            322 тыс. просмотров · {formatDate(video.uploaded_at!)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Card;
