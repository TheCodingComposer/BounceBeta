import Circle from "./components/Circle.js"
import './App.css';
import {useState} from "react"

function App() {

const [positions, setPositions] = useState([{x: 0, y: 0}, {x: 400, y: 400}])



  const circles = positions.map((p, index) => {
    return (
    <Circle 
      x={p[index].x}
      y={p[index].y}
    />
    )
  })

  return (

    <div className="App">
      <div className="page-container">

      
        <Circle
        x={0}
        y={0} 
        firstColor={'green'}
        sound={'A4'}
        />
         <Circle
        x={800}
        y={400} 
        firstColor={'blue'}
        sound={'B4'}
        />
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
