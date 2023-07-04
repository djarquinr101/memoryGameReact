const gettingBoxes = (boxes, numberOfBoxes) => {
    const shuffledBoxes = [...boxes];
    let length = shuffledBoxes.length;
  
    while (length) {
      const randomIndex = Math.floor(Math.random() * length);
      [shuffledBoxes[length - 1], shuffledBoxes[randomIndex]] = [shuffledBoxes[randomIndex], shuffledBoxes[length - 1]];
      length--;
    }
  
    return shuffledBoxes.slice(0, numberOfBoxes);
  };


const logic = {
    gettingBoxes,
}

export default logic 