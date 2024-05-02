
import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom";
function Landing(){
    const data = useLocation();
    console.log(data.state.user)
    return(
        <div className='bg-black py-10 px-16'>
  
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
            <Header data={data.state.user}/>
            <div className='flex justify-between gap-7 my-5 flex-wrap'>
            <Card bgcolor={'#8272DA'} title={'23'} subtitle={'Chennai'}/>
            <Card bgcolor={'#FD6663'} title={'May 01'} subtitle={'13:31:08'}/>
            <Card bgcolor={'#FCA201'} title={'Build Using'} subtitle={'React'}/>
            </div>
           <Todocontainer/>
        </div>
  </div>
    )
}

export default Landing;