"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Login.module.css";

export default function Login() {
  const { data: session, status, error } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Session error:", error);
    return <div>An error occurred: {error.message}</div>;
  }
  if (session) {
    return (
      <div className={styles.container}>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()} className={styles.button}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <button
        onClick={() => signIn("google")}
        className={`${styles.button} ${styles.signInButton}`}
      >
        Sign in with Google
      </button>
    </div>
  );
}
