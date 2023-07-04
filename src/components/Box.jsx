const Box = ( {photo, clickHandler, id} ) => {
    return(
        <div className="bg-slate-50 max-w-32 max-h-32 my-8 mx-auto rounded-3xl shadow-2xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={clickHandler}> 
            <div className="rounded-3xl w-32 h-32 flex flex-row justify-center items-center">
                <img id={id} src={photo} className="rounded-3xl w-32 h-32 object-cover"/>
            </div>
        </div>
    )
}

export default Box