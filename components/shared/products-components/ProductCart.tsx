import {Minus, Plus} from "lucide-react";
import {productType} from "@/constants/productsData";

interface Props extends productType {
    onClick: (id:number) => void,
    selectedProducts: number[]
}

export default function ProductCart({selectedProducts, id, name, imageUrl, price, description, onClick}:Props){
    return (
        <div className="bg-white text-black">
                <div className='flex justify-center bg-red-200 rounded-lg h-[260px]'>
                    <img src={imageUrl} alt={name}/>
                </div>
                <h1 className='text-2xl font-bold'>{name}</h1>

                <p className='text-sm text-gray-400'>{description}</p>
                <div className='flex justify-between'>
                    <div>
                        from <b>{price}$</b>
                    </div>
                    <div className='mb-3'>
                        <button onClick={() => onClick(id)} className='flex bg-amber-300 rounded-2xl py-2 px-2 items-center'>
                            {selectedProducts.includes(id) ?
                            <>
                                <Minus size={15} className='mr-1'/>
                                Remove from basket
                            </>
                                :
                                <>
                            <Plus size={15} className='mr-1'/>
                                Add to basket
                                </>
                            }
                        </button>
                    </div>
                </div>


        </div>
    )
}