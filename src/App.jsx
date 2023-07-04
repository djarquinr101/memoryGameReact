import { useState, useEffect } from "react"
import Button from "./components/Button"
import boxData from "./data/data"
import logic from "./data/logic"
import BoxCanvas from "./components/BoxCanvas"
import Modal from "./components/Modal"
import ModalInstructions from "./components/ModalInstructions"

function App() {
  const [rightBoxes, setRightBoxes] = useState([])
  const [gameBoxes, setGameBoxes] = useState([])
  const [wrongTries, setWrongTries] = useState(0)
  const [rightTries, setRightTries] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [modalType, setModalType] = useState('')

  const [instructionsRead, setInstructiosnRead] = useState(false)

//getting the 5 boxes form the boxes of the game  

  useEffect(()=> {
    let data = 
    setRightBoxes(logic.gettingBoxes(gameBoxes, 5))
  },[gameBoxes])
  
  
  useEffect(() => {
    if (wrongTries < 5 && wrongTries > 0) {
         setOpenModal(true)
         setModalType('wrong')
         setTimeout(() => {
          setOpenModal(false)
          setModalType('')
         }, 2000)
    }
    if (wrongTries === 5){
      setOpenModal(true)
      setModalType('loser')
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  }, [wrongTries])

  useEffect(() => {
   if(rightTries > 0 && rightTries < 5) {
      setOpenModal(true)
      setModalType('right')
      setTimeout(() => {
        setOpenModal(false)
        setModalType('')
       }, 2000)
      
  } 
   if(rightTries === 5) {
    setOpenModal(true)
    setModalType('winner')
    setTimeout(() => {
      window.location.reload()
    }, 2000)
   }
  }, [rightTries])


const startGame = (event) => {
  event.target.className = 'hidden'
  setGameStarted(true)
}

const checkingRightBoxes = (event) => {
    let box = event.target.id
    let found = rightBoxes.find((element) => element.id === box)
    found !== undefined ? setRightTries(rightTries+1) : setWrongTries(wrongTries+1)
    event.target.className = 'hidden'
}


  if(instructionsRead === false) {
    return (
    
    <div className="bg-[#1C1C21] w-full h-screen z-0 flex items-center justify-center">
        <ModalInstructions  handleClick ={() => {
          setInstructiosnRead(true)
          setGameBoxes(logic.gettingBoxes(boxData, 20))
        }
        }/>
     </div>
    )
  } else {
    
    return (
      <div className="bg-[#1C1C21] w-full h-screen z-0 flex flex-col justify-center">
        <Modal open={openModal} type={modalType}/>
   
        <BoxCanvas gameStarted={gameStarted} rightBoxes={rightBoxes} allBoxes={gameBoxes} clickHandler={checkingRightBoxes} />
  
        <div className="flex flex-row justify-center gap-6 my-8 mx-auto bg-[#A288A6] max-w-fit p-6 rounded-2xl ">
          <Button  text={'Load again'} handleClick={() => window.location.reload()}/>
          <Button  text={'Start game'} handleClick={startGame}/>
        </div>
      </div>
    )
  }


}

export default App
