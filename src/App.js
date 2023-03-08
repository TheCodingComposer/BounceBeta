import Circle from "./components/Circle.js"
import './App.css';
import {useState} from "react"
import useInterval from "./components/useInterval.js";

function App() {

  //better to use as object with keys? i.e. 1: {id: 1, x: , y: }
const [positions, setPositions] = useState([{id: 0, x: 0, y: 0, right: true, down: true}, {id: 1, x: 400, y: 400, right: true, down: true}])


  function handleSetPositions(x, y, id, oldPositions) {

    //positions isn't updating, but newPositions is?
    

    const newPositions = oldPositions.map((position, index) => {

      if (position.id === id) {
        return {id: id, x: x, y: y, right: position.right, down: position.down}
      } else {
        return position
      }
    })

    
    // checkCollision(newPositions)
  
    
    setPositions(newPositions)
  }


  useInterval(() => {
    checkCollision();

  }, 10)


  function checkCollision() {



    // const currentPositions = [...positions]
    
    // let changeRight = false;
    // let changeDown = false;
    // let firstPosition = {};
    // let secondPosition = {};

    // if (currentPositions.length < 2) {
    //   return;
    // }


    // currentPositions.forEach((pos, index) => {

    

    //     const otherPositions = [...currentPositions];
    //     otherPositions.splice(index, 1);



    //     otherPositions.forEach((otherPos) => {

          
          
    //       if (Math.abs(pos.x = otherPos.x) <= 100 && Math.abs(pos.y - otherPos.y) <= 100 && changeRight == false) {

        
    //           console.log('right')
    //           changeRight = true;
    //           firstPosition = pos;
              
    //           secondPosition = otherPos;

            
            
    //       }

    //       if (pos.y === otherPos.y && changeDown == false) {
    //         console.log('down')
    //         changeDown = true;
    //         firstPosition = pos;
           
    //         secondPosition = otherPos;
           
    //       }
    //     })

        


    // })


    // if (changeRight) {
    //   const newPositions = currentPositions.map((pos, index) => {
    //     if (firstPosition.id === index) {
    //       return {...firstPosition, right: !firstPosition.right}
    //     } else if (secondPosition.id === index) {
    //       return {...secondPosition, right: !secondPosition.right}
    //     } else {
    //       return pos;
    //     }
    //   })

    //   console.log(newPositions)

    //   // setPositions(newPositions)
    // }

    // if (changeDown) {
    //   const newPositions = currentPositions.map((pos, index) => {
    //     if (firstPosition.id === index) {
    //       return {...firstPosition, down: !firstPosition.right}
    //     } else if (secondPosition.id === index) {
    //       return {...secondPosition, down: !secondPosition.right}
    //     } else {
    //       return pos;
    //     }
    //   })

    //   console.log(newPositions)

      // setPositions(newPositions)
    // }
  }

  function handleSetDirections(right, down, id) {
      const positionsCopy = [...positions];
      const newPositions = positionsCopy.map((pos) => {
          if (pos.id === id) {
            return {...pos, right: right, down: down}
          } else {
            return pos
          }
      })

      setPositions(newPositions)
  }



  const circles = positions.map((p, index) => {
    
    return (
    <Circle 
      key={index}
      id={p.id}
      // x={p.x}
      // y={p.y}
      // right={p.right}
      // down={p.down}
      firstColor={'green'}
      sound={'A4'}
      positions={positions}
      onSetPositions={handleSetPositions}
      onSetDirections={handleSetDirections}
    />)
  }
    )
  

  return (

    <div className="App">
      <div className="page-container">

      
        {circles}
         {/* <Circle
        x={400}
        y={200} 
        firstColor={'yellow'}
        />
         <Circle
        x={1000}
        y={100} 
        firstColor={'red'}
        />
        <Circle
        x={300}
        y={300} 
        firstColor={'purple'}
        />
        <Circle
        x={600}
        y={400} 
        firstColor={'orange'}
        />
        <Circle
        x={100}
        y={500} 
        firstColor={'teal'}
        />
        <Circle
        x={900}
        y={300} 
        firstColor={'pink'}
        /> */}
        
        
      </div>
    </div>
  );
}

export default App;
