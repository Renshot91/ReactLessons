import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function NotFoundPage(){

    const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/')
    //     }, 2000)   
    // },[])

    return(
        <div className="content">
            <button onClick={() => navigate('/')}>Home</button>
            <h1>NotFound Page</h1>
            <img width={1000} height={300} src="https://static.vecteezy.com/system/resources/previews/006/549/647/non_2x/404-landing-page-free-vector.jpg"/>
        </div>
    )
}

export default NotFoundPage