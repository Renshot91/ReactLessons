import { useContext } from "react"
import Block from "./Block"
import { Context } from "../context/Context"


function Content(){
 
    const {reverseState} = useContext(Context)

    return(
        <div>
            Content
            <button onClick={reverseState}>Reverse string</button>
            <Block/>
        </div>
    )
}

export default Content



// поределение ссылки на функцию


