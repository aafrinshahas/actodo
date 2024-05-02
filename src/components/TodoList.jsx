
import TodoItem from "./TodoItem";

function TodoList(props){
const activityArra = props.activityArra
const setactivityArra = props.setactivityArra
    return(
        <div className='bg-[#BDB4EA] border rounded-md p-2 flex-grow'>
        <h1 className='text-2xl font-medium'>Today's Activity</h1>

        {activityArra.length===0?<p>you haven't added any activity yet</p>:''}
  
        {activityArra.map((item, index) => {
            return (
                <TodoItem index={index} activity={item.activity} activityArra={activityArra} setactivityArra={setactivityArra} id={item.id}/>
            )
        })}
       </div>
    )
}

export default TodoList;