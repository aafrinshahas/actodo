function Header(props){
    return(
        <div className="bg-[#E7F6DF] rounded-t-md px-10 py-5">
            <h1 className='text-3xl font-medium'>Hello <span className="text-[#8947e4] capitalize font-semibold">{props.data}</span>!</h1>
              <p>I help you manage your activities :)</p>
        </div>
    )
}

export default Header;