import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CustomCard from '../../Components/CustomCard/CustomCard'


const FilterPage = () => {
  const { especie } = useParams()
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      await fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())    
      .then((data) => setCharacters(data.results))            
      setCharacters( (characters) => {
        return characters.filter((character) => character.species=== especie);
      })
    }
    fetchCharacters();
    console.log(characters);    
    },[especie]);

  

  return (
    <main>
        { characters.map((user) => (
            <Link to={`/details/${user.id}`} key={user.id}>
                <CustomCard key={user.id} user={user}/>
            </Link>
          
        )) }
      </main>
  )
}

export default FilterPage