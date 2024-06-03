import "./signin.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="container">
        <p>Signed in as {session.user.email}</p>
        <button className="button" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="signin-card">
        <h1 className="signin-text">Sign in to continue</h1>
        <button className="google-button" onClick={() => signIn("google")}>
          <img src="/google-logo.png" alt="Google logo" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
