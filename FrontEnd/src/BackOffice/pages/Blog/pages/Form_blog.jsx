import React from 'react'
import TextArea from '../../../../Components/TextArea'
import InputFields from '../../../../Components/InputFields'

const Form_blog = () => {
  return (
    <>
    <form  method="POST" enctype="multipart/form-data">
            <div className="block md:flex max-w-5xl gap-2">
                <div className=" md:w-1/2 p-5 mb-5 md:mb-0 shadow-lg">
                    <h4 className="mb-5 font-semibold">Quoi de neuf a partager ?</h4>
                    <InputFields
                      label="H1"
                      name="blog_titre"
                      placeholder="Titre"
                      />
                     <InputFields
                      label="H2"
                      name="blog_soustitre"
                      placeholder="Sous-titre"
                      />
    
                    <TextArea />

                    <div className="mb-5 mx-auto border-b w-10/12 flex justify-center items-center">
                        <div className="w-1/12 relative">
                            <i className="absolute top-0 left-0 bx bx-camera-movie"></i>
                            <i className="absolute bottom-0 right-0 bx bx-camera"></i>
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-2xl">\</span>
                        </div>
                        <select name="blog-type" id=""  className="p-5 w-11/12 outline-none bg-none">
                            <option className="p-5 " value="Publication">
                                Publication
                            </option>
                            <option value="Reportage">
                                Reportage
                            </option>
                        </select>
                    </div>
                    
                    <InputFields
                      label="URL"
                      name="blog_url"
                      placeholder="youtube.com"
                      /> 
                </div>

                <div className=" min-h-fit md:w-1/2 p-5 shadow-lg">
                    <h4 className="mb-5 font-semibold">Media</h4>
                    <h5>Photo de couverture</h5>
                    <div className="relative mb-5 w-full h-64" id="imagePreview">
                        <img  alt="" className="w-full h-full" />
                    </div>
                    <div className="">
                        <input type="file" name="blog-couv" id="photoInput" />
                    </div>
                    <hr />
                    <h5 className="my-5">Autre photo</h5>
                    <div className=" mb-5 flex flex-wrap gap-1"  id="photosContainer">
                        <div className="flex relative w-3/12 h-32 text-center align-middle my-auto items-center rounded-lg bg-slate-300 text-slate-200 cursor-pointer" id="adderphoto">
                            <label for="otherphotoInput" className="mx-auto my-auto text-lg relative w-5 h-5 cursor-pointer">
                                <i className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-7xl bx bx-plus"></i>
                            </label>
                        </div>
                        
                                                   
                
                       
                      
                    </div>
                    <input type="hidden" name="the_user" value=" "/>
                    <input type="hidden" name="nbrphoto" value=""/>
                    <input type="hidden" name='adderId' value="   "/>
                  
                       
                    <div className='my-5 flex justify-end mr-5'>
                      <button className='flex justify-around items-center border-2 border-green-500 text-green-500 px-10 py-2 hover:bg-green-500 hover:text-white transition-colors '>Enregistrer</button>                
                    </div>
                </div>
                

            </div>
        </form> 
    
    </>
  )
}

export default Form_blog
