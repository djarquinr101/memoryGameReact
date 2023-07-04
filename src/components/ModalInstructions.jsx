import Button from "./Button"
const ModalInstructions = ({handleClick}) => {
    return(
        <div className="w-1/2 h-auto bg-slate-100 flex flex-col justify-center p-6 rounded-2xl m-auto gap-3">
            <h2>You have to memorize the 5 images that will appear after you start game and pick them up among other 15 images</h2>
            <Button handleClick={handleClick} text={'Start Game'}/>
        </div>
    )
}

export default ModalInstructions