function TodoItem(props){
    const activityArra = props.activityArra;
    const setactivityArra = props.setactivityArra;
    const id = props.id;

    function handleDelete(deleteId){
        console.log(deleteId)
        var temparr = activityArra.filter((item)=>{
            if(item.id == deleteId){
                return false
            }
            else{
                return true
            }
        })
        setactivityArra(temparr)
    }
    return(
        <div className='flex justify-between'>
<p>{props.index+1}.{props.activity}</p>
<button className='text-red-500' onClick={()=>handleDelete(id)}>Delete</button>
        </div>

    )
}

export default TodoItem;