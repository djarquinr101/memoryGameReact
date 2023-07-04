const gettingBoxes = (boxes, numberOfBoxes) => {
    const shuffledBoxes = [...boxes]
    let length = shuffledBoxes.length

    while(length){
        const randomIndex = Math.floor(Math.random() * length)
        length --

        [shuffledBoxes[length], shuffledBoxes[randomIndex]] = [
            shuffledBoxes[randomIndex],
            shuffledBoxes[length]
          ];
        }
        return shuffledBoxes.slice(0, numberOfBoxes);
    }



const logic = {
    gettingBoxes,
}

export default logic 