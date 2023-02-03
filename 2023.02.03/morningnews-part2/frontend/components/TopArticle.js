import styles from "../styles/Toparticle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import {
  addBookmarksToStore,
  removeBookmarksFromStore,
} from "../reducers/bookmarks";

import { useSelector } from "react-redux";

let color = "";

function TopArticle(props) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.value);

  const addBookmark = (newBookmark) => {
    dispatch(addBookmarksToStore(newBookmark));
  };

  const removeBookmark = (bookmark) => {
    dispatch(removeBookmarksFromStore(bookmark));
  };

  function manageBookmark() {
    if (bookmarks.includes(props)) {
      removeBookmark(props);
      color = "#000000";
    } else {
      addBookmark(props);
      color = "#E9BE59";
    }
  }

  console.log(bookmarks);

  return (
    <div className={styles.topContainer}>
      <img src={props.urlToImage} className={styles.image} alt={props.title} />
      <div className={styles.topText}>
        <h2 className={styles.topTitle}>{props.title}</h2>
        <FontAwesomeIcon
          icon={faBookmark}
          className={styles.bookmarkIcon}
          onClick={() => manageBookmark()}
          style={{ color: color }}
        />
        <h4>{props.author}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default TopArticle;
