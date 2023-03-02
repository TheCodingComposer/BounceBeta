import {useState, useRef, useEffect} from "react"
// import audio from "../static"

export default function Circle({x, y, firstColor, file}) {

    // const sound = new Audio(`../Piano_mp3/${file}.mp3`)
    // const sound = new Audio('/Users/matthew/Desktop/Coding/1A_Project_Ideas/bounce-beta/src/static/Piano_mp3/A4.mp3')
    
    const positionRef = useRef()
    const [position, setPosition] = useState({x: x, y: y})
    const [color, setColor] = useState(firstColor)

   

    function moveBall(x, y, down, right) {

        if (down && right) {
            return {x: x + 1, y: y + 1};
        } else if (down && !right) {
            return {x: x + 1, y: y - 1};
        } else if (!down && right) {
            return {x: x - 1, y: y + 1}
        } else {
            return {x: x - 1, y: y - 1}
        }
        
        
    }



    const colors = ['green', 'red', 'yellow', 'orange', 'purple']

        let currentColorIndex = 1;

        function animate() {
            if (currentColorIndex + 1 > currentColorIndex.length) {
                currentColorIndex = 0;
            }
            setColor(colors[currentColorIndex])
            
            currentColorIndex++;
        }

    return (
        <div 

        onClick={() => {
            // sound.play()
            let xPosition = position.x;
            let yPosition = position.y;

            let down = true;
            let right = true;
            setInterval(() => {
                let newPosition = moveBall(xPosition, yPosition, down, right)
                if (down) {
                    yPosition++;
                } else {
                    yPosition--;
                }
                if (right) {
                    xPosition++;
                } else {
                    xPosition--;
                }

                
                if (newPosition.y > 580) {
                    // animate();
                    // sound.play();
                    down = false;
                }
                if (newPosition.y == 0) {
                    // animate();
                    // sound.play();
                    down = true;
                }
                if (newPosition.x == 0) {
                    // animate();
                    // sound.play();
                    right = true;
                } if (newPosition.x > 1200) {
                    // animate();
                    // sound.play();
                    right = false;
                }
                setPosition({x: newPosition.x, y: newPosition.y});
            }, 1)
            
            
        }}

        ref={positionRef}
        className="circle" 
        style={{width: '100px', height: '100px', borderRadius: '50%', backgroundColor: color,
        top: position.y, left: position.x}}>

        </div>
    )

}