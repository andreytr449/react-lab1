import {SideBarElemType} from '@/constants/sidebarData'

interface Props extends SideBarElemType {
    extraClass?: string;
    isOpenMenu: boolean
}

export default function SideBarItem({isActive, extraClass = "", text, isDanger, Icon, isOpenMenu}: Props) {

    return (
        <div
            className={`py-3 flex gap-4 px-5 cursor-pointer ${isActive ? "bg-violet-200 rounded-xl" : ""} ${extraClass}`}
        >
            <div className='text-black'>
                {Icon && (
                    <Icon color={isDanger ? "#ff0000" : '#000000'} size={isOpenMenu ? 20 : 23} className='text-black'/>
                )}
            </div>
            {isOpenMenu &&
                <h1 className={isDanger ? 'text-red-600 text-base font-medium' : 'text-black text-base font-medium'}>{text}</h1>
            }
        </div>
    );
}