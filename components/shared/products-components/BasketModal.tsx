import {products} from "@/constants/productsData";
import {Minus} from "lucide-react";

type Props = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    removeProduct: (id: number) => void,
    selectedProducts: number[]
}

export default function BasketModal({isOpen, setIsOpen, selectedProducts, removeProduct}: Props) {
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <>
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={toggleModal}
                ></div>
                <div
                    className={`fixed inset-0 flex items-center justify-center z-50 transition-transform duration-300 ${
                        isOpen ? "scale-100" : "scale-75"
                    }`}
                >
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] text-black">
                        <div><h2 className="text-2xl font-bold mb-4">Your Cart</h2></div>
                        {selectedProducts && selectedProducts.length > 0 ?
                            products.map(product => (
                                selectedProducts.includes(product.id) &&
                                <div key={product.id} className='flex justify-between'>
                                    <div><h2 className="text-sm font-medium mb-4">{product.name} <strong
                                        className='ml-2'>{product.price}</strong>$</h2></div>
                                    <div onClick={() => removeProduct(product.id)} className='cursor-pointer'><Minus/>
                                    </div>
                                </div>
                            ))
                            : <p className='mb-2'>No product in basket</p>}


                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </>
        </div>
    );
}