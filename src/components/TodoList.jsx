
import TodoItem from "./TodoItem";

function TodoList(props){
const activityArra = props.activityArra
const setactivityArra = props.setactivityArra
    return(
        <div className=' px-2 flex-grow'>
        <h1 className='text-2xl font-semibold'>Today's Activity</h1>

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