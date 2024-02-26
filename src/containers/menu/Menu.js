import React from 'react'
import MenuItem from '../../components/menu_components/menu_item/MenuItem'
import { FaRegUserCircle } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { MdCampaign } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { FaInbox } from "react-icons/fa6";
import { MdWidgets } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";


export default function Menu({primaryColor}) {
  return (
    <div className={`rounded mt-2 bg-${primaryColor} col-12 col-sm-4 col-lg-3 pb-3`}>
<div className=' mt-4 d-flex align-items-center justify-content-evenly'>
<FaRegUserCircle size={25}/>
    <p className='my-auto'>Coolest User</p>
    <CiMenuKebab size={25}/>
</div>
<div className='mt-4'>
    <MenuItem icon={<GrOverview size={25}/>} title={"Overview"}/>
    <MenuItem icon={<MdCampaign size={25}/>} title={"Campaigns"}/>
    <MenuItem icon={<IoMdAnalytics size={25}/>} title={"Analytics"}/>
    <MenuItem icon={<FaInbox size={25}/>} title={"Inbox"}/>
    <MenuItem icon={<MdWidgets size={25}/>} title={"Widgets"}/>
    <MenuItem icon={<IoMdSettings size={25}/>} title={"Preferences"}/>

</div>
    </div>
  )
}
