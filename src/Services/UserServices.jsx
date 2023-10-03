import React from "react";
import axios from "axios";


export const signIn = async (obj) => {
    let response = await axios.post(
        "https://localhost:44329/api/User/Login",obj);
    return response;
};

export const signUp = async (obj) => {
    let response = await axios.post( 
        "https://localhost:44329/api/User/Register",obj);
    return response;
};