import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from '../assets/images/login.png'

function Signup(props){
    const users = props.users;
    const setUsers = props.setUsers;
    const navigate = useNavigate();

    const [enterUsername, setenterUsername] = useState('');
   const [enterPassword, setenterPassword] = useState('');
   const [confrimPassword, setconfrimPassword] = useState('');
   const [checkPass, setcheckPass] = useState(true)
   const [checkValue, setcheckValue] = useState(true)
   

   function handleEnteruser(e){
    setenterUsername(e.target.value)
}
function handleEnterpassword(e){
    setenterPassword(e.target.value)
}

function handleConfrimpassword(e){
setconfrimPassword(e.target.value)
}

function addUser(){
   
    setUsers([...users, {username:enterUsername, password:enterPassword}]);
  
    if(enterUsername !== '' && enterPassword !== ''){
        console.log('value entered')
        if(enterPassword == confrimPassword){
            console.log('matched')
            setcheckPass(true)
            navigate("/")
        }
        else{
            console.log('not matched')
            setcheckPass(false)
            navigate("/signup")
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
          
           

            <div className="login-form flex flex-col my-2 p-10">
                <div className="mb-3">
                <h1 className="text-3xl font-medium">Create an Account</h1>
                <p>Kindly fill in your details for <span className="text-[#8947e4] font-semibold">Sign Up</span> here :)</p>
           
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
                 <input 
               type="password" 
                className="border border-[#8947e4] rounded-md py-2 px-3 bg-transparent my-1.5" placeholder="Enter your confrim password"
                onChange={handleConfrimpassword} 
                value={confrimPassword}
                />
                {checkPass?'': <p className="text-red-500">Password mismatched</p>}
                {checkValue?'':<p className="text-red-500">Please enter sign up details</p>}
                
                <button className="bg-[#8947e4] w-24 p-1 rounded-md h-10 font-semibold text-white my-2" onClick={addUser}>Sign up</button>
                <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
            </div>
            <div className="hero-image">
            <img src={login} alt="hero"></img>
            </div>
           </div>
        </div>
    )
}

export default Signup;