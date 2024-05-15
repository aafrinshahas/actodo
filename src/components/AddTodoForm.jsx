import { useEffect, useState } from "react";

function AddTodoForm(props){
    const activityArra = props.activityArra
const setactivityArra = props.setactivityArra

const [newActivity, setnewActivity] = useState('');
const [checkValue, setcheckValue] = useState(true)
function handleChange(event){
setnewActivity(event.target.value)
// localStorage.setItem('activitylist', JSON.stringify(event.target.value))
}
// useEffect(()=>{
//     let storageData = JSON.parse(localStorage.getItem('activitylist'));
//     console.log(storageData)
//     setactivityArra(storageData)
// },[])
function addActivity(){
    
   if(newActivity !== ''){
    setactivityArra([...activityArra, {id:activityArra.length+1, activity:newActivity}])
    let data = [...activityArra, {id:activityArra.length+1, activity:newActivity}]
    localStorage.setItem('activitylist', JSON.stringify(data))
    console.log('value is not empty');
    setcheckValue(true)
   }
   else{
    console.log('value is empty')
    setcheckValue(false)
   }
    setnewActivity('')
}
    return(
   
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>Manage Activities</h1>
         
            <div className="flex gap-2">
            <input placeholder="Next Activity?" className=' bg-transparent  border border-[#8947e4] p-2.5 rounded-md' style={{width: '100%'}} value={newActivity} onChange={handleChange}></input>
            <button className='bg-[#8947e4] text-white rounded-md p-2.5 w-11' onClick={addActivity}><i class="fa-solid fa-plus"></i></button>
            </div>
            {checkValue?'': <p className="text-red-500">Enter the activity</p>}
            </div>
    )
}

export default AddTodoForm;