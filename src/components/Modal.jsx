import { useState } from "react"
import rightImage from "/assets/right.png"
import wrongImage from "/assets/wrong.jpg"
import winner from "/assets/winner.jpg"
import loser from "/assets/loser.jpg"


const Modal = ({open, type}) => {
    if(open === true) {
        if(type === 'right') {
            return(
                <div className="w-screen h-screen bg-transparent fixed z-10 flex items-center justify-center">
                    <div className="max-w-xl shadow-md flex flex-col bg-blue-500 p-4 gap-5 rounded-3xl">
                        <img  className="max-w-[200px]"src={rightImage}/>
                        <h3 className="text-center">That's the right box</h3>
                    </div>
                </div>
            )
        }

        if(type === 'wrong'){
            return(
                <div className="w-screen h-screen bg-transparent fixed z-10 flex items-center justify-center">
                    <div className="max-w-xl shadow-md flex flex-col bg-red-500 p-4 gap-5 rounded-3xl">
                        <img  className="max-w-[200px]"src={wrongImage}/>
                        <h3 className="text-center">That's the wrong box</h3>
                    </div>
                </div>
            )
        }

        if(type === 'winner') {
            return(
                <div className="w-screen h-screen bg-transparent fixed z-10 flex items-center justify-center">
                    <div className="max-w-xl shadow-md flex flex-col bg-amber-500 p-4 gap-5 rounded-3xl">
                        <img  className="max-w-[200px] rounded-3xl"src={winner}/>
                        <h3 className="text-center">You Won!!!</h3>
                    </div>
                </div>
            )
        }

        if(type==='loser'){
            return(
                <div className="w-screen h-screen bg-transparent fixed z-10 flex items-center justify-center">
                    <div className="max-w-xl shadow-md flex flex-col bg-red-700 p-4 gap-5 rounded-3xl">
                        <img  className="max-w-[200px] rounded-3xl"src={loser}/>
                        <h3 className="text-center text-slate-50">You Lost!!</h3>
                    </div>
                </div>
            )
        }
    } else {
        return null
    }
}

export default Modal