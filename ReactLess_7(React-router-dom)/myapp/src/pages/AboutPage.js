import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function AboutPage(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    },[])

    return(
        <div className="content">
            <h1>About Page</h1>
            <ol>
                {users.map(elem=> 
                    <Link key={elem.id} to={''+elem.id}>
                        <li key={elem.id}>
                            {elem.name}
                        </li>
                    </Link>
                )}
            </ol>
        </div>
    )
}

export default AboutPage