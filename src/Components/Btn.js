import React from "react"
const styleDark = {
    backgroundColor: "rgb(50,50,50)",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
}
const styleLight = {
    backgroundColor: "rgb(200,200,200)",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
}
let darkModeOn = false
function clickHandler(){
    console.log("clicked")
    darkModeOn = !darkModeOn;
}

function Btn() {

    const [mode, setMode] = React.useState(styleLight)
    const [text, setText] = React.useState("Dark Mode")

    function clickHandler(){
        if(darkModeOn){
            setMode(styleLight)
            setText("Dark Mode")
        } else {
            setMode(styleDark)
            setText("Light Mode")

        }
        darkModeOn = !darkModeOn
    }
    return (
        <div>
            <button style = {mode} onClick={clickHandler}>
                {text}
            </button>
        </div>
    )
}
export default Btn;