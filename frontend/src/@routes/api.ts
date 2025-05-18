import type { Response } from "../@common/types";

const API_END_POINT = "http://localhost:5000/api"

interface LoginUser {
    email: string;
    password: string;
}

export const postLoginUser = async (user: LoginUser) => {
    try {
        const response = await fetch(`${API_END_POINT}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const data = await response.json() as Response
            if(data.error){
                return data;
            }
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json() as Response;
        return data;
    } catch (error) {
        console.error("Login failed:", error);
        return { error: true, message: "Login failed. Please try again." } as Response;
    }
};