import React from 'react'
import {Avatar} from '@chakra-ui/react'
const Card_partenaires = () => {
  return (
    <>
      <div className='cursor-pointer relative shadow-lg flex '>
          <div className='bg-slate-300 w-1/3 h-auto'>
            <img src="" alt=""  className='w-full'/>
          </div>
          <div className='absolute top-8 left-1/4 border-8 border-white bg-blue-300 rounded-full w-24 h-24'>
            <Avatar />
          </div>
          <div className='w-2/3 px-2 py-5'>
            <h3 className='text-green-500 text-right mr-5'>PubNex</h3>
            <div className='text-slate-400 text-xs font-semibold w-9/12 mx-auto py-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus quasi voluptas sunt culpa tenetur aspernatur voluptatem facilis sapiente? 
                Esse voluptatem reprehenderit repellendus adipisci iste id blanditiis qui sequi eum laudantium!
            </div>
            <div className=''>
            </div>
          </div>
      </div>
    </>
  )
}

export default Card_partenaires
