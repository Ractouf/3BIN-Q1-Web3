import 'components/App.css';
import AddOpinion from "components/AddOpinion.jsx";
import Opinion from "components/Opinion.jsx";
import { OpinionContext } from "contexts/OpinionContext";
import { ThemeContext } from "contexts/ThemeContext";
import { useContext } from "react";
import Footer from "./Footer.jsx";

const App = () => {
    const { sortedOpinions } = useContext(OpinionContext);
    const { backgroundColor, primaryTextColor, secondaryTextColor, linkColor } = useContext(ThemeContext);

    return (
        <div style={
            {
                backgroundColor: backgroundColor,
                color: primaryTextColor,
                height: "100vh"
            }
        }>
            {sortedOpinions.map((opinion, index) => <Opinion key = {index} opinion = {opinion}></Opinion>)}
            <AddOpinion />

            <Footer />
        </div>
    );
}

export default App;
