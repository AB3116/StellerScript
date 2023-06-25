"use client"

import Image from "next/image";
import styles from "./darkmode.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function DarkModeToggle() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>
        <Image src="/moon.png" alt="Moon" fill={true} />
      </div>
      <div className={styles.icon}>
        <Image src="/sun.png" alt="Sun" fill={true} />
      </div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "4px" } : { right: "4px" }}
      />
    </div>
  );
}

export default DarkModeToggle;
