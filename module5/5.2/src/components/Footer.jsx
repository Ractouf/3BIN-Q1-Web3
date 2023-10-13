import { ThemeContext } from "contexts/ThemeContext";
import { useContext } from "react";

const Footer = () => {
    const { toggleNightMode } = useContext(ThemeContext);

    return (
        <>
            <button onClick = {toggleNightMode}>Toggle night mode</button>
        </>
    );
}

export default Footer;
