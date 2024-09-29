'use client'

import Image from "next/image";
import {ChevronRight, Camera, MapPinned, Send} from "lucide-react";
import Message from "@/components/shared/chat-components/Message";
import {useState} from "react";

export default function ChatRightSide() {
    const [messages, setMessages] = useState<string[]>([]);
    const [messageSend, setMessageSend] = useState<string>("");

    function handleClick(){
        if(messageSend){
            setMessages(prevState => [...prevState, messageSend]);
            setMessageSend('')
        }
    }

    return (
        <div className="flex-1 flex flex-col h-full">
            <div className='bg-[#1e1e1e] h-[111px] w-full border-black border-2 flex items-center justify-center'>
                <div className='items-center justify-center'>
                    <Image width={55} height={55} className='rounded-full' src={'/users-photos/1.jpg'}
                           alt='user-photo'/>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-sm mt-2'>Stephen</h1>
                        <ChevronRight color='#8e8e93' size={15} className='ml-1 mt-2'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
                <div className='flex flex-col space-y-2'>
                    <Message text='Hello, how are you?' isMyMessage/>
                    <Message text='https://t.me/hamster_kombat_bOt/start?startapp=kentId484175306' isMyMessage/>
                    <Message text='Hi...' isMyMessage={false}/>

                    {messages &&
                        messages.map((message, i) => (
                            <Message key={i} text={message} isMyMessage/>
                        ))
                    }

                </div>
                <div className="mt-auto mb-3">
                    <div className='flex gap-4'>
                        <Camera color='#8e8e93'size={30} />
                        <MapPinned  color='#8e8e93' size={30} />
                        <input
                            placeholder='Send Message'
                            value={messageSend}
                            onChange={(e) => setMessageSend(e.target.value)}
                            className='bg-black border-[#8e8e93] border-2 rounded-2xl w-full mx-1 px-3 text-sm' />
                        <button onClick={handleClick} disabled={!messageSend} className={`mr-4 rounded-full p-2 ${messageSend ? 'bg-[#0A84FF]' : 'bg-[#1e1e1e]'}`}><Send size={20} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
