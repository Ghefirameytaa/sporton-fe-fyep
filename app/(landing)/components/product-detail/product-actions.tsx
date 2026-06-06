"use client";
import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
    const [qtl, setQtl] = useState(1);
    const {push} = useRouter();

    const checkout = () => {
    
    }

    return(
        <div className="flex gap-5 items-center">
            <div className="border border-gray-300 inline-flex h-[52px]">
                <div className="aspect-square text-xl font-medium border-r border-gray-300 flex justify-center items-center">
                    <span>{qtl}</span>
                </div>
                <div className="flex flex-col">
                    <button className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                       onClick={() => setQtl(qty => qty + 1)}
                    >
                     <FiChevronUp/>
                    </button>
                    <button className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                       onClick={() => setQtl(qty => qty > 1 ? qty - 1 : qty)}
                    >
                     <FiChevronDown/>
                    </button>
                </div>
            </div>
            <Button className="px-10 w-full">
                <FiShoppingBag size={24}/>
                Add to Cart
            </Button>
             <Button variant="dark" className="px-10 w-full" onClick={() => push("/checkout")}
             >
                Checkout Now
                <FiArrowRight size={24}/>
            </Button>
        </div>
    )
}

export default ProductActions;