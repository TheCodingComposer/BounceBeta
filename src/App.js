import Circle from "./components/Circle.js"
import './App.css';
import {useRef, useState} from "react"
import useInterval from "./components/useInterval.js";

function App() {

  //better to use as object with keys? i.e. 1: {id: 1, x: , y: }
const [positions, setPositions] = useState([{id: 0, x: 0, y: 0, right: true, down: true}, {id: 1, x: 400, y: 400, right: true, down: true}, {id: 2, x: 200, y: 100, right: true, down: true}])



const [speed, setSpeed] = useState(10)


  let collectedPositions = []

  function handleSetPositions(id, x, y, right, down) {



    // if (id === 0) {
    //   collectedPositions = [];
    // }

    if (id !== positions.length - 1) {
      collectedPositions.push({id: id, x: x, y: y, right: right, down})
    } else {
      collectedPositions.push({id: id, x: x, y: y, right: right, down})

      //add a toggle that only fires checkCollisions every other frame?
      
      const checkedPositions = checkCollision(collectedPositions);

      if (collectedPositions.length == positions.length) {
      setPositions(collectedPositions)
      collectedPositions = [];
      }
    }

    //positions isn't updating, but newPositions is?

    //   const positionsCopy = [...positions];
    

    // const newPositions = positionsCopy.map((position, index) => {

    //   if (position.id === id) {
    //     return {id: id, x: x, y: y, right: position.right, down: position.down}
    //   } else {
    //     return position
    //   }
    // })

    // checkCollision(newPositions)
    
    // setState(prev => {
  //   return {
//     ...prev,
//     [id]: obj ??????
//   }
// });

    // setPositions(prev => newPositions)
  
    
  }


  // useInterval(() => {
  //   checkCollision();

  // }, speed * 2 - 10)


  function checkCollision(collectedPositions) {



   
    
    let changeRight = false;
    let changeDown = false;
    let firstPosition = {};
    let secondPosition = {};

    if (collectedPositions.length < 2) {
      
      return collectedPositions;
    }


    collectedPositions.forEach((pos, index) => {

    

        const otherPositions = [...collectedPositions];
        otherPositions.splice(index, 1);



        otherPositions.forEach((otherPos) => {

          
          
          if (Math.abs(pos.x - otherPos.x) <= 100 && Math.abs(pos.y - otherPos.y) <= 100 && changeRight == false) {

        
              console.log('right')
              changeRight = true;
              firstPosition = pos;
              
              secondPosition = otherPos;

            
            
          }

          // if (pos.y === otherPos.y && changeDown == false) {
          //   console.log('down')
          //   changeDown = true;
          //   firstPosition = pos;
           
          //   secondPosition = otherPos;
           
          // }
        })

        


    })


    if (changeRight) {
      const checkedPositions = collectedPositions.map((pos, index) => {
        if (firstPosition.id === index) {
          return {...firstPosition, right: !firstPosition.right}
        } else if (secondPosition.id === index) {
          return {...secondPosition, right: !secondPosition.right}
        } else {
          return pos;
        }
      })

      return checkedPositions;

      // setPositions(newPositions)
    } else if (changeDown) {
      const checkedPositions = collectedPositions.map((pos, index) => {
        if (firstPosition.id === index) {
          return {...firstPosition, down: !firstPosition.right}
        } else if (secondPosition.id === index) {
          return {...secondPosition, down: !secondPosition.right}
        } else {
          return pos;
        }
      })

      console.log(checkedPositions)
      return checkedPositions;
    
      
    } else {
      console.log(collectedPositions)
        return collectedPositions;
    }
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
      speed={speed}
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
