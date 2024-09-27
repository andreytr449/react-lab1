'use client'

import SideBarItem from "@/components/shared/menu-components/SideBarItem";
import Image from "next/image";
import userPhoto from '@/public/user-photo.jpg';
import {ChevronRight, ChevronLeft} from "lucide-react"
import {useState} from "react";
import {lastSideBarElements, sideBarElements} from "@/constants/sidebarData";
export default function Container() {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <div className={`relative w-72 min-h-screen bg-white rounded-lg flex flex-col justify-between ${isOpen ? 'w-72' : 'w-16' } min-h-screen transition-all duration-300 ease-in-out`}>

            <button className="absolute top-3 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                {isOpen ?
                <ChevronLeft onClick={() => setIsOpen(prevState => !prevState)} size={20} className="text-violet-600"/>
                :
                <ChevronRight onClick={() => setIsOpen(prevState => !prevState)} size={20} className="text-violet-600"/>
                }
            </button>

            <div>
                <div className={`flex gap-2 ${isOpen ? 'mx-5 py-7' : 'mx-2 pt-14 pb-5'}`}>
                    <div>
                        <Image className={`rounded-full object-cover ${isOpen ? 'w-14 h-14 ' : 'w-10 h-10'}`} src={userPhoto} alt='user photo'/>
                    </div>
                    <div className={isOpen ? 'flex flex-col pt-2 ' : 'hidden'}>
                        <div className='text-violet-600 font-semibold'>User name</div>
                        <div className='text-black text-sm'>react / next js (ipz 22-3)</div>
                    </div>
                </div>

                <div className='flex flex-col mt-0'>
                    {sideBarElements.map(item => (
                        <SideBarItem isOpenMenu={isOpen} key={item.text} isActive={item.isActive} text={item.text} Icon={item.Icon}/>
                    ))}

                </div>
            </div>

            <div className="flex flex-col pb-10">
                {lastSideBarElements.map(item => (
                    <SideBarItem isOpenMenu={isOpen} isDanger={item.isDanger} key={item.text} isActive={item.isActive} text={item.text} Icon={item.Icon}/>
                ))}
            </div>
        </div>
    );
}
