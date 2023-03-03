import Circle from "./components/Circle.js"
import './App.css';
import {useState} from "react"

function App() {

const [positions, setPositions] = useState([{id: 0, x: 0, y: 0}, {id: 1, x: 400, y: 400}])


  function handleSetPositions(x, y, id, oldPositions) {

    //positions isn't updating, but newPositions is?
    

    const newPositions = oldPositions.map((position, index) => {

      if (position.id === id) {
        return {id: id, x: x, y: y}
      } else {
        return position
      }
    })

    //handleCollision(newPositions)
  
    
    setPositions(newPositions)
  }

  const circles = positions.map((p, index) => {
    
    return (
    <Circle 
      key={index}
      id={p.id}
      x={p.x}
      y={p.y}
      firstColor={'green'}
      sound={'A4'}
      positions={positions}
      onSetPositions={handleSetPositions}
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
