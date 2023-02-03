import Head from "next/head";
import styles from "../styles/Bookmarks.module.css";
import Article from "./Article";

import { useDispatch } from "react-redux";
import {
  addBookmarksToStore,
  removeBookmarksFromStore,
} from "../reducers/bookmarks";

import { useSelector } from "react-redux";

function Bookmarks() {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => {
    //console.log("Original bookmarks is " + state.bookmarks.value);
    return state.bookmarks.value;
  });

  const addBookmark = (newBookmark) => {
    dispatch(addBookmarksToStore(newBookmark));
  };

  const removeBookmark = (bookmark) => {
    dispatch(removeBookmarksFromStore(bookmark));
  };

  const articles = bookmarks.map((data, i) => {
    return <Article key={i} {...data} />;
  });

  const bookmarksContent = () => {
    //console.log("Bookmarks is: " + bookmarks);
    if (bookmarks.length === 0) {
      return <p>No bookmark</p>;
    } else {
      return (
        <>
          <h2>Bookmarks</h2> {articles}
        </>
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Morning News - Bookmarks</title>
      </Head>
      <div className={styles.container}>
        {/* <h2>Bookmarks</h2>
        <p>No bookmark</p> */}
        {bookmarksContent()}
      </div>
    </div>
  );
}

export default Bookmarks;
