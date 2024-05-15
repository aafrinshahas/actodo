import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function Todocontainer(){
    const [activityArra, setactivityArra] = useState(
        [
            // {id: 1, activity: 'Go for a Walk'},
            // {id: 2, activity: 'Have a breakfast'}
        ]
      )
    return(
        <div className='flex gap-5 flex-wrap'>
          <div className="add-activity flex-grow">
          <AddTodoForm activityArra={activityArra} setactivityArra={setactivityArra}/>
          </div>
           <div className="list-activity">
           <TodoList activityArra={activityArra} setactivityArra={setactivityArra}/>
           </div>
           
        </div>
    )
}

export default Todocontainer;