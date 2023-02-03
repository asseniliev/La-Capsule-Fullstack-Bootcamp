import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";

//Reducers initialization
import bookmarks from "../reducers/bookmarks";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { bookmarks },
});
//End of reducers initialization

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
