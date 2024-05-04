import { Route, Routes } from "react-router-dom";
import Header from "./cancionero.components/Header";
import Home from "./cancionero.views/Home";
import Musics from "./cancionero.views/Musics";
import New from "./cancionero.views/New";
import NotFound from "./views/NotFound";

export default function RouterCancionero() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<Musics />} />
                <Route path="/new/:id" element={<New />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
}
