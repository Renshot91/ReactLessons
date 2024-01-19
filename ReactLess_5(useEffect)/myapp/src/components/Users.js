import { useEffect, useState } from "react"


function Users(){

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log('fetch...')
                setUsers(data)
            })
    }, [])

    // Задание 
    // По двойному клику реализуйте удаление пользователя

    function delUser(id){
        let filtered_users = users.filter(elem => elem.id !== id)
        setUsers(filtered_users)
    }

    return(
        <div>
            <ul>
                {users.map(elem => 
                    <li key={elem.id} onClick={() => delUser(elem.id)}>
                        {elem.name}
                    </li>
                )}
            </ul>
        </div>
    )
}


export default Users



