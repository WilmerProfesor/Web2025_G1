import { useState, useEffect } from 'react'
// import { doc, getDoc } from "firebase/firestore";  // para un documento
import { collection, query, where, getDocs } from "firebase/firestore";  // para varios documentos
import db from './Firebase/Firebase'

import CardPet from './Components/CardPet/CardPet'

import './App.css'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const getPets = async () => {
      //------ OBTENER VARIOS DOCUMENTOS DE FIREBASE ------
      const q = query(collection(db, "animales"));
      // const q = query(collection(db, "animales"), where("especie", "==", "Perro"));

      const querySnapshot = await getDocs(q);
      const filteredPets = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        filteredPets.push({
          id: doc.id,
          ...doc.data()
        });
      });
      console.log(filteredPets);
      setPets(filteredPets);

      //------ OBTENER UN DOCUMENTO DE FIREBASE ------
      // const docRef = doc(db, "animales", "EHeqZ9Meyu6R4QIZict0");
      // const docSnap = await getDoc(docRef);      
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      //   setPets(docSnap.data());
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    }
    getPets();
  }, [])

  return (
    <main>
      {/* {pets != null ? <CardPet pet={pets} /> : <h6>Cargando...</h6>} //PARA PINTAR UN OBJETO  */}
      {
        // pets.length > 0 ? pets.map((pet) => (
        //   <CardPet key={pet.id} pet={pet} />
        // )) : <h6>Cargando...</h6>
        pets.map((item) => (
          <CardPet key={item.id} pet={item} />
        ))
      }
    </main>
  )
}

export default App
