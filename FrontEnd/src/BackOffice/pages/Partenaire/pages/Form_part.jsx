import React from 'react'
import InputFields from '../../../../Components/InputFields'
import TextArea from '../../../../Components/TextArea'

const Form_part = () => {
  return (
    <form >
    <div class="flex max-w-5xl gap-2">

        <div class="shadow-lg w-1/2 p-5 ">
            <h4 class="mb-5 font-semibold">Nouveau partenaire</h4>
            <InputFields
                label="Nom du partenaire"
                name="partenaire-name"
                placeholder="Nom du partenaire"          
              />
            <InputFields
                label="Abbreviation"
                name="partenaire-abreviation"
                placeholder="Abbreviation"          
              />
            <TextArea 
            />
            
            <InputFields
                label="URL"
                name="partenaire-url"
                placeholder="Site officiel du partenaire"          
              />
         

          
          

        </div>

        <div class=" w-1/2 p-5 shadow-lg">
            <h4 class="mb-5 font-semibold">Logo</h4>
            <div class="relative mb-5 w-full h-64">
                <img src="" alt="" class="object-contain w-full h-full partenaire-logo-preview"/>
            </div>
            <div class="">
                <input type="file" name="partenaire-logo" id=""/>
            </div>
            <hr/>
            <br/>
            <br/> 
          
                
            <div className='my-5 flex justify-end mr-5'>
                    <button className='flex justify-around items-center border-2 border-green-500 text-green-500 px-10 py-2 hover:bg-green-500 hover:text-white transition-colors '>Enregistrer</button>                
            </div>
        </div>

    </div>
</form>
  )
}

export default Form_part
