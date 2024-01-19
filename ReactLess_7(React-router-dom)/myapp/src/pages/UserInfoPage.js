import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function UserInfoPage(){

    // useParams() позволяет получить параметр ("/about/:id"), который мы в роуте обяъвили через :
    const {id} = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res => res.json())
            .then(data => setUser(data))
    },[])

    return(
        <div className="content">
            <h1>UserInfo Page</h1>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.company?.name}</p>
                <p>{user.company?.catchPhrase}</p>
                <p>{user.company?.bs}</p>
        </div>
    )
}

export default UserInfoPage