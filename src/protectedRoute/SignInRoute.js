import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../context/context";

export default function SignInRoute({ children }) {
    const isAuthenticated = useCreateAuthStateContext();
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }
    return children;
}