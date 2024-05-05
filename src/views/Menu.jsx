import { useEffect, useState } from "react";
import PageContent from "../components/PageContent";
import { getCategoriesAndFoods } from "../services/all";
import Header from "../comida.components/Header";

export default function Menu() {
    const [categories, setCategories] = useState(null);
    const [foods, setFoods] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        getCategoriesAndFoods().then((response) => {
            setCategories(response);
        });
    }, []);

    useEffect(() => {
        if (!categories) return;
        const arrays = categories.map((category) => {
            return category.foods;
        });
        const allFoods = arrays.flat();
        setFoods(allFoods);
    }, [categories]);

    useEffect(() => {
        if (!categories) return;
        if (!selectedCategory) {
            const arrays = categories.map((category) => {
                return category.foods;
            });
            const allFoods = arrays.flat();
            setFoods(allFoods);
            return;
        }
        const category = categories.find((category) => category.id === selectedCategory.id);
        setFoods(category.foods);
    }, [selectedCategory, categories]);

    return (
        <>
            <Header
                categories={categories}
                selectedCategory={selectedCategory}
                onClickOption={setSelectedCategory}
            />
            <PageContent className=" relative px-[--pdd] py-5 ">
                <Background />
                <div className=" container relative z-10 ">
                    <div className=" grid md:grid-cols-2 gap-5 ">
                        {foods &&
                            foods.map((food) => {
                                return food.description == null ? (
                                    <Item
                                        key={food.id}
                                        title={food.name}
                                        price={food.price}
                                        src={food.image_url}
                                    />
                                ) : (
                                    <ItemDesc
                                        key={food.id}
                                        title={food.name}
                                        description={food.description}
                                        price={food.price}
                                        src={food.image_url}
                                    />
                                );
                            })}
                    </div>
                </div>
            </PageContent>
        </>
    );
}

function Background() {
    return (
        <div
            className="fixed inset-0 -z-10 "
            style={{
                backgroundImage: "url(/img/background.png)",
            }}
        />
    );
}

function ItemDesc({ title, description, price, src }) {
    return (
        <div className="flex justify-center items-center p-3 bg-black/30 rounded-md backdrop-blur-[2px] shadow-lg gap-3">
            <div className="flex flex-col min-w-[25%]">
                <img
                    className=" w-full aspect-square object-cover bg-black/20 rounded-md"
                    src={src}
                    alt={title}
                />
                <p className=" font-bold text-lg text-center text-[#248f41] mt-3 ">${price}</p>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className=" font-title2 text-center text-[--c2] text-2xl ">{title}</h2>
                <p className=" font-title2 text-lg text-balance opacity-75 mx-auto ">
                    {description}
                </p>
            </div>
        </div>
    );
}

function Item({ title, price, src }) {
    return (
        <div className="flex items-center p-3 bg-black/30 rounded-md backdrop-blur-[2px] shadow-lg gap-3">
            <div className="flex flex-col min-w-[25%] max-w-[25%] ">
                <img
                    className=" w-full aspect-square object-cover bg-black/20 rounded-md"
                    src={src}
                    alt={title}
                />
            </div>
            <div className="flex flex-col gap-1">
                <h2 className=" font-title2 text-center text-[--c2] text-2xl ">{title}</h2>
                <p className=" font-bold text-lg text-[#248f41] ">${price}</p>
            </div>
        </div>
    );
}
