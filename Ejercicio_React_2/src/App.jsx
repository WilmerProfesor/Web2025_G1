import './App.css'
import {useEffect, useState} from 'react';

//importacion de componentes personales
import Header from './Components/Header/Header'
import CardUser from './Components/CardsUser/CardUser'

const App= ()=>{
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <>
      <Header/>
      <main>
        {
          users.map((user) => (
            <CardUser key={user.id} user={user} />
          ))
        }
      </main>
    </>
  )
}

export default App
