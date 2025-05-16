"use client";
// /pages/signup.tsx (or any client page)

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    alert("User created..")

    if (res.ok) {
      router.push("/signin"); // Or auto sign in
    }
    //  else {
    //   const data = await res.json();
    //   alert(data.message);
    // }

  
  };

  return (
    <div className="py-20 px-20 h-screen">
    <form onSubmit={handleSubmit}>
      <input placeholder="Enrer email" type="email" onChange={(e) => setEmail(e.target.value)} required />
      <input placeholder="enter password" type="password" className="py-2 px-5" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
}
