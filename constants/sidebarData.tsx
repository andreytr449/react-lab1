import {
    ChartNoAxesCombined,
    Briefcase,
    CalendarCheck,
    CircleHelp,
    CircleAlert
} from "lucide-react";

export type SideBarElemType = {
    text: string,
    isActive: boolean,
    Icon: React.ElementType,
    isDanger?:boolean
}

export const sideBarElements:SideBarElemType[] = [
    {
        text:'Dashboard',
        isActive: true,
        Icon: ChartNoAxesCombined
    },
    {
        text:'My Orders',
        isActive: false,
        Icon: Briefcase
    }, {
        text:'Schedules',
        isActive: false,
        Icon: CalendarCheck
    }
]

export const lastSideBarElements:SideBarElemType[] = [
    {
        text: 'Help',
        isActive: false,
        Icon: CircleHelp
    },
    {
        text: 'Logout Account',
        isActive: false,
        Icon: CircleAlert,
        isDanger: true
    }
]
