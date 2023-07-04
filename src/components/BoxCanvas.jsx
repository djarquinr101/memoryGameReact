import Box from "./box"

const BoxCanvas = ({gameStarted, rightBoxes, allBoxes, clickHandler}) => {

    if (gameStarted) {
        return(
            <div className="w-auto h-auto bg-slate-100 flex flex-row flex-wrap justify-around m-4 rounded-2xl">  
            {
              allBoxes.map((element) => 
                <Box id={element.id} key={element.id} photo={element.photo} clickHandler = {clickHandler}/>
              )
            }
          </div>
        )
    } else {
        return(
            <div className="w-auto h-auto bg-slate-100 flex flex-row flex-wrap justify-around m-4 rounded-2xl">  
            {
              rightBoxes.map((element) => 
                <Box key={element.id} photo={element.photo} id={element.id}/>
              )
            }
          </div>
        )
    }

}

export default BoxCanvas 