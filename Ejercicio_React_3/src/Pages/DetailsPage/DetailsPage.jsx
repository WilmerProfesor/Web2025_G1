import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CustomCard from '../../Components/CustomCard/CustomCard'

const DetailsPage = () => {
  
  const [character, setCharacter] = useState({})

  let {id} = useParams()
  useEffect(() => {    
      fetch('https://rickandmortyapi.com/api/character/'+id)
      .then(response => response.json())
      .then(data => setCharacter(data))
  },[]);

  return (    
    <>
      <CustomCard user={character}/>      
    </>
  )
}

export default DetailsPage