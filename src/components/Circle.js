import {useState, useRef, useEffect} from "react"
import useInterval from "./useInterval.js"
// import audio from "../static"



export default function Circle({id, firstColor, sound, positions, onSetPositions, onSetDirections,  speed}) {

    // const sound = new Audio(`../Piano_mp3/${file}.mp3`)
    // const sound = new Audio('/Users/matthew/Desktop/Coding/1A_Project_Ideas/bounce-beta/src/static/Piano_mp3/A4.mp3')
    // console.log(id, positions)
    
    const positionRef = useRef()
    // const [position, setPosition] = useState({x: x, y: y})
    const [color, setColor] = useState(firstColor)
    const [position, setPosition] = useState({x: positions[id].x, y: positions[id].y})
    const [direction, setDirection] = useState({right: positions[id].right, down: positions[id].down})
    const [timerStarted, setTimerStarted] = useState(false)

   

    function moveBall() {


        if (positions[id].down && positions[id].right) {
          
            setPosition((prev) =>{ return {x: prev.x + 1, y: prev.y + 1}})
          
        } else if (positions[id].down && !positions[id].right) {
         
            setPosition((prev) =>{ return {x: prev.x - 1, y: prev.y + 1}})
            
        } else if (!positions[id].down && positions[id].right) {
            
            setPosition((prev) =>{ return {x: prev.x + 1, y: prev.y - 1}})
        } else {
        
            setPosition((prev) =>{ return {x: prev.x - 1, y: prev.y - 1}})
        }
        
        
    }

    useEffect(() => {
        // setTimeout(() => {
            onSetPositions(id, position.x, position.y, positions[id].right, positions[id].down)
        // }, (speed / positions.length) * id)
        
    }, [position])




    //initialize starting position / direction of ball
    // let xPosition = position.x;
    // let yPosition = position.y;


    useInterval(() => {

        moveBall()
            // if (direction.down) {
            //     yPosition++;
            // } else {
                
            //     yPosition--;
            // }
            // if (direction.right) {
            //     xPosition++;
            // } else {
            //     xPosition--;
            // }

            
            if (position.y > 580) {
                // sound.play();
                // setDirection((prev) =>{ return {right: direction.right, down: false}})
                onSetDirections(positions[id].right, false, positions[id].id)
            }
            if (position.y <= 0) {
                // sound.play();
                // setDirection((prev) => {return {right: direction.right, down: true}})
                onSetDirections(positions[id].right, true, positions[id].id)
            }
            if (position.x <= 0) {
                // sound.play();
                // setDirection((prev) => {return {right: true, down: direction.down}})
                onSetDirections(true, positions[id].down, positions[id].id)
            } if (position.x > 1200) {
                // sound.play();
                // setDirection((prev) => {return{right: false, down: direction.down}})
                onSetDirections(false, positions[id].down, positions[id].id)
            }
       
}, speed)   
   

    
    

    return (
        <div 

        onClick={() => {

        
            
            // sound.play()
        
      
       
            

            
            
        }}

        ref={positionRef}
        className="circle" 
        style={{width: '100px', height: '100px', borderRadius: '50%', backgroundColor: color,
        top: position.y, left: position.x}}>

        </div>
    )

}