import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterCancionero from "./CancioneroRouter";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<p>hola</p>} />
                <Route path="/cancionero/*" element={<RouterCancionero />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
