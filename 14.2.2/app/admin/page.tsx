"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import  { useState } from 'react';

export default function AdminLogin() {

    const [email , setEmail] =useState("");
    const [password , setPassword] = useState("");

    const router = useRouter()

    const handleLogin =(e : React.FormEvent)=>{
        e.preventDefault()
     }
 if (email === "haqsidra907@gmail.com" && password === "123456") {
     localStorage.setItem("isLoggedIn" , "true")
     router.push("/admin/dashboard")
 } 
 else{
        alert("Invalid Email or Password");
 }
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <form onSubmit={handleLogin} className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-4'>
                    Admin Login
                </h2>
                <input
                 type="email" 
                 placeholder="Email"
                 onChange={(e)=>setEmail(e.target.value)} 
                 className='w-full p-3 mb-4 border border-gray-300 rounded '
                 value={email}/>
                <input type="password" 
                placeholder="Password" 
                onChange={(e)=>setPassword(e.target.value)}
                    className='w-full p-3 mb-4 border border-gray-300 rounded'
                    value={password}
                />
                <button type="submit"
                className='bg-red-600 text-white w-full px-4 py-2 rounded'>Submit</button>
            </form>
        </div>
    );
}



