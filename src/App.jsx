import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterCancionero from "./CancioneroRouter";
import Home from "./views/Home";
import Frontpage from "./views/Frontpage";
import Menu from "./views/Menu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cancionero/*" element={<RouterCancionero />} />
                <Route path="/comida" element={<Menu />} />
                <Route path="/frontpage" element={<Frontpage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
