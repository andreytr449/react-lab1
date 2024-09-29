'use client'


import {products} from "@/constants/productsData";
import ProductCart from "@/components/shared/products-components/ProductCart";
import {useState} from "react";
import BasketModal from "@/components/shared/products-components/BasketModal";


export default function ProductsList(){
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    function handleClick(id:number){
        if(selectedProducts.includes(id)){
            setSelectedProducts(prevState => {
                return prevState.filter(number => number != id)
            });
        }else {
            setSelectedProducts([...selectedProducts,id]);
        }
    }
    function openBasketModal(){
        setIsOpenModal(true)
    }

    return (
        <div className="flex flex-col">
            {isOpenModal && <BasketModal removeProduct={handleClick} selectedProducts={selectedProducts} isOpen={isOpenModal} setIsOpen={setIsOpenModal} />}
            <div className="flex justify-between mb-5">
                <div></div>
                <div>
                    <h2 onClick={openBasketModal} className="text-xl text-white cursor-pointer font-bold mb-3">Basket ({selectedProducts.length})</h2>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-[50px]">
                {products.map((product) => (
                    <ProductCart
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        id={product.id}
                        imageUrl={product.imageUrl}
                        price={product.price}
                        onClick={handleClick}
                        selectedProducts={selectedProducts}
                    />
                ))}
            </div>
        </div>
    )
}