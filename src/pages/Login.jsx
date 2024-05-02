import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props){
   const users = props.users;
   const navigate = useNavigate();

   const [enterUsername, setenterUsername] = useState('');
   const [enterPassword, setenterPassword] = useState('');
   const [ruser, setruser] = useState(true)
    
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
      if(userfound === false){
        console.log('login failed')
        setruser(false)
      }
    }
    return(
        <div className="bg-black p-10 ">
           <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser?  
            <p>I help you manage your activities after you login :)</p> 
            : <p className="text-red-500">Please sign up before you login</p>}
           

            <div className="flex flex-col gap-2 my-2">
                <input 
                type="text" 
                className="w-52 border border-black rounded-md p-1 bg-transparent" placeholder="username" 
                onChange={handleEnteruser} 
                value={enterUsername}/>
                <input 
                type="text" 
                className="w-52 border border-black rounded-md p-1 bg-transparent" placeholder="password"  
                onChange={handleEnterpassword} 
                value={enterPassword}/>
                
                <button className="bg-[#8272DA] w-24 p-1 rounded-md h-10" onClick={checkUser}>Login</button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
           </div>
        </div>
    )
}

export default Login;