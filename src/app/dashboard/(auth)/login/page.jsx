"use client";
import { signIn } from "next-auth/react";
import React from "react";

function Login() {
  return <button onClick={() => signIn("google")}>Login with Google</button>;
}

export default Login;
