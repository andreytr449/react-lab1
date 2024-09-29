import {Ellipsis, Mic, Search} from "lucide-react";
import {chatData} from "@/constants/usersChatsData";
import AdditionalChat from "@/components/shared/chat-components/AdditionalChat";

export default function ChatLeftSide(){
    return (
        <div className="flex-2 bg-[#1e1e1e] w-72 p-4 h-[150px]">
            <div className='flex justify-between'>
                <h2 className="text-2xl font-bold mt-12">Messages</h2>
                <h2 className="cursor-pointer text-2xl font-bold mt-12"><Ellipsis/></h2>

            </div>
            <div className='flex justify-between gap-2 items-center h-7 my-1 bg-[#333336] rounded w-full'>
                <div>
                    <Search color='#8e8e93' size={18}/>
                </div>
                <div className='w-full'>
                    <input placeholder='Search'
                           className='my-1 bg-[#333336] text-[#8e8e93] rounded w-full outline-none'/>
                </div>
                <div>
                    <Mic color='#8e8e93' size={18}/>
                </div>
            </div>
            <div className='mt-7 overscroll-y-auto'>
                {chatData.map(chat => (
                    <AdditionalChat key={chat.id} name={chat.name} id={chat.id} message={chat.message}
                                    photo={chat.photo}/>
                ))}

            </div>
        </div>
    )
}