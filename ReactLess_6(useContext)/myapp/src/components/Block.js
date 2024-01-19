import { useContext } from "react"
import { Context } from "../context/Context"


function Block(){

    // useContext - функция, которая позволяет получить контекст из зоны области контекста
    const {string} = useContext(Context)

    return(
        <div>
            Block
            <h3>{string}</h3>
        </div>
    )
}

export default Block