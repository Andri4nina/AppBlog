import React from 'react'

const Photo_galery = () => {
  return (
    <div className="flex flex-col w-1/4 bg-slate-100 h-72 ">
        <a target="_blank" className="m-1 overflow-hidden ">
            <figure className="relative ">
                <img src="" alt="image de" className="grayscale block w-full  " />
                <figcaption className="absolute bottom-0 left-0 pt-6 pb-4 pl-4 w-full text-base text-white opacity-0  ">Image de</figcaption>
            </figure>
        </a>
    </div>
  )
}

export default Photo_galery
