// import { useEffect, useState } from "react"

// export default function Users() {
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         console.log('hello'); 
//         return () => {
//             console.log('The End ?');
//         }
//     }, [])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((data) => setUsers(data))
//         .catch((e) => console.log(e)
//         )
//     }, [])

//     useEffect(() => {
//         const time = setTimeout(() => {
//             console.log('bey');
//         }, 10000)
//     })

//   return (
//     <div>
//         <h1>Users</h1>
//         {
//             users?.map((user) => (
//                 <div key={user.id}>
//                     <h3>Users name: {user.name}</h3>
//                     <h3>Users email: {user.email}</h3>
//                     <h3>Users phone: {user.phone}</h3>
//                 </div>
//             ))
//         }
//     </div>
//   )
// }


import { useState, useEffect } from 'react';
import './users.css';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
        <p>Загрузка пользователей...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}