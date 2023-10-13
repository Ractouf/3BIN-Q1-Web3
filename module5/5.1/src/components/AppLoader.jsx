import { ProviderWrapper as CounterProviderWrapper } from "contexts/CounterContext"
import App from "components/App";

const AppLoader= () => {
    return (
        <CounterProviderWrapper>
            <App />
        </CounterProviderWrapper>
    );
}

export default AppLoader;
