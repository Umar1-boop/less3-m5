import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('hello'); 
        return () => {
            console.log('The End ?');
        }
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((e) => console.log(e)
        )
    }, [])

    useEffect(() => {
        const time = setTimeout(() => {
            console.log('bey');
        }, 10000)
    })

  return (
    <div>
        <h1>Users</h1>
        {
            users?.map((user) => (
                <div key={user.id}>
                    <h3>Users name: {user.name}</h3>
                    <h3>Users email: {user.email}</h3>
                    <h3>Users phone: {user.phone}</h3>
                </div>
            ))
        }
    </div>
  )
}
