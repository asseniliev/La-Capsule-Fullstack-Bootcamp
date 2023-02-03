import Image from "next/image";
import DarkStatus from "./DarkStatus";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDarkStatusInStore } from "../reducers/dark";
import { useSelector } from "react-redux";

function Home() {
  function onClickHandle() {
    dispatch(toggleDarkStatusInStore());
  }

  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.dark.value);

  console.log("In Home: isDark = " + isDark);

  return (
    <div
      className={styles.container}
      style={
        isDark ? { backgroundColor: "#14213D" } : { backgroundColor: "#EAE2B7" }
      }
    >
      <Image
        src={isDark ? "/dark.png" : "/light.png"}
        alt="Light"
        width={128}
        height={128}
        id="switch"
        className={styles.switch}
        onClick={() => onClickHandle()}
      />
      <DarkStatus />
    </div>
  );
}

export default Home;
