import React from 'react'
import {Avatar} from '@chakra-ui/react'


const Connect_user = () => {
  return (
   <>
    <div className="sm:w-1/3 p-5 shadow-lg mb-2 h-96">
        <h3 className="text-sm mb-5 font-semibold">Listes des Utilisateurs</h3>
        <div className="overflow-y-hidden h-full">
            <ul className="overflow-y-scroll h-5/6">
                <li className="text-xs my-5 flex justify-between ">
                    <div className="flex gap-2 justify-center items-center">
                    <div className="bg-red-300 relative w-10 h-10 rounded-full overflow-hidden">
                        <Avatar name='Andrianina' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl '/>
                    </div>
                        <div>
                            Andrianina
                        </div>
                    </div>
                    <div className=" flex gap-2 justify-center items-center text-sm font-bold ">
                        <div>
                            <div className="bg-green-600 w-3 h-3 rounded-full "></div>
                        </div>
                    </div> 
                </li>
                <li className="text-xs my-5 flex justify-between ">
                    <div className="flex gap-2 justify-center items-center">
                    <div className="bg-blue-300 relative w-10 h-10 rounded-full overflow-hidden">
                        <Avatar name='Blitatous' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl '/>
                    </div>
                        <div>
                            Blitatous
                        </div>
                    </div>
                    <div className=" flex gap-2 justify-center items-center text-sm font-bold ">
                        <div>
                            <div className="bg-gray-600 w-3 h-3 rounded-full "></div>
                        </div>
                    </div> 
                </li>
                <li className="text-xs my-5 flex justify-between ">
                    <div className="flex gap-2 justify-center items-center">
                    <div className="bg-green-300 relative w-10 h-10 rounded-full overflow-hidden">
                        <Avatar name='JP Lapin' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl '/>
                    </div>
                        <div>
                            JP Lapin
                        </div>
                    </div>
                    <div className=" flex gap-2 justify-center items-center text-sm font-bold ">
                        <div>
                            <div className="bg-gray-600 w-3 h-3 rounded-full "></div>
                        </div>
                    </div> 
                </li>
                <li className="text-xs my-5 flex justify-between ">
                    <div className="flex gap-2 justify-center items-center">
                    <div className="bg-red-300 relative w-10 h-10 rounded-full overflow-hidden">
                        <Avatar name='Andrianina' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl '/>
                    </div>
                        <div>
                            Andrianina
                        </div>
                    </div>
                    <div className=" flex gap-2 justify-center items-center text-sm font-bold ">
                        <div>
                            <div className="bg-green-600 w-3 h-3 rounded-full "></div>
                        </div>
                    </div> 
                </li>
                <li className="text-xs my-5 flex justify-between ">
                    <div className="flex gap-2 justify-center items-center">
                    <div className="bg-blue-300 relative w-10 h-10 rounded-full overflow-hidden">
                        <Avatar name='Blitatous' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl '/>
                    </div>
                        <div>
                            Blitatous
                        </div>
                    </div>
                    <div className=" flex gap-2 justify-center items-center text-sm font-bold ">
                        <div>
                            <div className="bg-gray-600 w-3 h-3 rounded-full "></div>
                        </div>
                    </div> 
                </li>
                <li className="text-xs my-5 flex justify-between ">
                    <div className="flex gap-2 justify-center items-center">
                    <div className="bg-green-300 relative w-10 h-10 rounded-full overflow-hidden">
                        <Avatar name='JP Lapin' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl '/>
                    </div>
                        <div>
                            JP Lapin
                        </div>
                    </div>
                    <div className=" flex gap-2 justify-center items-center text-sm font-bold ">
                        <div>
                            <div className="bg-gray-600 w-3 h-3 rounded-full "></div>
                        </div>
                    </div> 
                </li>
            </ul>
        </div>
    </div>
   
   </>
  )
}

export default Connect_user
