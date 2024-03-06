import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb';
import Salut from './components/Salut';
import Salut_skeleton from './components/Salut_skeleton';
import Global_Card_skeleton from './components/Global_Card_skeleton';
import Global_Card from './components/Global_Card';
import Stat_Creation_blog from './components/Stat_Creation_blog';
import Stat_creation_blog_skeleton from './components/Stat_creation_blog_skeleton';
import Mini_Card from './components/Mini_Card';
import DateTime from './components/DateTime';
import Mini_Card_skeleton from './components/Mini_Card_skeleton';
import DateTime_skeleton from './components/DateTime_skeleton';
import Connect_user from './components/Connect_user';
import Connect_user_skeleton from './components/Connect_user_skeleton';
import Task_list_dash from './components/Task_list_dash';
import Task_list_dash_skeleton from './components/Task_list_dash_skeleton';
import Stat_partenaire from './components/Stat_partenaire';
import Stat_parteniare_skeleton from './components/Stat_parteniare_skeleton';

const Dashboard = () => {
  const [levels, setLevels] = useState(['Tableau de bord']);

  
  return (
    <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
        <BreadCrumb levels={levels}  />
        <hr className='my-5'/>
        <div className="block lg:flex gap-2 mb-5 mx-6 ">
          <Salut />
          <div className="flex w-full lg:w-2/4 gap-2 " >
            <Global_Card />
            <Global_Card />
          </div>
        
        </div>
        <div className="block lg:flex gap-2 mb-5 mx-6 ">
          <Stat_Creation_blog />
          <div className="w-full lg:w-2/6">
                <div className="block sm:flex gap-2 mb-5">
                    <Mini_Card />
                    <Mini_Card />
                </div>
                <DateTime />
            </div>
        </div>
        
        <div class="  sm:flex gap-2 mb-5 mx-6 ">
          <Stat_partenaire/>
          <Connect_user />
          <Task_list_dash />
        </div>
        
        
        
        
      {/*   <div className="block lg:flex gap-2 mb-5 mx-6 ">
          <Salut_skeleton />
          <div className="flex w-full lg:w-2/4 gap-2 " >
          <Global_Card_skeleton />
          <Global_Card_skeleton />
          </div>
          
        </div>
        <div className="block lg:flex gap-2 mb-5 mx-6 ">
          <Stat_creation_blog_skeleton />
          <div className="w-full lg:w-2/6">
                <div className="block sm:flex gap-2 mb-5">
                    <Mini_Card_skeleton />
                    <Mini_Card_skeleton />
                </div>
                <DateTime_skeleton />
            </div>
        </div>
        <div class="  sm:flex gap-2 mb-5 mx-6 ">
         <Stat_parteniare_skeleton />
          <Connect_user_skeleton />
          <Task_list_dash_skeleton />
        </div> */}
        
    </section>
  )
}

export default Dashboard
