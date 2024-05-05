import { useState } from "react";
import { cls } from "../lib/utils";
import { Link } from "react-router-dom";

export default function Header({ categories, selectedCategory, onClickOption }) {
    const [isSticky, setSticky] = useState(false);
    window.onscroll = () => {
        setSticky(window.scrollY > 0);
    };
    return (
        <div className="sticky top-0 z-20 flex justify-center w-full h-auto lg:h-20 transition">
            <div
                className="relative w-full h-full px-[--pdd]"
                style={{
                    backgroundImage:
                        "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                }}
            >
                <div
                    className={cls("absolute inset-0 w-full", {
                        "bg-black/20 backdrop-blur-sm": isSticky,
                        "bg-transparent backdrop-blur-none": !isSticky,
                    })}
                />
                <div className="relative container flex flex-col gap-1 lg:flex-row justify-between items-center w-full h-full p-2">
                    <Link to="/" className="flex h-16 lg:h-full">
                        <img
                            className="w-full h-full"
                            src="/img/logo.png"
                            alt="Logo del bar karaoke bohemia"
                        />
                    </Link>
                    <nav className="grid grid-cols-3 md:grid-cols-6 items-center ">
                        <Option
                            text="Todo"
                            isActive={selectedCategory === null}
                            onClick={() => onClickOption(null)}
                        />
                        {categories &&
                            categories.map((category) => (
                                <Option
                                    key={category.id}
                                    text={category.name}
                                    isActive={selectedCategory?.id === category?.id}
                                    onClick={() => onClickOption(category)}
                                />
                            ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

function Option({ to, text, isActive, onClick }) {
    return (
        <button
            to={to}
            className={cls(
                "flex justify-center items-center gap-1 sm:gap-2 text-white text-nowrap text-base sm:text-lg sm:px-1 py-2 opacity-70 transition hover:opacity-100",
                {
                    "opacity-100 text-[--c2-bg]": isActive,
                }
            )}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
