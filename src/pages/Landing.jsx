
import Header from "../components/Header";
// import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../style.css'
function Landing(){
    const data = useLocation();
    console.log(data.state.user)
    const navigate = useNavigate();
 function handleLogout(){
  navigate("/")
 }

    return(
        <div className='md:p-16' style={{minHeight: '100vh'}}>
          <button className="p-3 bg-[#8947e4] text-white m-5 font-semibold rounded-md float-right" onClick={handleLogout}>Logout</button>
            <div className='shadow-lg shadow-neutral-500' >
            <Header data={data.state.user}/>
            <div className='bg-[#FDFDFD] p-10 rounded-b-md'>

          <Todocontainer/>
       </div>
            </div>
  
      
  </div>
    )
}

export default Landing;