import React from "react"
import Navbar from "./NavBar"
import Main from "./Main"

export default function App() {
    const [mode, setMode] = React.useState(false)
    function toggleDarkMode(){
        setMode(prevMode => !prevMode)
    }
    console.log(mode)
    
    return (
        <div className="container">
            <Navbar 
                darkMode = {mode}
                toggleDarkMode = {toggleDarkMode}
            />
            <Main 
                darkMode = {mode}
            />
        </div>
    )
}