import { faBowlFood, faInfoCircle, faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PageContent from "../components/PageContent";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Ligth from "../components/Ligth";

export default function Home() {
    return (
        <PageContent className="relative px-[--pdd] pt-5">
            <Ligth color="yellow" size="5" x="20" y="60" extend="4" />
            <Ligth color="white" size="15" x="50" y="20" />
            <Ligth color="blue" size="13" x="70" y="50" />
            <Ligth color="blue" size="10" x="30" y="80" />
            <Ligth color="red" size="20" x="70" y="70" extend="5" />
            <Ligth color="green" size="30" x="30" y="10" />
            <Ligth color="pink" size="10" x="50" y="25" />
            <Ligth color="purple" size="30" x="70" y="15" />
            <div className="absolute -z-10 inset-0 backdrop-blur-lg" />
            <div className="relative z-10 container">
                <img
                    className="w-full max-w-48 aspect-video object-contain mx-auto"
                    src="/img/logo.png"
                />
                <h1
                    className=" font-title2 uppercase text-center text-[--c1] font-bold sm:text-xl"
                    style={{
                        textShadow: "0 -1px 1px #000, 0 1px 1px #000, 0 0 1px #000",
                    }}
                >
                    🫡 ¿Cómo podemos ayudarte? 😉
                </h1>
                <div className="grid sm:grid-cols-2 gap-10 mt-10">
                    <Item
                        to="/cancionero/"
                        name="Cancionero"
                        text="¿Quieres cantar?"
                        icon={faMicrophoneAlt}
                        // color de cantar
                        color="#81389a"
                    />

                    <Item
                        to="/comida"
                        name="Menu"
                        text="¿Quieres comer?"
                        icon={faBowlFood}
                        color="#c32872"
                    />
                    <Item
                        as="a"
                        href="https://www.facebook.com/LaBohemiaMacas"
                        target="_blank"
                        rel="noreferrer"
                        name="Facebook"
                        text="@LaBohemiaMacas"
                        icon={faFacebook}
                        color="#2c74dc"
                    />
                    <Item
                        to="/frontpage"
                        name="Información"
                        text="¿Quieres saber más?"
                        icon={faInfoCircle}
                        color="#31bbff"
                    />
                </div>
                <p className=" text-center text-3xl sm:text-4xl mt-20 ">🎤🍲</p>
                <p className=" font-title text-3xl sm:text-5xl text-center text-[--c2] mb-20 ">
                    El placer de cantar y comer en un solo lugar.
                </p>
            </div>
        </PageContent>
    );
}

function Item({ as = Link, name, text, icon, color, ...props }) {
    const Component = as;
    return (
        <Component
            {...props}
            className="flex flex-col justify-center items-center gap-3 xs:p-5 rounded bg-black/20 aspect-square xs:aspect-video transition hover:scale-105 hover:bg-black/30"
        >
            <h2 className="uppercase font-bold text-[--c2] text-lg opacity-80 ">{name}</h2>
            <FontAwesomeIcon
                className=" text-5xl md:text-7xl text-[--c1] "
                icon={icon}
                style={{ color }}
            />
            <h3 className="text-balance text-lg text-center opacity-70">{text}</h3>
        </Component>
    );
}
