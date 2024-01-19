// useEffect - функция (хук), которая позволяет выполнить побочный код в момент 
// перехода компонента в новое состояние

import { useEffect, useState } from "react"
import UnMount from "./Unmount"

function Example(){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // Режимы работы useEffect:
    // ------------
    // 1) Монтирование (или обновление)
    // useEffect(() => {
    //     console.log('Монтирование (или обновление)!')
    // })

    // ------------
    // 2) Монтирование
    // useEffect(() => {
    //     console.log('Монтирование')
    // }, [])

    // ------------
    // 3) Монтирование (или обновление ЗАВИСИМОСТИ)
    // useEffect(() => {
    //   console.log('Монтирование (или обновление count1)!')  
    // }, [count1])

    // useEffect(() => {
    //     console.log('Монтирование (или обновление count2)!')  
    // }, [count2])

    // useEffect(() => {
    //     console.log('Монтирование (или обновление count2 или count1)!')  
    // }, [count2, count1])

    // ------------
    // 4) Размонтирование
    // см компонентUnMount

    // console.log('Инициализация!')

    return(
        <div>
            Example
            <p>{count1}</p>
            <button onClick={() => setCount1(count1 + 1)} >Click</button>

            <p>{count2}</p>
            <button onClick={() => setCount2(count2 + 1)} >Click</button>

            {count1 < 3 && <UnMount/>}
        </div>
    )
}


export default Example