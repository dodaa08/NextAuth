"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()} className="border-2  border-gray-700 text-xl cursor-pointer py-2 px-5 rounded-xl">
      Sign in
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()} className="border-2  border-gray-700 text-xl cursor-pointer py-2 px-5 rounded-xl">
      Sign Out
    </button>
  );
};


export const Signup = ()=>{
  return(
    <>
    <Link href="/auth/signup">
      <button className="border-2  border-gray-700 text-xl cursor-pointer py-2 px-5 rounded-xl">SignUp</button>
    </Link>
    </> 
  )
}