import React from 'react'

const Mini_Card = () => {
  return (
    <>
    <div className="w-full sm:w-1/2 h-1/3 p-5 shadow-lg mb-2">
        <div className="mb-5 ">
            <i className="text-green-500 bx bx-task"></i>
        </div>
        <span className="mt-5 text-sm font-semibold">Les projects <br /> terminer</span>
        <div className="mt-8">
            <div className="font-semibold text-base ">
               50
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Mini_Card
