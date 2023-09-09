import React from "react";
function Rand() {   
    const [color, setColor] = React.useState("rgb(50,50,50)")
    const [message, setMessage] = React.useState("Click to change color")
    let colors = {
        r: 0,
        g: 0,
        b: 0
    }
    function handleClick() {
        colors.r = Math.random() * 255
        colors.g = Math.random() * 255
        colors.b = Math.random() * 255
        if(colors.r >= colors.b && colors.r >= colors.g){
            setMessage("The button is red")
        } else if (colors.b >= colors.r && colors.b >= colors.g) {
            setMessage("The button is blue")
        } else if (colors.g >= colors.r && colors.g >= colors.b) {
            setMessage("The button is green")
        } else{
            setMessage('Click to change color')
        }
        console.log("clicked", colors)
        setColor(`rgb(${colors.r},${colors.g},${colors.b})`)
    }


    
    return (
        <div>
            <button style = {{backgroundColor: color}} onClick={handleClick}>{message}</button>
        </div>
    );
}

export default Rand;