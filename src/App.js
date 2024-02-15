import React from "react";
import boxes from "./boxes";
import Box from "./componets/Box";

function App() {
  const [squares, setsquares] = React.useState(boxes)

  function updateObject(id){
    setsquares(prevSquares => {
      // const newSqures = []
      // for(let i = 0; i < prevSquares.length; i++){
      //   if(prevSquares[i].id != id){
      //     newSqures.push(prevSquares[i])
      //   } else{
      //     newSqures.push({
      //       ...prevSquares[i],
      //       on : !prevSquares[i].on
      //     })
      //   }
      // }
      // return newSqures

      return prevSquares.map(square => {
        return square.id === id ? {...square, on : !square.on} : square
      })
    })
  }

  const squareElements = squares.map(square =>{
    return (
      // <Box key={square.id} on={square.on} id={square.id} handleClick={updateObject}/>
      <Box key={square.id} on={square.on} handleClick={() => updateObject(square.id)}/>
    )
  })
  return (
    <div>
      {squareElements}
    </div>
  );
}

export default App;
