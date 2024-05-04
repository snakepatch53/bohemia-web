import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterCancionero from "./CancioneroRouter";
import Home from "./views/Home";
import Frontpage from "./views/Frontpage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cancionero/*" element={<RouterCancionero />} />
                <Route path="/frontpage" element={<Frontpage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
