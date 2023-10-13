import { OpinionProviderWrapper } from "contexts/OpinionContext";
import { ThemeProviderWrapper } from "contexts/ThemeContext";
import App from "components/App";

const AppLoader= () => {
    return (
        <OpinionProviderWrapper>
            <ThemeProviderWrapper>
                <App />
            </ThemeProviderWrapper>
        </OpinionProviderWrapper>
    );
}

export default AppLoader;
