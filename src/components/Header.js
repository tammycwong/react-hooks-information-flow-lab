import React from "react";

function Header({onDarkModeClick, isDarkMode}) {
    return (
        <heaader>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </heaader>
    )
}

export default Header