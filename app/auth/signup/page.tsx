"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function(){
  const route = useRouter();
  const [name, setName] = useState<string>("");      
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      // Check if response is OK
      if (!res.ok) {
        // Attempt to parse error message from backend
        const errorData = await res.json().catch(() => ({}));
        console.error("Signup failed:", errorData);
        return;
      }
  
      // Parse success response
      const data = await res.json();
      console.log("Signup success:", data);
      alert("SignUp successfull");

      route.push("/api/auth/signin");
  
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  
  
  return(
    <>
    <div className="flex justify-center py-40">
      <div className="flex flex-col items-center gap-5">
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-3 px-5 rounded-xl border-2 border-gray-700 focus:outline-none text-l"
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-3 px-5 rounded-xl border-2 border-gray-700 focus:outline-none text-l"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-3 px-5 rounded-xl border-2 border-gray-700 focus:outline-none text-l"
        />
        <div className="py-2">
          <button
            onClick={handleSubmit}
            className="border-2 border-gray-800 py-3 px-8 rounded-xl text-l cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
  )
}