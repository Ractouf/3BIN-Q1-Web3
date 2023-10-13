import React, {useEffect, useState} from "react";

const ThemeContext = React.createContext(null)

const ThemeProviderWrapper = (props) => {
    const [nightMode, setNightMode] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [primaryTextColor, setPrimaryTextColor] = useState("black");
    const [secondaryTextColor, setSecondaryTextColor] = useState("gray");
    const [linkColor, setLinkColor] = useState("blue");

    function setLightTheme() {
        setBackgroundColor("white");
        setPrimaryTextColor("black");
        setSecondaryTextColor("gray");
        setLinkColor("blue");
    }

    function setDarkTheme() {
        setBackgroundColor("#212126");
        setPrimaryTextColor("#d0dae1");
        setSecondaryTextColor("gray");
        setLinkColor("red");
    }

    function toggleNightMode() {
        if (nightMode) {
            setLightTheme();
        } else {
            setDarkTheme();
        }

        const mode = !nightMode;
        setNightMode(mode);
    }

    const exposedValue = {
        backgroundColor,
        primaryTextColor,
        secondaryTextColor,
        linkColor,
        toggleNightMode
    }

    return <ThemeContext.Provider value={exposedValue}>
        { props.children }
    </ThemeContext.Provider>
}

export {
    ThemeContext,
    ThemeProviderWrapper,
}
