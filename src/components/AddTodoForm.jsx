import { useState } from "react";

function AddTodoForm(props){
    const activityArra = props.activityArra
const setactivityArra = props.setactivityArra

const [newActivity, setnewActivity] = useState('')
function handleChange(event){
setnewActivity(event.target.value)
}

function addActivity(){
    setactivityArra([...activityArra, {id:activityArra.length+1, activity:newActivity}])
    setnewActivity('')
}
    return(
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Manage Activities</h1>
            <div>
            <input placeholder="Next Activity?" className='bg-transparent  border border-black p-1' value={newActivity} onChange={handleChange}></input>
            <button className='bg-black text-white p-1 border border-black' onClick={addActivity}>Add</button>
            </div>
            </div>
    )
}

export default AddTodoForm;