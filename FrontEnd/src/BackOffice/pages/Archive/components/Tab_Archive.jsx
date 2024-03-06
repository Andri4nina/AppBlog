import React from 'react'
import Searchbar from '../../../components/Searchbar'
import "./Tab_archive.css"
const Tab_Archive = () => {
  return (
    <>
        <div class="my-2 p-5 min-w-4xl shadow-lg">
            <div class="top-card">
                <h4>Archiver des nom </h4>
                <div class="w-full">
                    <Searchbar />
                </div>
               
            </div>
            <div class="mt-5 relative ">
                <table class="text-center min-w-full">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Logo</th>
                            <th class="px-4 py-2">Nom du partenaire</th>
                            <th class="px-4 py-2">Date de publication</th>
                            <th class="px-4 py-2">Date de relation</th>
                            <th class="px-4 py-2">Status</th>
                            <th class="px-4 py-2">Actions</th>
                            <th class="px-4 py-2">Publier</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class="px-4 py-2 flex justify-center  gap-2 ">
                                <div class=" h-10 w-10 rounded-full overflow-hidden">
                                <a href="{{ route('partenaire.show',$part->id) }}"> <img src="{{ asset('images/pdp-partenaire/'.$part->logo_partenaire) }}" alt="" class="object-cover w-full h-full" /></a> 
                                </div>
                            </td>
                            <td class="px-4 py-2"><a href="{{ route('partenaire.show',$part->id) }}">Pubnex</a></td>
                            <td class="px-4 py-2">PN</td>
                            <td class="px-4 py-2">12/12/2023</td>
                            <td class="px-4 py-2">archive</td>
                            <td class="flex justify-center items-center gap-2 px-4 -translate-y-1/3">
                            
                                <form action="">
                                    <button class="border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white  font-bold "><i class="bx bx-pencil"></i></button>
                                </form>
                                <form action="" method="POST">
                                  
                                    <input type="hidden" name="the_user" value=""/>
       
                                    <button class="border text-red-500 border-red-500 hover:bg-red-500 hover:text-white font-bold "><i class="bx bx-trash"></i></button>
                                </form>
                            </td>

                            <td class="px-4 py-2">
                                <form action="{{ route('partenaire.publish') }}" method="POST">
                                    
                                    <input type="hidden" name="the_user" value=" "/>
       
                                    <div class="flex justify-center items-center mb-2 prvlg-switcher">
                                        <input type="hidden" name='hidden_id' value="{{ $part->id }}"/>
                                        <input class="form-checkbox" type="checkbox" id="publier" name="status"  />
                                        <label class="ml-2" for="publier"></label>
                                    </div>
                                </form>
                            </td>
                        </tr>               
                    </tbody>   
                </table>    
            </div>
        </div>
    </>
  )
}

export default Tab_Archive
