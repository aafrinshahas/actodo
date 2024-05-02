import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props){
    const users = props.users;
    const setUsers = props.setUsers;
    const navigate = useNavigate();

    const [enterUsername, setenterUsername] = useState('');
   const [enterPassword, setenterPassword] = useState('');
   function handleEnteruser(e){
    setenterUsername(e.target.value)
}
function handleEnterpassword(e){
    setenterPassword(e.target.value)
}

function addUser(){
    setUsers([...users, {username:enterUsername, password:enterPassword}]);
    navigate("/")
}
    return(
        <div className="bg-black p-10 ">
           <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Sign up here :)</p>
           

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
                 <input 
                type="text" 
                className="w-52 border border-black rounded-md p-1 bg-transparent" placeholder="confrim password"/>
                <button className="bg-[#FCA201] w-24 p-1 rounded-md h-10" onClick={addUser}>Sign up</button>
                <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
            </div>
           </div>
        </div>
    )
}

export default Signup;