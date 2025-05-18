import React, { useState } from "react";

import { postLoginUser } from "../@routes/api";
import type { Response } from "../@common/types";
import UserModel from "../models/userModel";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        const response = await postLoginUser({email, password}) as Response
        if(response.error)return setError(response.message);
        setError("");
        if(response.token) {
            UserModel.storeUserCredential({token: response.token})
            window.location.reload();
            return;
        };
        setError("User credential could't find. please try again.");
    };
    return(
        <div className="min-h-screen bg-[var(--primary-background)] [&>*]:text-[var(--primary-background)] py-6 flex flex-col justify-center sm:py-12">
            <div className="relativ w-[90%] sm:w-auto py-3 sm:max-w-xl mx-auto">
                <div className="relative px-6 py-10 bg-[var(--color-white)] shadow-lg rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="py-8 space-y-8 sm:min-w-80 sm:text-lg sm:leading-7">
                            <h1 className="text-3xl font-bold text-center">
                                Login
                            </h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-[var(--primary-background)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-background)]"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block">Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-[var(--primary-background)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-background)]"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="w-full ring-1 hover:font-semibold hover:ring-2 ring-[var(--primary-background)] py-2 px-4 rounded-lg cursor-pointer">Login</button>
                                {error && <p className="text-red-500 text-center">{error}</p>}
                            </form>
                            <div>
                                <p className="text-sm">Email: test@example.com</p>
                                <p className="text-sm">Password: hashedPassword123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;