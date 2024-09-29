import Image from "next/image";
import {AdditionalChatType} from "@/constants/usersChatsData";

export default function AdditionalChat({name, message, photo }:AdditionalChatType){
    return (
        <div className="flex gap-2 mt-2">
            <div className='mt-2'>
                <Image width={65} height={65} className='rounded-full' src={photo} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <p className='text-xs text-gray-400'>{message}</p>
            </div>
        </div>
    )
}