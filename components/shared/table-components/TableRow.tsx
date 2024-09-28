import Badge from "@/components/ui/Badge";
import {paymentColors, statusColors, tableDataType} from "@/constants/tableData";


export default function TableRow({name, email, userStatus, lastLogin, paymentStatus, paymentDate, amount, currency}:tableDataType){
    const userStatusColor = statusColors[userStatus] || 'gray';
    const paymentStatusColor = paymentColors[paymentStatus] || 'gray';

    return (
        <div className='w-full h-auto bg-white'>
            <div className='flex justify-between'>
                <div className='text-sm my-4 mx-4 font-medium'>
                    <h1 className='text-black'>{name}</h1>
                    <p className='text-gray-500'>{email}</p>
                </div>
                <div className='my-4 mx-4 font-semibold'>
                    <div>
                        <Badge color={userStatusColor}>{userStatus}</Badge>
                        <p className='text-gray-500 text-xs font-medium'>Last login: {lastLogin}</p>
                    </div>
                </div>
                <div className='my-4 mx-4 font-semibold'>
                    <div>
                        <Badge color={paymentStatusColor}>{paymentStatus}</Badge>
                        <p className='text-gray-500 text-xs font-medium'>Paid on {paymentDate}</p>
                    </div>
                </div>
                <div className='text-sm my-4 mx-4 font-medium'>
                    <h1 className='text-black'>${amount}</h1>
                    <p className='text-gray-500'>{currency}</p>
                </div>
            </div>
        </div>
    )
}