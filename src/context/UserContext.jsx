import React, { createContext, useState } from "react";
import { addAccount } from "../services/movies.services";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({});

    const signup = (username,email,password) => {
        
        const newUser = {
            username: username,
            email: email,
            password: password
        };
        addAccount(newUser);
    }

    const login = (username,password) => {
        let input = {username: username,password: password}
        setUser(input);
    }

    return (
        <UserContext.Provider value={{user, signup, login}}>
            {props.children}
        </UserContext.Provider>
    )
}