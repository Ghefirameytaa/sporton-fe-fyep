import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import PriceFormatter from "@/app/utils/price-formatter";

const productList = [
    {
        name: "SportsOn Hyperfast Shoes",
        category: "Running",
        price: 329000,
        imgUrl: "product-3.svg"
    },
    {
        name: "SportsOn Rockets Tennis",
        category: "Tennis",
        price: 999000,
        imgUrl: "product-2.svg"
    },
    {
        name: "SportsOn Slowlivin",
        category: "Running",
        price: 119000,
        imgUrl: "product-1.svg"
    },
    {
        name: "SportsOn HyperSoccer v2",
        category: "Football",
        price: 458000,
        imgUrl: "product-4.svg"
    },
    {
        name: "SportsOn HyperSoccer v2",
        category: "Football",
        price: 458000,
        imgUrl: "product-4.svg"
    },
    {
        name: "SportsOn Slowlivin",
        category: "Running",
        price: 119000,
        imgUrl: "product-5.svg"
    },
    {
        name: "SportsOn Hyperfast Shoes",
        category: "Running",
        price: 329000,
        imgUrl: "product-8.svg"
    },
    {
        name: "SportsOn Rockets Tennis",
        category: "Tennis",
        price: 999000,
        imgUrl: "product-7.svg"
    }
];



const ProductsSection = () => {
    return  <section id="products-section" className="container mx-auto mt-32 mb-52">
        <h2 className="font-bold italic text-4xl text-center mb-11">
            <span className="text-primary">Our </span>Products
        </h2>
        <div className="grid grid-cols-4 gap-5">
            {
                productList.map((product, index) => (
                    <Link href={`/product/${product.name}`} key={index} className="p-1.5 bg-white hover:shadow-xl duration-300">
                        <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                            <Image src={`/images/product/${product.imgUrl}`} width={300} height={300} alt={product.name} className="aspect-square object-contain"/>
                            <Button className="w-10 h-10 p-2! absolute right-3 top-3"><FiPlus size={24} /></Button>
                        </div>

                        <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>

                        <div className="flex justify-between mb-8">
                            <div className="text-gray-500">{product.category}</div>
                            <div className="font-medium text-primary">
                                {PriceFormatter(product.price)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    }

export default ProductsSection;