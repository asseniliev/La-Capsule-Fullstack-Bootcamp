import "../styles/globals.css";
import Head from "next/head";

import dark from "../reducers/dark";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { dark },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Turn on the light</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
