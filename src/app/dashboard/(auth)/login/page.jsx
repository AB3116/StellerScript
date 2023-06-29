"use client";
import { signIn } from "next-auth/react";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

function Login() {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.registerButton}>
            Login
          </button>
          <button onClick={() => signIn("google")} className={styles.registerButton}>Login with Google</button>
        </form>
      </div>
    </>
  );
}

export default Login;
