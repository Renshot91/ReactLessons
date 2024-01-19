import { useEffect } from "react"



function UnMount(){

    // 4) Размонтирование
    useEffect(() => {
        return () => {
            console.log('Размонтирование UnMount')
        }
    }, [])


    return(
        <div>
            UnMount component
        </div>
    )
}


export default UnMount