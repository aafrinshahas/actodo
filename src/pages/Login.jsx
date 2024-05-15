import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import login from '../assets/images/login.png'

function Login(props){
   const users = props.users;
   const navigate = useNavigate();

   const [enterUsername, setenterUsername] = useState('');
   const [enterPassword, setenterPassword] = useState('');
   const [ruser, setruser] = useState(true);
   const [checkValue, setcheckValue] = useState(true)
    
    function handleEnteruser(e){
        setenterUsername(e.target.value)
    }
    function handleEnterpassword(e){
        setenterPassword(e.target.value)
    }
    function checkUser(){
        var userfound = false;

      users.forEach((item)=>{
        if(item.username === enterUsername && item.password === enterPassword){
            console.log('login succesfull')
            userfound = true
            navigate("/landing",{state:{user:enterUsername}})
        }
      })
     
      if(enterUsername !== '' && enterPassword !== ''){
        console.log('value entered')
        if(userfound === false){
          console.log('login failed')
          setruser(false)
        }
        setcheckValue(true)
      }
      else{
        console.log('value not enetered')
        setcheckValue(false)
      }
    }
    return(
        <div className="md:px-16 md:py-10">
          
       
           <div className="bg-[#FFFFFF] rounded-md flex items-center flex-wrap">
           
           

            <div className="login-form flex flex-col gap-2 my-2 p-10 ">
            <div className="mb-3">
          <h1 className="text-3xl font-medium">Track your activity for <span className="text-[#8947e4] font-semibold">Login</span> into your account</h1>
            {ruser?  
            <p>I help you manage your activities after you login :)</p> 
            : <p className="text-red-500">Please sign up before you login</p>}
          </div>
                <input 
                type="text" 
                className="border border-[#8947e4] rounded-md py-2 px-3 bg-transparent my-1.5" placeholder="Enter your username" 
                onChange={handleEnteruser} 
                value={enterUsername}/>
                <input 
                type="password" 
                className="border border-[#8947e4] rounded-md py-2 px-3 bg-transparent my-1.5" placeholder="Enter your password"  
                onChange={handleEnterpassword} 
                value={enterPassword}/>
                {checkValue?'':<p className="text-red-500">Please enter login details</p>}
                <button className="bg-[#8947e4] w-24 p-1 rounded-md h-10 text-white font-semibold" onClick={checkUser}>Login</button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
            <div className="hero-image">
            <img src={login} alt="hero"></img>
            </div>
            
           </div>
        </div>
    )
}

export default Login;