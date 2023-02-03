import Image from "next/image";
import styles from "../styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { useDispatch } from "react-redux";
import {
  addBookmarksToStore,
  removeBookmarksFromStore,
} from "../reducers/bookmarks";

import { useSelector } from "react-redux";
import { configConsumerProps } from "antd/lib/config-provider";

function Article(props) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.value);

  const [color, setColor] = useState("");

  const addBookmark = (newBookmark) => {
    dispatch(addBookmarksToStore(newBookmark));
  };

  const removeBookmark = (bookmark) => {
    dispatch(removeBookmarksFromStore(bookmark));
  };

  function isContained() {
    return bookmarks.some((b) => b.url === props.url);
  }

  function manageBookmark() {
    if (isContained()) {
      removeBookmark(props);
      setColor("#000000");
    } else {
      addBookmark(props);
      setColor("#E9BE59");
    }
  }

  console.log("IsContained() = " + isContained());
  if (isContained()) console.log("Color = " + color);

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          icon={faBookmark}
          className={styles.bookmarkIcon}
          onClick={() => manageBookmark()}
          style={{ color: color }}
        />
      </div>
      <h4 style={{ textAlign: "right" }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <Image
        src={props.urlToImage}
        alt={props.title}
        width={600}
        height={314}
      />
      <p>{props.description}</p>
    </div>
  );
}

export default Article;
