import React, { useState } from "react" ; 
import useLocalStorage from "./useLocalStorage";
const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark") ; 
    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark") ;
    }
    return (
        <div className="light-dark-mode">
            <div className="container" style={{backgroundColor: theme === "dark" ? "black": "white"}}>
                <p style={{color: theme === "dark" ? "white": "black"}}> Hello World</p>
                <button onClick = {changeTheme}> Change Theme</button>
            </div>
        </div>
    )
}

export default LightDarkMode ;