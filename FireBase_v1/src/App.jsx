import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { collection, query, where, getDocs } from "firebase/firestore";

import Students from './Components/Students'
import db from './FireBase/FireBase'

function App() {
  const [students, setStudents] = useState({})

  useEffect(() => {
    const fetchStudents = async () => {
      const q = query(collection(db, "Personajes"));

      const querySnapshot = await getDocs(q);
      const data=[];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push({...doc.data(), id: doc.id});        
      });
      setStudents(data);
      console.log(data);
    }
    fetchStudents();
  }, [])

  const dato = { nombre: "JUan", apellido: "Pérez", edad: 20, image: "https://www.w3schools.com/w3images/lights.jpg" }

  return (
    <main>      
      {
      students.length > 0 ?students.map((student) =>( <Students key={student.id} item={student} />)
      ):"Cargando..."}
      {/* <Students item={students[0]} /> */}
    </main>
  )
}

export default App
