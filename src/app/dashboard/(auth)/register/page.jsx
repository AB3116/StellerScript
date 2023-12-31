"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Register() {
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 && 
        router.push("/dashboard/login?success=Account has been registered");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Register</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </form>
      <Link href="/dashboard/login" className={styles.existingAccount}>
        Login with an existing account
      </Link>
      {error && <p className={styles.errorMessage}>Something went wrong!</p>}
    </div>
  );
}

export default Register;
