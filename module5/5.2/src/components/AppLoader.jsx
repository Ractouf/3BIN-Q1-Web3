import { ProviderWrapper as OpinionProviderWrapper } from "contexts/OpinionContext"
import App from "components/App";

const AppLoader= () => {
    return (
        <OpinionProviderWrapper>
            <App />
        </OpinionProviderWrapper>
    );
}

export default AppLoader;
