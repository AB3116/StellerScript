"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

function Login() {
  const [error, setError] = useState(false);
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") return <p>Loading...</p>
  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    signIn("credentials", { email: email, password: password });
  };
  return (
    <>
      <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.registerButton}>
            Login
          </button>
          <button
            onClick={() => signIn("google")}
            className={styles.registerButton}
          >
            Sign in with Google
          </button>
          {error && <p className={styles.errorMessage}>Something went wrong!</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
