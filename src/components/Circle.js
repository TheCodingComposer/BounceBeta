import {useState, useRef, useEffect} from "react"
import useInterval from "./useInterval.js"
// import audio from "../static"



export default function Circle({id, firstColor, sound, positions, onSetPositions}) {

    // const sound = new Audio(`../Piano_mp3/${file}.mp3`)
    // const sound = new Audio('/Users/matthew/Desktop/Coding/1A_Project_Ideas/bounce-beta/src/static/Piano_mp3/A4.mp3')
    // console.log(id, positions)
    
    const positionRef = useRef()
    // const [position, setPosition] = useState({x: x, y: y})
    const [color, setColor] = useState(firstColor)
    const [position, setPosition] = useState({x: positions[id].x, y: positions[id].y})
    const [direction, setDirection] = useState({right: true, down: true})
    const [timerStarted, setTimerStarted] = useState(false)

   

    function moveBall() {


        if (direction.down && direction.right) {
            console.log('down and right')
            setPosition((prev) =>{ return {x: prev.x + 1, y: prev.y + 1}})
          
        } else if (direction.down && !direction.right) {
            console.log('up and right')
            setPosition((prev) =>{ return {x: prev.x - 1, y: prev.y + 1}})
            
        } else if (!direction.down && direction.right) {
            
            setPosition((prev) =>{ return {x: prev.x + 1, y: prev.y - 1}})
        } else {
        
            setPosition((prev) =>{ return {x: prev.x - 1, y: prev.y - 1}})
        }
        
        
    }

    useEffect(() => {
        onSetPositions(position.x, position.y, id, positions)
    }, [position])

   



    //initialize starting position / direction of ball
    let xPosition = position.x;
    let yPosition = position.y;



    function startTimer() {
      

    }


   


    function timer() {

        console.log(position)        
            

    }


    useInterval(() => {

        console.log(position)

        moveBall()
            if (direction.down) {
                yPosition++;
            } else {
                
                yPosition--;
            }
            if (direction.right) {
                xPosition++;
            } else {
                xPosition--;
            }

            
            if (position.y > 580) {
                
                // animate();
                // sound.play();
                setDirection((prev) =>{ return {right: direction.right, down: false}})
            }
            if (position.y == 0) {
                // animate();
                // sound.play();
                setDirection((prev) => {return {right: direction.right, down: true}})
            }
            if (position.x == 0) {
                // animate();
                // sound.play();
                setDirection((prev) => {return {right: true, down: direction.down}})
            } if (position.x > 1200) {
                // animate();
                // sound.play();
                setDirection((prev) => {return{right: false, down: direction.down}})
            }
       
}, 10)   
   

    
    

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