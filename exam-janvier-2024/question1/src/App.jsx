import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "components/Home/Home";
import Jokes from "components/Jokes/Jokes";

function App() {
    const navigate = useNavigate();
  return (
    <>
        <nav>
            <p onClick = {() => navigate("/")}>Home</p>
            <p onClick = {() => navigate("/famous-jokes")}>Gestion de blagues</p>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/famous-jokes" element={<Jokes />} />
        </Routes>
    </>
  )
}

export default App
