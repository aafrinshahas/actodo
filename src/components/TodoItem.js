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
        <div className='flex justify-between bg-[#F0F0F0] rounded-md my-3 p-3 '>
<p className='text-lg capitalize'>{props.index+1}. {props.activity}</p>
<button className='text-red-500' onClick={()=>handleDelete(id)}><i class="fa-solid fa-trash"></i></button>
        </div>

    )
}

export default TodoItem;